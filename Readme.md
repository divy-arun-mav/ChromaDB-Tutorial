# How to setup ChromaDB:-

1) First clone this repository
<pre>https://github.com/chroma-core/chroma</pre>

2) Then go into chroma folder
<pre>cd chroma</pre>

3) Then run this command 
<pre>docker-compose up -d --build</pre>

4) Then start a chroma server using following command:- 
<pre>docker run -p 8000:8000 chromadb/chroma</pre>
 The 4th command will create a chroma client running on port 8000
 This is what you should see 
 <pre>
DEBUG:    [07-09-2024 07:33:09] Starting component System
DEBUG:    [07-09-2024 07:33:09] Starting component OpenTelemetryClient
DEBUG:    [07-09-2024 07:33:09] Starting component SqliteDB
DEBUG:    [07-09-2024 07:33:09] Starting component QuotaEnforcer
DEBUG:    [07-09-2024 07:33:09] Starting component Posthog
DEBUG:    [07-09-2024 07:33:09] Starting component LocalSegmentManager
DEBUG:    [07-09-2024 07:33:09] Starting component SegmentAPI
INFO:     [07-09-2024 07:33:09] Started server process [1]
INFO:     [07-09-2024 07:33:09] Waiting for application startup.
INFO:     [07-09-2024 07:33:09] Application startup complete.
INFO:     [07-09-2024 07:33:09] Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
</pre>

5) Now you can access the chroma client at http://localhost:8000

# Explanation of Output:-

* This is what I got as output:-
<pre>
Server is listening at http://localhost:5000
Collection retrieved: Collection {
name: 'my_collection',
id: '234248d5-ee82-4ac0-9877-c49006c72ac1',
metadata: null,
api: ApiApi {
 basePath: 'http://localhost:8000',
 fetch: [Function: fetch],
 configuration: Configuration {
 apiKey: undefined,
 username: undefined,
 password: undefined,
 authorization: undefined,
 basePath: 'http://localhost:8000'
 },
 options: {}
}
}
Documents added to collection: null
Collection {
name: 'my_collection',
id: '234248d5-ee82-4ac0-9877-c49006c72ac1',
metadata: null,
api: ApiApi {
 basePath: 'http://localhost:8000',
 fetch: [Function: fetch],
 configuration: Configuration {
 apiKey: undefined,
 username: undefined,
 password: undefined,
 authorization: undefined,
 basePath: 'http://localhost:8000'
 },
 options: {}
}
}
Query results: {
ids: [ [ 'id2', 'id1' ] ],
distances: [ [ 5.20279302350202, 30.066392991573505 ] ],
metadatas: [ [ null, null ] ],
embeddings: null,
documents: [
 [
 'This is a document about oranges',
 'This is a document about pineapple'
 ]
],
uris: null,
data: null,
included: [ 'metadatas', 'documents', 'distances' ]
}
</pre>

* Above is the output I get when I put place name as nashik i.e const queryEmbeddings = await embeddingFunction(["This is a query document about nashik"]);

Now if I put place as hawaii, this is what I will get as output:-
<pre>
Server is listening at http://localhost:5000
Collection retrieved: Collection {
  name: 'my_collection',
  id: '234248d5-ee82-4ac0-9877-c49006c72ac1',
  metadata: null,
  api: ApiApi {
    basePath: 'http://localhost:8000',
    fetch: [Function: fetch],
    configuration: Configuration {
      apiKey: undefined,
      username: undefined,
      password: undefined,
      authorization: undefined,
      basePath: 'http://localhost:8000'
    },
    options: {}
  }
}
Documents added to collection: null
Collection {
  name: 'my_collection',
  id: '234248d5-ee82-4ac0-9877-c49006c72ac1',
  metadata: null,
  api: ApiApi {
    basePath: 'http://localhost:8000',
    fetch: [Function: fetch],
    configuration: Configuration {
      apiKey: undefined,
      username: undefined,
      password: undefined,
      authorization: undefined,
      basePath: 'http://localhost:8000'
    },
    options: {}
  }
}
Query results: {
  ids: [ [ 'id1', 'id2' ] ],
  distances: [ [ 11.534719933356673, 234.9741391507691 ] ],
  metadatas: [ [ null, null ] ],
  embeddings: null,
  documents: [
    [
      'This is a document about pineapple',
      'This is a document about oranges'
    ]
  ],
  uris: null,
  data: null,
  included: [ 'metadatas', 'documents', 'distances' ]
}
</pre>

* So here we can see the difference between first query and second query and we also get the distances.The more relatable the data is lesser the distance is.