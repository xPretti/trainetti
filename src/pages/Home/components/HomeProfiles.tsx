import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Style } from "../../../styles";
import { ChevronRight } from "lucide-react-native";
import { ProfileItem } from "./ProfileItem";
import { useWorkoutStore } from "../../../hooks/useWorkoutStore";
import { EmptyProfile } from "../../../components/layout/EmptyProfile";
import { navigate, router } from "expo-router/build/global-state/router";

interface IHomeProfilesProps { }

export function HomeProfiles({ }: IHomeProfilesProps) {
   const { theme } = useTheme();
   const profiles = useWorkoutStore((state) => state.profiles);

   const styles = createStyles(theme);

   const handleSelectProfile = (profile: string): void => {
      router.push(`/profiles/${profile}`);
   };

   const handleCreateNewProfile = () => { };

   const handleViewAllProfiles = () => {
      navigate("profiles");
   };

   const someProfiles = profiles.slice(0, 6);

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.profileTitle}>Todos os perfis</Text>
            <TouchableOpacity onPress={handleViewAllProfiles}>
               <View style={styles.profileViewAllProfiles}>
                  <Text style={styles.profileViewAllProfilesText}>Ver mais</Text>
                  <ChevronRight size={16} color={theme.colors.primary} />
               </View>
            </TouchableOpacity>
         </View>
         <View style={styles.profileList}>
            {someProfiles.length > 0 ? (
               someProfiles.map((profile) => (
                  <ProfileItem
                     key={profile.id}
                     title={profile.name}
                     handleClick={() => handleSelectProfile(profile.id)}
                  />
               ))
            ) : (
               <EmptyProfile handleClick={handleCreateNewProfile} />
            )}
         </View>
      </View>
   );
}

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         marginTop: 20,
         width: "100%",
      },

      header: {
         flexDirection: "row",
         justifyContent: "space-between",
         alignItems: "center",
         gap: 10,
         width: "100%",
      },

      profileTitle: {
         fontSize: theme.fontSize.md,
         color: theme.colors.black,
         fontWeight: "bold",
      },

      profileViewAllProfiles: {
         flexDirection: "row",
         alignItems: "center",
         gap: 5,
      },

      profileViewAllProfilesText: {
         color: theme.colors.primary,
         fontSize: theme.fontSize.sm,
         fontWeight: "bold",
      },

      profileList: {
         width: "100%",
         flexDirection: "column",
         gap: 10,
         marginTop: 10,
      },
   });
