const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/', expressGraphQL({
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Started the server on http://localhost:4000');
});
