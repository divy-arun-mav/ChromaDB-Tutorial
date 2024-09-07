const { ChatGroq } = require("@langchain/groq");
const { HumanMessage } = require("@langchain/core/messages");

const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY 
});

const message = new HumanMessage("What is your name ?");

const getMsg = async () => {
    const res = await model.invoke([message]);
    console.log(res.content);
}
getMsg();