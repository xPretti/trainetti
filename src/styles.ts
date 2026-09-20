import { ThemeType } from "./types/Theme";

export const styles = {
	[ThemeType.DARK]: {
		boxShadow: {
			0: "0px 1px 1px rgba(0, 0, 0, 0.25)",
			1: "0px 2px 2px rgba(0, 0, 0, 0.25)",
			2: "0px 4px 4px rgba(0, 0, 0, 0.25)",
			3: "0px 8px 8px rgba(0, 0, 0, 0.25)",
			4: "0px 16px 16px rgba(0, 0, 0, 0.25)",
		},

		padding: {
			0: 5,
			1: 8,
			2: 10,
			3: 15,
			4: 20,
			5: 24,
			6: 28,
			7: 32,
			8: 36,
			9: 40,
		},
      margin: {
			0: 5,
			1: 8,
			2: 10,
			3: 15,
			4: 20,
			5: 24,
			6: 28,
			7: 32,
			8: 36,
			9: 40,
		},

      borderRadius: {
         0: 2,
         1: 4,
         2: 8,
         3: 12,
         4: 16,
         5: 20,
         6: 24,
         7: 28,
         8: 32,
         9: 36,
      },

		colors: {
			absolute: {
				white: "#FFFFFF",
				black: "#000000",
			},

			primary: "#a3ff4d",
			secondary: "#edeaef",
			tertiary: "#96969f",

			white: "#000000",
			black: "#FFFFFF",

			background: "#17171f",
			statusBar: "#17171f",
			header: "#17171f",
			surface: "#111827",
			divider: "#374151",

			gray: {
				0: "#e8e9eb",
				1: "#d3d4d7",
				2: "#aaabaf",
				3: "#818287",
				4: "#34353b",
				5: "#2f3036",
				6: "#26272c",
				7: "#1b1b24",
				8: "#18181f",
				9: "#14141a",
			},

			lime: {
				0: "#f6ffed",
				1: "#edffdb",
				2: "#daffb8",
				3: "#c8ff94",
				4: "#b5ff71",
				5: "#a3ff4d",
				6: "#82cc3e",
				7: "#62992e",
				8: "#41661f",
				9: "#21330f",
			},

			success: "#4ADE80",
			warning: "#FACC15",
			danger: "#F87171",
			info: "#60A5FA",
		},
		fontSize: {
			xs: 12,
			sm: 14,
			md: 16,
			lg: 24,
			xl: 28,
		},
	},
} as const;

export type Style = (typeof styles)[ThemeType];
