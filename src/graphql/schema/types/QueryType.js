import { GraphQLObjectType, GraphQLString} from 'graphql';
import PersonListType from 'graphql/schema/types/PersonListType';

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        personList: {
            type: PersonListType,
            args: {
                url: { type: GraphQLString },
            },
            //resolve: (root, args) => axios.get(args.url || 'http://swapi.dev/api/people/').then(res => res.data)
            // resolve: person => person.homeworld ? fetch(person.homeworld).then(response => response.json()).then(json => json.data) : null
            resolve: (root, args) => fetch(args.url || 'http://swapi.dev/api/people/').then(res => res.json())
        }
        /*person: {
            type: PersonType,
            args: {
                id: { type: GraphQLString },
            },
            resolve: (root, args) => fetch(`http://swapi.dev/api/people/${args.id}/`).then(res =>  res.json())// Fetch the person with ID `args.id`,
        }*/
    }),
});

export default QueryType;

