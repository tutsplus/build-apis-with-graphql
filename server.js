const express = require('express');
const expressGraphQL = require('express-graphql');

// const { schema, root } = require('./server/schema');
const schema = require('./server/schema');

const app = express();

app.use('/', expressGraphQL({
  schema,
  // rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Started the server on http://localhost:4000');
});
