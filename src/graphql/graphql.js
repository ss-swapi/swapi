const { graphql, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema } = require('graphql');
const axios = require('axios')
// Construct a schema, using GraphQL schema language

const PlanetType = new GraphQLObjectType({
    name: 'Planet',
    fields: () => ({
        name: {
            type: GraphQLString,
            description: 'The name of this planet.',
        },
    }),
});


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
            // resolve: person => isNaN(person.mass) ? null : person.mass,
        },
        homeworld: {
            type: PlanetType,
            resolve: person => person.homeworld ? axios.get(person.homeworld).then(res => res.data) : null
        },
    }),
});

const PersonListType = new GraphQLObjectType({
    name: 'People',
    fields: () => ({
        count: {
            type: GraphQLInt,
            resolve: data => data.count,
        },
        next: {
            type: GraphQLString,
            resolve: data => data.next,
        },
        previous: {
            type: GraphQLString,
            resolve: data => data.previous,
        },
        people: {
            type: new GraphQLList(PersonType),
            resolve: data => data.results,
        },
    }),
});

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        personList: {
            type: PersonListType,
            args: {
                url: { type: GraphQLString },
            },
            resolve: (root, args) => axios.get(args.url || 'http://swapi.dev/api/people/').then(res => res.data)
        },
        person: {
            type: PersonType,
            args: {
                id: { type: GraphQLString },
            },
            resolve: (root, args) => axios.get(`http://swapi.dev/api/people/${args.id}/`).then(res => {
                return res.data;
            })// Fetch the person with ID `args.id`,
        }
    }),
});



const testSchema = new GraphQLSchema({
    query: QueryType,
});

/*const Person = new GraphQLObjectType({
    name: 'Person',
    description: 'An individual person or character within the Star Wars universe.',

    fields: () => ({
        name: {
            type: GraphQLString,
            description: 'The name of this person.',
            resolve: person => person.name,
        }
    }),
});*/







/*graphql(testSchema, '{ person {name, height, mass} }').then((response) => {
    console.log(response);
});*/


/*graphql(testSchema, '{ person(id:"1") {name, height, mass, homeworld {name}} }').then((response) => {
    console.log(JSON.stringify(response));
});*/

/*graphql(testSchema, '{ people {name, height, mass, homeworld {name}} }').then((response) => {
    console.log(JSON.stringify(response));
});*/


/*graphql(testSchema, '{ personList {count, next, previous, people {name, height, mass, homeworld {name}}} }').then((response) => {
    console.log(JSON.stringify(response));
});*/


graphql(testSchema, `{ 
    personList {
        count, 
        next, 
        previous, 
        people {
            name, 
            height, 
            mass, 
            homeworld {
                name
            }
        }
    } 
}`).then((response) => {
    console.log(JSON.stringify(response));
});

/*graphql(testSchema, `{
    personList(url:"http://swapi.dev/api/people/?page=2") {
        count,
        next,
        previous,
        people {
            name,
            height,
            mass,
            homeworld {
                name
            }
        }
    }
}`).then((response) => {
    console.log(JSON.stringify(response));
});*/
