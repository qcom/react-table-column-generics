module.exports = {
	entry: {
		'app': './src/app.tsx',
	},
	output: {
		path: __dirname + '/public/',
		filename: '[name].bundle.js'
	},
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					configFile: __dirname + '/src/tsconfig.json',
				}
			},
			{
				test: /\.tsx$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					configFile: __dirname + '/src/tsconfig.json',
				}
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['@babel/preset-env','@babel/preset-react'],
					plugins: ['@babel/transform-runtime']
				}
			},
			{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
		]
	},
	resolve: {
		extensions: ['.tsx', '.jsx', '.ts', '...']
	}
}
