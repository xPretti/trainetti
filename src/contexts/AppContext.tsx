import React, { createContext, useContext, useEffect, useMemo } from "react";

import { Application } from "../application/Application";
import { createWorkoutStore } from "../stores/createWorkoutStore";

type AppContextValue = {
    workoutStore: ReturnType<typeof createWorkoutStore>;
};

export const AppContext = createContext<AppContextValue | null>(null);

type AppProviderProps = {
    app: Application;
    children: React.ReactNode;
};

export function AppProvider({ app, children }: AppProviderProps) {
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
