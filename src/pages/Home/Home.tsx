import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView} from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { Style } from "../../styles";
import { ProfileButtonCard } from "../../components/ui/Profiles/Cards/ProfileButtonCard";
import { Bell, Users } from "lucide-react-native";
import { navigate } from "expo-router/build/global-state/router";
import { HomeProfiles } from "./components/HomeProfiles";
import { useWorkoutStore } from "../../hooks/useWorkoutStore";

interface IHomeProps { }

export function Home({ }: IHomeProps) {
   const { theme } = useTheme();
   const profiles = useWorkoutStore((state) => state.profiles);

   const styles = createStyles(theme);

   const handleSelectProfile = (profile: string): void => {
      console.log(profile);
   };

   return (
      <ScrollView>
         <View style={styles.container}>
            <View style={styles.nav}>
               <ProfileButtonCard
                  title="Perfis"
                  description={`${profiles.length} perfis`}
                  icon={Users}
                  handleSelect={() => navigate("profiles")}></ProfileButtonCard>
               <ProfileButtonCard
                  title="Agendamentos"
                  description="3 pendentes hoje"
                  icon={Bell}
                  handleSelect={() => navigate("schedules")}></ProfileButtonCard>
            </View>
            <HomeProfiles profiles={profiles} />
         </View>
      </ScrollView>
   );
}

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         width: "100%",
         paddingHorizontal: theme.padding[4],
      },

      nav: {
         flexDirection: "row",
         gap: 10,
         width: "100%",
      }
   });
