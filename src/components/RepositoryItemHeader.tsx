import React from "react";
import { View, Image, StyleSheet } from "react-native";
import theme from "../theme";
import StyledText from "./StyledText";

const RepositoryItemHeader = (repo: any) => {
	return (
		<View style={{ flexDirection: "row", paddingBottom: 2 }}>
			<View style={{ paddingRight: 10 }}>
				<Image style={styles.image} source={{ uri: repo.owner.avatar_url }} />
			</View>
			<View style={{ flex: 1 }}>
				<StyledText fontSize="subheading" fontWeight="bold">
					Owner: {repo.owner.login}
				</StyledText>
				<StyledText fontWeight="bold">{repo.full_name}</StyledText>
				<StyledText style={styles.language}>{repo.language}</StyledText>
				<StyledText>{repo.description}</StyledText>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	language: {
		padding: 4,
		color: theme.colors.white,
		backgroundColor: theme.colors.primary,
		alignSelf: "flex-start",
		marginVertical: 4,
		borderRadius: 4,
		overflow: "hidden",
	},
	image: {
		width: 48,
		height: 48,
		borderRadius: 4,
	},
});

export default RepositoryItemHeader;
