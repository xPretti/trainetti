import React, { useState } from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";

import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

import { useWorkoutStore } from "../hooks/useWorkoutStore";

export function TestPage() {
   const [profileName, setProfileName] = useState("");

   const [exerciseName, setExerciseName] = useState("");

   const [day, setDay] = useState("Segunda");

   const profiles = useWorkoutStore((state) => state.profiles);

   const exercises = useWorkoutStore((state) => state.exercises);

   const loading = useWorkoutStore((state) => state.loading);

   const addProfile = useWorkoutStore((state) => state.addProfile);

   const addExercise = useWorkoutStore((state) => state.addExercise);

   const removeProfile = useWorkoutStore((state) => state.removeProfile);

   const removeExercise = useWorkoutStore((state) => state.removeExercise);

   const handleAddProfile = async () => {
      if (!profileName.trim()) {
         return;
      }

      await addProfile(profileName.trim());

      setProfileName("");
   };

   const handleAddExercise = async () => {
      if (!exerciseName.trim() || profiles.length === 0) {
         return;
      }

      await addExercise(profiles[0].id, exerciseName.trim(), day);

      setExerciseName("");
   };

   return (
      <ScrollView contentContainerStyle={styles.container}>
         <Text style={styles.title}>Workout App</Text>

         <Text style={styles.subtitle}>
            {loading ? "Carregando..." : "Banco conectado"}
         </Text>

         <Card>
            <Text style={styles.heading}>Criar perfil</Text>

            <Input
               placeholder="Nome do perfil"
               value={profileName}
               onChangeText={setProfileName}
            />

            <Button title="Criar perfil" onPress={handleAddProfile} />
         </Card>

         <Text style={styles.heading}>Perfis</Text>

         {profiles.map((profile) => (
            <Card key={profile.id}>
               <Text style={styles.name}>{profile.name}</Text>

               <Text>ID: {profile.id}</Text>

               <Button title="Remover" onPress={() => removeProfile(profile.id)} />
            </Card>
         ))}

         <Card>
            <Text style={styles.heading}>Criar exercício</Text>

            <Input
               placeholder="Nome do exercício"
               value={exerciseName}
               onChangeText={setExerciseName}
            />

            <Input placeholder="Dia" value={day} onChangeText={setDay} />

            <Button title="Criar exercício" onPress={handleAddExercise} />
         </Card>

         <Text style={styles.heading}>Exercícios</Text>

         {exercises.map((exercise) => (
            <Card key={exercise.id}>
               <Text style={styles.name}>{exercise.name}</Text>

               <Text>Dia: {exercise.day}</Text>

               <Text>Profile: {exercise.profileId}</Text>

               <Button
                  title="Remover"
                  onPress={() => removeExercise(exercise.id)}
               />
            </Card>
         ))}
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      padding: 20,
      paddingTop: 60,
   },

   title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 4,
   },

   subtitle: {
      marginBottom: 24,
      color: "#666",
   },

   heading: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 12,
   },

   name: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
   },
});
