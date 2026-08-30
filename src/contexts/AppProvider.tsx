import React, { createContext, useContext, useEffect, useMemo } from "react";

import { Application } from "../application/Application";
import { createWorkoutStore } from "../stores/createWorkoutStore";

type AppContextValue = {
   workoutStore: ReturnType<typeof createWorkoutStore>;
};

const AppContext = createContext<AppContextValue | null>(null);

type Props = {
   app: Application;
   children: React.ReactNode;
};

export function AppProvider({ app, children }: Props) {
   const workoutStore = useMemo(
      () => createWorkoutStore(app.profiles, app.exercises),
      [app],
   );

   useEffect(() => {
      workoutStore.getState().hydrate();
   }, [workoutStore]);

   const value = useMemo(
      () => ({
         workoutStore,
      }),
      [workoutStore],
   );

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
   const context = useContext(AppContext);

   if (!context) {
      throw new Error("useAppContext must be used inside AppProvider");
   }

   return context;
}
