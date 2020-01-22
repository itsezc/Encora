// @flow

import * as React from 'react'

import { ApolloProvider } from '@apollo/react-hooks'
import { GraphQLClient } from './graphql'

import { StateContext } from './state'

const Provider = (reducer: any, initialState: Object, children: React.Node) => (
	<StateContext.Provider
		value={React.useReducer(reducer, initialState)}
	>
		<ApolloProvider client={GraphQLClient}>
			{children}
		</ApolloProvider>
	</StateContext.Provider>
)

export {
	Context
}