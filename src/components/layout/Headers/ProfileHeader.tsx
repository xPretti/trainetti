import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import { useTheme } from "../../../hooks/useTheme";
import { StyleSheet } from "react-native";
import { NativeStackHeaderProps, NativeStackNavigationOptions } from "expo-router";
import { Style } from "../../../styles";
import { ChevronLeft, Plus } from "lucide-react-native";
import { useMemo } from 'react';

interface IProfileHeaderProps extends NativeStackHeaderProps {
   createProfile?: () => void;
}

export function ProfileHeader({
   options,
   back,
   navigation,
   createProfile,
}: IProfileHeaderProps) {
   const { theme } = useTheme();

   const styles = useMemo(() => createStyles(theme), [theme]);

   return (
      <View style={styles.container}>
         <View style={styles.backSection}>
            {back && (
               <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.backButton}>
                  <ChevronLeft size={21} color={theme.colors.black} />
               </TouchableOpacity>
            )}

            <Text style={styles.title}>
               {options.title}
            </Text>
         </View>
         <TouchableOpacity onPress={createProfile} style={styles.createProfile}>
            <Plus size={21} color={theme.colors.black} />
         </TouchableOpacity>
      </View>
   );
}

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         backgroundColor: theme.colors.header,
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "space-between",
         paddingHorizontal: theme.padding[4],
         paddingVertical: theme.padding[4],
         gap: 10,
         height: 75,
      },
      title: {
         fontSize: theme.fontSize.lg,
         color: theme.colors.black,
         fontWeight: "bold"
      },

      backSection: {
         flexDirection: "row",
         alignItems: "center",
         gap: 10,
      },

      backButton: {
         backgroundColor: theme.colors.gray[7],
         height: 40,
         width: 40,
         borderRadius: 50,
         justifyContent: "center",
         alignItems: "center",
      },

      createProfile: {
         backgroundColor: theme.colors.gray[7],
         height: 40,
         width: 40,
         borderRadius: 50,
         justifyContent: "center",
         alignItems: "center",
      },
   });