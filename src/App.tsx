import { useEffect, useState } from "react";

import { View, Text } from "react-native";

import { Application } from "./application/Application";
import { AppProvider } from "./contexts/AppProvider";

import { TestPage } from "./pages/TestPage";

export default function App() {
   const [app] = useState(() => new Application());

   const [ready, setReady] = useState(false);

   const [error, setError] = useState<unknown>(null);

   useEffect(() => {
      let mounted = true;

      async function start() {
         try {
            await app.start();

            if (mounted) {
               setReady(true);
            }
         } catch (error) {
            if (mounted) {
               setError(error);
            }
         }
      }

      start();

      return () => {
         mounted = false;

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
      <AppProvider app={app}>
         <TestPage />
      </AppProvider>
   );
}
