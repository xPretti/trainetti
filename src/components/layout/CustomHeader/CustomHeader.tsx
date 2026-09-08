import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import { useTheme } from "../../../hooks/useTheme";
import { StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "expo-router";
import { Style } from "../../../styles";
import { ChevronLeft } from "lucide-react-native";

export function CustomHeader({
   options,
   back,
   navigation,
}: NativeStackHeaderProps) {
   const { theme } = useTheme();

   const styles = createStyles(theme);

   return (
      <View style={styles.container}>
         {back && (
            <TouchableOpacity
               onPress={() => navigation.goBack()}
               style={styles.backButton}>
               <ChevronLeft size={24} color={theme.colors.black} />
            </TouchableOpacity>
         )}

         <Text style={styles.title}>
            {options.title}
         </Text>
      </View>
   );
}

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         backgroundColor: theme.colors.header,
         flexDirection: "row",
         alignItems: "center",
         paddingHorizontal: 20,
         paddingVertical: 14,
         gap: 10,
         height: 75,
      },

      backButton: {
         backgroundColor: theme.colors.gray[7],
         height: 40,
         width: 40,
         borderRadius: 50,
         justifyContent: "center",
         alignItems: "center",
      },

      title: {
         fontSize: theme.fontSize.lg,
         color: theme.colors.black,
         fontWeight: "bold"
      },
   });