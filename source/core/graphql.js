import * as React from 'react'
import ApolloClient, { gql as GQL } from 'apollo-boost'

const GraphQLClient = new ApolloClient({
	uri: 'https://localhost:8080'
})

export {
	GraphQLClient,
	GQL
}