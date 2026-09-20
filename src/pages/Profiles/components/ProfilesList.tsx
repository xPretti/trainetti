import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Style } from "../../../styles";
import { ChevronRight } from "lucide-react-native";
import { useWorkoutStore } from "../../../hooks/useWorkoutStore";
import { EmptyProfileCard } from "../../../components/ui/Profiles/Cards/EmptyProfileCard";
import { navigate, router } from "expo-router/build/global-state/router";
import { ProfileItem } from "./ProfileItem";

interface IProfilesListProps { }

export function ProfilesList({ }: IProfilesListProps) {
   const { theme } = useTheme();
   const profiles = useWorkoutStore((state) => state.profiles);

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
