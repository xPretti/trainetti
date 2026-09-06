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
      surface: "#111827",
      divider: "#374151",

      gray: {
        base: "#646970",
        0: "#f0f0f1",
        1: "#e0e1e2",
        2: "#c1c3c6",
        3: "#a2a5a9",
        4: "#83878d",
        5: "#646970",
        6: "#50545a",
        7: "#3c3f43",
        8: "#282a2d",
        9: "#141516",
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
