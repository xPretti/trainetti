export const ThemeType = {
  DARK: "dark",
} as const;

export type ThemeType = (typeof ThemeType)[keyof typeof ThemeType];
