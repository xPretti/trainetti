import { StyleSheet, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Style } from "../../../styles";
import { router } from "expo-router/build/global-state/router";
import { ProfileItem } from "./ProfileItem";
import { Profile } from "../../../types/Profile";

interface IProfilesListProps {
   profiles: Profile[];
}

export function ProfilesList({ profiles }: IProfilesListProps) {
   const { theme } = useTheme();

   const styles = createStyles(theme);

   const handleSelectProfile = (profile: string): void => {
      router.push(`/profiles/${profile}`);
   };

   if (profiles.length === 0) {
      return null;
   }

   return (
      <View style={styles.container}>
         {
            profiles.map((profile) => (
               <ProfileItem
                  key={profile.id}
                  title={profile.name}
                  handleClick={() => handleSelectProfile(profile.id)}
               />
            ))
         }
      </View>
   );
}

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         width: "100%",
         flexDirection: "column",
         gap: 10,
      },
   });
