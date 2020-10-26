import {GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import PlanetType from 'graphql/schema/types/PlanetType';

const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        name: {
            type: GraphQLString,
            resolve: person => person.name,
        },
        height: {
            type: GraphQLInt,
            resolve: person => person.height,
        },
        mass: {
            //"name": "Wilhuff Tarkin", "url": "http://swapi.dev/api/people/12/" has unknown for weight
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
        /* mass: {
             //"name": "Wilhuff Tarkin", "url": "http://swapi.dev/api/people/12/" has unknown for weight
             type: GraphQLInt,
             resolve: person => isNaN(person.mass) ? null : person.mass,
         },*/

        homeworld: {
            type: PlanetType,
            //resolve: person => person.homeworld ? axios.get(person.homeworld).then(res => res.data) : null
            resolve: person => person.homeworld ? fetch(person.homeworld).then(response =>  response.json()) : null
        },
    }),
});

export default PersonType;

