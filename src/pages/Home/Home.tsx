import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView} from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { Style } from "../../styles";
import { CardButton } from "../../components/ui/CardButton/CardButton";
import { Bell, Users } from "lucide-react-native";
import { navigate } from "expo-router/build/global-state/router";
import { HomeProfiles } from "./components/HomeProfiles";

interface IHomeProps { }

export function Home({ }: IHomeProps) {
   const { theme } = useTheme();

   const styles = createStyles(theme);

   const handleSelectProfile = (profile: string): void => {
      console.log(profile);
   };

   return (
      <ScrollView>
         <View style={styles.container}>
            <View style={styles.nav}>
               <CardButton
                  title="Perfis"
                  description="4 perfis"
                  icon={Users}
                  handleSelect={() => navigate("profiles")}></CardButton>
               <CardButton
                  title="Agendamentos"
                  description="3 pendentes hoje"
                  icon={Bell}
                  handleSelect={() => navigate("schedules")}></CardButton>
            </View>
            <HomeProfiles />
         </View>
      </ScrollView>
   );
}

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         width: "100%",
         paddingHorizontal: 20,
      },

      nav: {
         flexDirection: "row",
         gap: 10,
         width: "100%",
      }
   });
