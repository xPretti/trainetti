import { StyleSheet, Text } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { Style } from "../../styles";
import { AddProfileCard } from "../../components/layout/Profiles/AddProfileCard";

interface IProfilesProps {}

export function Profiles ({}: IProfilesProps) {
   const { theme } = useTheme();

   const styles = createStyles(theme);

   return (
      <AddProfileCard />
   );
};

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         backgroundColor: theme.colors.header,
      },
   });