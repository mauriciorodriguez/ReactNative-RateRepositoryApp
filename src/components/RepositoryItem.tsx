import React from "react";
import { View, StyleSheet, Image } from "react-native";
import theme from "../theme";
import RepositoryItemHeader from "./RepositoryItemHeader";
import RepositoryStats from "./RepositoryStats";
import StyledText from "./StyledText";

const RepositoryItem = (repo: any) => {
	return (
		<View key={repo.id} style={styles.container}>
			<RepositoryItemHeader {...repo} />
			<RepositoryStats {...repo} />
			<StyledText>URL: {repo.html_url}</StyledText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingVertical: 5,
	},
});

export default RepositoryItem;
