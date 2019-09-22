module.exports = function(api) {

  api.cache(true)

  const presets = [
	[
		'@babel/preset-env',
		{
			'loose': true,
			'targets': {
				'esmodules': true
			}
		}
	],
	'@babel/preset-flow',
	'@babel/preset-react'
  ]

  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-export-default-from',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    
  ]

  const ignore = []

  return {
    presets,
    plugins,
    ignore
  }
}
