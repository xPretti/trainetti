import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { Style } from "../../styles";
import { AddProfileCard } from "../../components/ui/Profiles/Cards/AddProfileCard";
import { ProfilesList } from "./components/ProfilesList";
import { useWorkoutStore } from "../../hooks/useWorkoutStore";
import { NativeStackHeaderProps, useNavigation } from "expo-router";
import { JSX, useEffect } from "react";
import { CustomHeader } from "../../components/layout/CustomHeader/CustomHeader";
import { useHeader } from "../../hooks/useHeader";
import { ProfileHeader } from "../../components/layout/CustomHeader/ProfileHeader";

interface IProfilesProps { }

export function Profiles({ }: IProfilesProps) {
   const { theme } = useTheme();
   useHeader((props) => <ProfileHeader {...props} createProfile={handleCreateNewProfile}/>);

   const profiles = useWorkoutStore((state) => state.profiles);

   const styles = createStyles(theme);

   const handleCreateNewProfile = () => {
      console.log("create new profile");
   };

   return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
         <Text style={styles.title}>Todos os perfis</Text>
         <ProfilesList profiles={profiles} />
         <View style={styles.addProfile}>
            <AddProfileCard handleClick={handleCreateNewProfile} />
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

      title: {
         fontSize: theme.fontSize.md,
         color: theme.colors.black,
         fontWeight: "bold",
      },
   });