import { useEffect, useState } from "react";

import { View, Text } from "react-native";

import { Application } from "./application/Application";
import { AppProvider } from "./contexts/AppContext";

import { TestPage } from "./pages/TestPage";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
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
      <AppProvider app={app}>
         <ThemeProvider>
            <TestPage />
         </ThemeProvider>
      </AppProvider>
   );
}
