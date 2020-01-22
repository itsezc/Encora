import * as React from 'react'

import ApolloClient, { 
	gql as GQL,
	useQuery as Query,
	useLazyQuery as queryNow,
	useMutation as Mutation
} from 'apollo-boost'

import { InMemoryCache } from 'apollo-cache-inmemory'

const GraphQLClient = new ApolloClient({
	uri: 'https://localhost:8080',
	cache: new InMemoryCache()
})

export {
	GraphQLClient,
	GQL,
	Query,
	queryNow,
	Mutation
}