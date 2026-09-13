import { Pressable, StyleSheet, Text, View } from "react-native";
import { Style } from "../../../styles";
import { useTheme } from "../../../hooks/useTheme";
import { alpha } from "../../../utils/color";
import { LucideIcon } from "lucide-react-native";

interface ICardButtonProps {
	title: string;
	description: string;
	handleSelect: () => void;
	icon?: LucideIcon;
}

export function CardButton({
	title,
	description,
	handleSelect,
	icon: Icon,
}: ICardButtonProps) {
	const { theme } = useTheme();

	const styles = createStyles(theme);

	return (
		<Pressable style={styles.container} onPress={handleSelect}>
			{Icon && (
				<View style={styles.icon}>
					<Icon size={20} color={theme.colors.lime[5]} />
				</View>
			)}
			<View>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.description}>{description}</Text>
			</View>
		</Pressable>
	);
}

const createStyles = (theme: Style) =>
	StyleSheet.create({
		container: {
			backgroundColor: theme.colors.gray[7],
			borderWidth: 1,
			borderColor: theme.colors.gray[6],
			flex: 1,
			flexDirection: "column",
			alignItems: "flex-start",
			paddingHorizontal: 16,
			paddingVertical: 16,
			gap: 10,
			borderRadius: 20,
			boxShadow: theme.boxShadow[0],
		},
		icon: {
			backgroundColor: alpha(theme.colors.lime[7], 0.2),
			height: 38,
			width: 38,
			borderRadius: 10,
			justifyContent: "center",
			alignItems: "center",
			padding: 10,
		},

		title: {
			fontSize: theme.fontSize.md,
			color: theme.colors.secondary,
			fontWeight: "bold",
		},

		description: {
			fontSize: theme.fontSize.sm,
			color: theme.colors.tertiary,
		},
	});
