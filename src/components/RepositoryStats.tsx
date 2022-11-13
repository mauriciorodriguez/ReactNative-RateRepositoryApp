import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousands = (value: number): string => {
	return value >= 1000 ? `${Math.round(value / 1000)}k` : String(value);
};

const RepositoryStats = (repo: any) => {
	return (
		<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
			<View>
				<StyledText align="center" fontWeight="bold">
					Stas
				</StyledText>
				<StyledText align="center">
					{parseThousands(repo.stargazers_count)}
				</StyledText>
			</View>
			<View>
				<StyledText align="center" fontWeight="bold">
					Forks
				</StyledText>
				<StyledText align="center">
					{parseThousands(repo.forks_count)}
				</StyledText>
			</View>
			<View>
				<StyledText align="center" fontWeight="bold">
					Watchers
				</StyledText>
				<StyledText align="center">
					{parseThousands(repo.watchers_count)}
				</StyledText>
			</View>
		</View>
	);
};

export default RepositoryStats;
