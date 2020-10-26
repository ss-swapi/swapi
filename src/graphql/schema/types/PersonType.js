import {GraphQLObjectType, GraphQLString} from 'graphql';
import PlanetType from 'graphql/schema/types/PlanetType';

const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        name: {
            type: GraphQLString,
            resolve: person => person.name,
        },
        height: {
            type: GraphQLString,
            resolve: person => person.height,
        },
        mass: {
            type: GraphQLString,
            resolve: person => person.mass,
        },
        birthYear:{
            type:GraphQLString,
            resolve: person => person.birth_year,
        },
        url:{
            type: GraphQLString,
            resolve: person => person.url,
        },
        homeworld: {
            type: PlanetType,
            resolve: person => person.homeworld ? fetch(person.homeworld).then(response =>  response.json()) : null
        },
    }),
});

export default PersonType;

