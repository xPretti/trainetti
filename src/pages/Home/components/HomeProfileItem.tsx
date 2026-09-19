import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Style } from "../../../styles";
import { ChevronRight } from "lucide-react-native";

interface IProfileItemProps {
   title: string;
   handleClick?: () => void;
}

export function HomeProfileItem({ title, handleClick }: IProfileItemProps) {
   const { theme } = useTheme();

   const styles = createStyles(theme);

   return (
      <TouchableOpacity style={styles.container} onPress={handleClick}>
         <Text style={styles.title}>{title}</Text>
         <View style={styles.arrow}>
            <ChevronRight size={16} color={theme.colors.absolute.black} />
         </View>
      </TouchableOpacity>
   );
};

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "space-between",
         width: "100%",
         borderWidth: 1,
         backgroundColor: theme.colors.gray[7],
         borderColor: theme.colors.gray[6],
         paddingVertical: theme.padding[2],
         paddingHorizontal: theme.padding[3],
         borderRadius: 15,
      },
      title: {
         fontSize: theme.fontSize.md,
         color: theme.colors.black,
      },
      arrow: {
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "center",
         width: 36,
         height: 36,
         borderRadius: 100,
         backgroundColor: theme.colors.primary
      },
   });