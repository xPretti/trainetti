import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Style } from "../../../styles";
import { ChevronRight } from "lucide-react-native";
import { ProfileItem } from "./ProfileItem";

interface IHomeProfilesProps { }

export function HomeProfiles({ }: IHomeProfilesProps) {
   const { theme } = useTheme();

   const styles = createStyles(theme);

   const handleSelectProfile = (profile: string): void => {
      console.log(profile);
   };

   return (
      <View style={styles.profileContainer}>
         <View style={styles.profileHeader}>
            <Text style={styles.profileTitle}>Todos os perfis</Text>
            <TouchableOpacity>
               <View style={styles.profileViewMore}>
                  <Text style={styles.profileViewMoreText}>Ver mais</Text>
                  <ChevronRight size={16} color={theme.colors.primary} />
               </View>
            </TouchableOpacity>
         </View>
         <View style={styles.profileList}>
            <ProfileItem title="Perfil 1" handleClick={() => handleSelectProfile("1")} />
            <ProfileItem title="Perfil 2" handleClick={() => handleSelectProfile("2")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
            <ProfileItem title="Perfil 3" handleClick={() => handleSelectProfile("3")} />
         </View>
      </View>
   );
};

const createStyles = (theme: Style) =>
   StyleSheet.create({
      profileContainer: {
         marginTop: 20,
         width: "100%"
      },

      profileHeader: {
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

      profileViewMore: {
         flexDirection: "row",
         alignItems: "center",
         gap: 5,
      },

      profileViewMoreText: {
         color: theme.colors.primary,
         fontSize: theme.fontSize.sm,
      },

      profileList: {
         width: "100%",
         flexDirection: "column",
         gap: 10,
         marginTop: 10,
      },
   });