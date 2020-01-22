import { ArangoDBAdapter, Project } from 'cruddl'

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

export const newProject = (connection, schema) => {
	
	const project = new Project({
		sources: [
			{
				name: 'schema.graphql',
				body: schema
			},
			{
				name: 'permission-profiles.json',
				body: JSON.stringify({
					permissionProfiles: {
						default: {
							permissions: [
								{
									roles: ['users'],
									access: 'readWrite'
								}
							]
						}
					}
				})
			}
		],
		getExecutionOptions: ({ context }) => ({ authRoles: ['users'] }),
		getOperationIdentifier: ({ context }) => context
	})

	const schema = project.createSchema(connection)
	connection.updateSchema(project.getModel())

	return schema
}