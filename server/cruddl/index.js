import { ArangoDBAdapter } from 'cruddl'

export const connection = (
	name: string,
	host: string,
	user: string,
	pass: string,
	port: number,
	https: boolean = true
) => new ArangoDBAdapter({
	databaseName: name,
	url: `${https ? 'https' : 'http'}://${user}@${host}:${port}`,
	user,
	password: pass 
})