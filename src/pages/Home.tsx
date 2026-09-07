import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>Home</Text>

         <Text style={styles.subtitle}>Expo Router funcionando!</Text>

         <Link href="/testpage" style={styles.link}>
            Ir para Settings
         </Link>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
   },

   title: {
      fontSize: 32,
      fontWeight: "bold",
   },

   subtitle: {
      marginTop: 8,
      fontSize: 16,
   },

   link: {
      marginTop: 24,
      fontSize: 18,
      color: "blue",
   },
});
