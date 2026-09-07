import { ThemeType } from "./types/Theme";

export const styles = {
	[ThemeType.DARK]: {
		colors: {
			absolute: {
				white: "#FFFFFF",
				black: "#000000",
			},

			primary: "#4dff4d",
			secondary: "#edeaef",
			tertiary: "#96969f",

			white: "#000000",
			black: "#FFFFFF",

			background: "#131316",
			statusBar: "#131316",
			header: "#131316",
			surface: "#111827",
			divider: "#374151",

			gray: {
				base: "#3a3a44",
				0: "#ebebec",
				1: "#d8d8da",
				2: "#b0b0b4",
				3: "#89898f",
				4: "#616169",
				5: "#3a3a44",
				6: "#2e2e36",
				7: "#232328",
				8: "#17171b",
				9: "#0c0c0e",
			},

			lime: {
				base: "#4dff4f",
				0: "#edffed",
				1: "#dbffdc",
				2: "#b8ffb9",
				3: "#94ff95",
				4: "#71ff72",
				5: "#4dff4f",
				6: "#3ecc3f",
				7: "#2e992f",
				8: "#1f6620",
				9: "#0f3310",
			},

			success: "#4ADE80",
			warning: "#FACC15",
			danger: "#F87171",
			info: "#60A5FA",
		},
		fontSize: {
			xs: 10,
			sm: 12,
			md: 16,
			lg: 22,
			xl: 28,
		},
	},
} as const;

export type Style = (typeof styles)[ThemeType];
