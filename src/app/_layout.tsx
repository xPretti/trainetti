import { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { Application } from "../application/Application";
import { AppProvider } from "../contexts/AppContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import { StackNavigation } from "../navigations/StackNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function RootLayout() {
   const [app] = useState(() => new Application());
   const [ready, setReady] = useState(false);
   const [error, setError] = useState<unknown>(null);

   useEffect(() => {
      async function start() {
         try {
            await app.start();
            setReady(true);
         } catch (error) {
            setError(error);
            console.error(error);
         }
      }

      start();

      return () => {
         app.stop();
      };
   }, [app]);

   if (error) {
      return (
         <View>
            <Text>Erro ao iniciar aplicação.</Text>
         </View>
      );
   }

   if (!ready) {
      return (
         <View>
            <Text>Inicializando...</Text>
         </View>
      );
   }

   return (
      <ThemeProvider>
         <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
               <AppProvider app={app}>
                  <StackNavigation />
               </AppProvider>
            </BottomSheetModalProvider >
         </GestureHandlerRootView>
      </ThemeProvider>
   );
}