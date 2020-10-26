import {  GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList}  from 'graphql';
import PersonType from 'graphql/schema/types/PersonType';

const PersonListType = new GraphQLObjectType({
    name: 'PersonList',
    fields: () => ({
        count: {
            type: GraphQLInt,
            resolve: data => data.count,
        },
        next: {
            type: GraphQLString,
            resolve: data => data.next,
        },
        people: {
            type: new GraphQLList(PersonType),
            resolve: data => data.results,
        },
    }),
});

export default PersonListType;
