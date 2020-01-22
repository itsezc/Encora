// @flow

import { ApolloServer } from 'apollo-server'

export const init = (resolvers: ?Object, typeDefs: ?Object, schema: ?Object) => {
	return new ApolloServer({
		resolvers,
		typeDefs,
		context: ({ req }) => req,
		cacheControl: {
			defaultMaxAge: 1
		}
	})
}

export const start = (server, port: ?number = 8086) => {
	return server
			.listen(port)
			.then(( info ) => console.log(`ENCORA - Apollo GraphQL server started on port ${info.port}`))
}