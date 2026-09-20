import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { Style } from "../../styles";
import { AddProfileCard } from "../../components/ui/Profiles/Cards/AddProfileCard";
import { ProfilesList } from "./components/ProfilesList";

interface IProfilesProps { }

export function Profiles({ }: IProfilesProps) {
   const { theme } = useTheme();

   const styles = createStyles(theme);

   return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
         <ProfilesList />
         <View style={styles.addProfile}>
            <AddProfileCard />
         </View>
      </ScrollView>
   );
};

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         width: "100%",
         paddingHorizontal: theme.padding[4],
         gap: 10,
      },

      contentContainer: {
         gap: 10,
      },
      addProfile: {
         marginBottom: theme.margin[5],
      },
   });