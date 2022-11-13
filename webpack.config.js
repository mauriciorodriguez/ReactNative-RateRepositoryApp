const path = require("path");
const createExpoWebpasdackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, args) {
	const config = createExpoWebpasdackConfigAsync(env, args);

	config.module.rules.push({
		test: /\.ts$/,
		loader: "babel-loader",
		include: [path.join(__dirname, "node_modules/react-router-native")],
	});

	return config;
};
