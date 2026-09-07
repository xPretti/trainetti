import { Stack } from "expo-router";
import { useTheme } from "../hooks/useTheme";
import { Pressable, StatusBar, View, Text } from "react-native";
import { CustomHeader } from "../components/layout/CustomHeader/CustomHeader";

export function StackNavigation() {
	const { theme, themeType } = useTheme();

	const selectedTheme = themeType === "dark" ? "light-content" : "dark-content";

	return (
		<>
			<StatusBar
				backgroundColor={theme.colors.statusBar}
				barStyle={selectedTheme}
			/>
			<Stack
				screenOptions={{
					headerShown: true,
					animation: "none",
					contentStyle: {
						backgroundColor: theme.colors.background,
					},
					header: (props) => <CustomHeader {...props} />,
				}}>
				<Stack.Screen
					name="index"
					options={{
						title: "Início",
					}}
				/>

				<Stack.Screen
					name="testpage"
					options={{
						title: "Página de teste",
					}}
				/>
			</Stack>
		</>
	);
}
