import express from 'express';

import { graphqlHTTP } from 'express-graphql';
import schema from './schema.js';
import resolvers from './resolver.js';

const app = express();

app.get("/", (req, res) => {
    res.send("Up and Running...");
})

const root = resolvers;

// here we are create a graphql enpoint and intergrating the schema and resolvers
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(9999, ()=>console.log("Running on port 9999..."))

// type these quesries in http://localhost:9999/graphql

// query {
//     getBook(id: "OW85rYiUfbDH_ES2d83Mk"){
//       id, bookTitle
//     }
//   }
  
//   mutation {
//     createBook(input: {
//       bookTitle: "The Slay Dargon",
//       bookAuthor: "Geronimo Stilton",
//       bookGenre:"Comedy",
//       bookCost:333,
//       bookImageUrl: ""
//     }){
//       id, bookTitle, bookAuthor
//     }
//   }
  
//   query {
//     getAllBooks{
//       bookTitle, bookGenre
//     }
//   }