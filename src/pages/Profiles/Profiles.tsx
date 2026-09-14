import { StyleSheet, Text } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { Style } from "../../styles";

interface IProfilesProps {}

export function Profiles ({}: IProfilesProps) {
   const { theme } = useTheme();

   const styles = createStyles(theme);

   return (
      <Text>Página de profiles</Text>
   );
};

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         backgroundColor: theme.colors.header,
      },
   });