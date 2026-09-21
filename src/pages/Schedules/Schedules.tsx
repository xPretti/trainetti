import { StyleSheet } from "react-native";
import { Style } from "../../styles";
import { useTheme } from "../../hooks/useTheme";
import { useMemo } from "react";

interface ISchedulesProps {}

export function Schedules ({}: ISchedulesProps) {
   const { theme } = useTheme();

   const styles = useMemo(() => createStyles(theme), [theme]);

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