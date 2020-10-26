import {GraphQLSchema}  from 'graphql';
import QueryType  from 'graphql/schema/types/QueryType';

const schema = new GraphQLSchema({
    query: QueryType,
});

export default schema;


