import { StyleSheet } from "react-native";
import { Style } from "../../styles";
import { useTheme } from "../../hooks/useTheme";

interface ISchedulesProps {}

export function Schedules ({}: ISchedulesProps) {
   const { theme } = useTheme();

   const styles = createStyles(theme);

   return (
      <></>
   );
};

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         backgroundColor: theme.colors.header,
      },
   });