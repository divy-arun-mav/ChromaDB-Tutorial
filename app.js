const express = require('express');
const app = express();
const { ChromaClient } = require('chromadb');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

const embeddingFunction = async (texts) => {
    return texts.map(text => {
        return new Array(384).fill(Math.random());
    });
};

const client = new ChromaClient({
    baseUrl: "http://0.0.0.0:8000/"
});

let collection;

const CreateCollection = async () => {
    try {
        collection = await client.createCollection({
            name: "my_collection",
            embeddingFunction 
        });
        console.log("Collection created:", collection);
        return collection;
    } catch (error) {
        console.error("Error creating collection:", error);
    }
};

const getOrCreateCollection = async () => {
    try {
        collection = await client.getCollection({ name: "my_collection" });
        console.log("Collection retrieved:", collection);
    } catch (error) {
        if (error.message.includes('does not exist')) {
            try {
                collection = await client.createCollection({
                    name: "my_collection",
                    embeddingFunction 
                });
                console.log("Collection created:", collection);
            } catch (createError) {
                console.error("Error creating collection:", createError);
            }
        } else {
            console.error("Error retrieving collection:", error);
        }
    }
};

const addToCollection = async () => {
    try {
        if (!collection) {
            console.log("Retrieving or creating collection...");
            await getOrCreateCollection();
        }

        const embeddings = await embeddingFunction([
            "This is a document about pineapple",
            "This is a document about oranges"
        ]);

        const res = await collection.upsert({
            documents: [
                "This is a document about pineapple",
                "This is a document about oranges"
            ],
            ids: ["id1", "id2"],
            embeddings
        });
        console.log("Documents added to collection:", res);
    } catch (error) {
        console.error("Error adding to collection:", error);
    }
};

const queryCollection = async () => {
    try {
        if (!collection) {
            console.log("Retrieving or creating collection...");
            await getOrCreateCollection();
        }

        console.log(collection);

        // Generate embeddings for the query text
        const queryEmbeddings = await embeddingFunction(["This is a query document about hawaii"]);

        const results = await collection.query({
            queryEmbeddings: queryEmbeddings, // Provide the embeddings for the query
            nResults: 2, // how many results to return
        });

        console.log("Query results:", results);
    } catch (error) {
        console.error("Error querying collection:", error);
    }
};


const initializeAndQuery = async () => {
    await getOrCreateCollection();
    await addToCollection();
    await queryCollection();
};

initializeAndQuery();