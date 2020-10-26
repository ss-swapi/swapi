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
            resolve: (root, args) => fetch(args.url || 'http://swapi.dev/api/people/').then(res => res.json())
        }
    }),
});

export default QueryType;

