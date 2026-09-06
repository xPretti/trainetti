import {
    createContext,
    ReactNode,
    useCallback,
    useMemo,
    useState,
} from "react";
import { Style, styles } from "../styles";
import { ThemeType } from "../types/Theme";

type ThemeContextData = {
    theme: Style;
    themeType: ThemeType;
    setTheme: (theme: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextData | null>(null);

type ThemeProviderProps = {
    children: ReactNode;
    initialTheme?: ThemeType;
};

export function ThemeProvider({
    children,
    initialTheme = ThemeType.DARK,
}: ThemeProviderProps) {
    const [themeType, setThemeType] = useState<ThemeType>(initialTheme);

    const setTheme = useCallback((theme: ThemeType) => {
        setThemeType(theme);
    }, []);

    const theme = styles[themeType];

    const value = useMemo<ThemeContextData>(
        () => ({
            theme,
            themeType,
            setTheme,
        }),
        [theme, themeType, setTheme],
    );

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}
