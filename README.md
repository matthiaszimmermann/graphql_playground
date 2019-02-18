# GraphQL Playground

Playground to get hands-on feeling for [examples](https://medium.freecodecamp.org/a-beginners-guide-to-graphql-60e43b0a41f5) provided by [Luis Aguilar](https://twitter.com/ldiego08).

## Delta to Description

Install JS Stuff:

```
npm install --save graphql
npm install --save express-graphql
npm install --save express
```

## Run the Demo

Step 1: Run the server app

```
node server.js
```

Step 2: Open the GraphiQL Page in the Browser

[localhost:4001/graphql?query=query{users{id%2Clogin}}](http://localhost:4001/graphql?query=query{users{id%2Clogin}})

Step 3: Check Result using Command Line

```
curl -X POST -H "Content-Type: application/json" -d '{"query": "{ users { id, login }}"}' http://localhost:4001/graphql
```
