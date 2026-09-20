import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Style } from "../../../../styles";
import { useTheme } from "../../../../hooks/useTheme";
import { alpha } from "../../../../utils/color";
import { LucideIcon } from "lucide-react-native";

interface ICardButtonProps {
   title: string;
   description: string;
   handleSelect: () => void;
   icon?: LucideIcon;
}

export function ProfileButtonCard({
   title,
   description,
   handleSelect,
   icon: Icon,
}: ICardButtonProps) {
   const { theme } = useTheme();

   const styles = createStyles(theme);

   return (
      <View style={styles.container}>
         <TouchableOpacity onPress={handleSelect}>
            <View style={styles.content}>
               {Icon && (
                  <View style={styles.icon}>
                     <Icon size={20} color={theme.colors.lime[5]} />
                  </View>
               )}
               <View>
                  <Text style={styles.title}>{title}</Text>
                  <Text style={styles.description}>{description}</Text>
               </View>
            </View>
         </TouchableOpacity>
      </View>
   );
}

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         flex: 1,
      },
      content: {
         backgroundColor: theme.colors.gray[7],
         borderWidth: 1,
         borderColor: theme.colors.gray[6],
         flexDirection: "column",
         alignItems: "flex-start",
         paddingHorizontal: theme.padding[4],
         paddingVertical: theme.padding[4],
         gap: 10,
         borderRadius: theme.borderRadius[4],
      },
      icon: {
         backgroundColor: alpha(theme.colors.lime[7], 0.2),
         height: 38,
         width: 38,
         borderRadius: theme.borderRadius[3],
         justifyContent: "center",
         alignItems: "center",
         padding: 10,
      },

      title: {
         fontSize: theme.fontSize.md,
         color: theme.colors.secondary,
         fontWeight: "bold",
      },

      description: {
         fontSize: theme.fontSize.sm,
         color: theme.colors.tertiary,
      },
   });
