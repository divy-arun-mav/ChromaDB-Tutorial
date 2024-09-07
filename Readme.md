# Explanation:-

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