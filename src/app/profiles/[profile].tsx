import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ProfileRoute() {
   const { profile } = useLocalSearchParams<{ profile: string; }>();

   console.log(profile);

   return (
      <>
         <Stack.Screen
            options={{
               title: `Perfil ${profile}`,
            }}
         />
         <View>
            <Text>Perfil: {profile}</Text>
         </View>
      </>
   );
}