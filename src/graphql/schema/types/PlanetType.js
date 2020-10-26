import {GraphQLObjectType, GraphQLString} from 'graphql';

const PlanetType = new GraphQLObjectType({
    name: 'Planet',
    fields: () => ({
        name: {
            type: GraphQLString,
            description: 'The name of this planet.',
        },
    }),
});

export default PlanetType;
