import React from "react";
import { View, Text } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Routes, Route } from "react-router-native";

const Main = () => {
	return (
		<View style={{ flex: 1 }}>
			<AppBar />
			<Routes>
				<Route path="/signin" element={<Text>Working on it</Text>} />
				<Route path="/" element={<RepositoryList />} />
			</Routes>
		</View>
	);
};

export default Main;
