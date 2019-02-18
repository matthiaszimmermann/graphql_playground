const fs = require('fs');

const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

/* 1. add dummy repo components: data, class, const object.
 */
const users = [{
    id: 1,
    login: 'bruce@waynecorp.com',
    firstName: 'Bruce',
    lastName: 'Wayne'
}, {
    id: 2,
    login: 'clark.kent@dailyplanet.com',
    firstName: 'Clark',
    lastName: 'Kent'
}];

class UserRepository {
    findAll() {
        return users;
    }
}

const userRepository = new UserRepository();

/* 2. Add a new type to the schema, then add a 'users'
 *    field to the root query which will return an array
 *    of users.
 */
const schema_content = fs.readFileSync('./user.sdl', {flag:'r'});
const schema = buildSchema("" + schema_content);

/* 3. Add a resolver for our new query. Here it will only
 *    pass the work through to the repository.
 */
const root = {
    users: () => {
        return userRepository.findAll();
    }
}

const app = express();

/* 4. We add GraphQL to our Express server...
 */
app.use('/graphql', graphqlHTTP({
    schema,             // .. using our schema
    rootValue: root,    // .. and our resolvers
    graphiql: true,     // .. and the GraphiQL editor - wait for it!
}));

/* 4. Fire it up!
 */
app.listen(4001);

console.log("Running a GraphQL API server at localhost:4001/graphql");
