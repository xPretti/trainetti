import { StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { CustomBottomSheet } from "../../components/ui/BottomSheet/CustomBottomSheet";
import { useState } from "react";
import { CreateProfileForm } from "../../components/layout/Profiles/CreateProfileForm";
import { Style } from "../../styles";
import { Button } from "../../components/ui/Button";
import { useWorkoutStore } from "../../hooks/useWorkoutStore";

interface ICreateProfileBottomSheetProps {
   isPresented: boolean;
   close: () => void;
}

export function CreateProfileBottomSheet({ isPresented, close }: ICreateProfileBottomSheetProps) {
   const { theme } = useTheme();

   const addProfile = useWorkoutStore((state) => state.addProfile);
   const existsProfileByName = useWorkoutStore((state) => state.existsProfileByName);

   const [inputValue, setInputValue] = useState("");

   const styles = createStyles(theme);

   const handleAddProfile = async () => {
      if (!inputValue.trim()) return;
      if (existsProfileByName(inputValue)) return;
      await addProfile(inputValue);
      setInputValue("");
      close();
   };

   const handleCheckProfile = (name: string) => {
      return existsProfileByName(name);
   };

   return (
      <CustomBottomSheet
         title="Criar novo perfil"
         open={isPresented}
         close={close}
         height="60%"
         footer={
            <View style={styles.footer}>
               <Button title="Salvar" variant="primary" onPress={handleAddProfile} />
               <Button title="Cancelar" variant="ghost" onPress={close} />
            </View>
         }
      >
         <CreateProfileForm
            profileNameInput={inputValue}
            setProfileNameInput={setInputValue}
            existProfile={handleCheckProfile}
         />
      </CustomBottomSheet>
   );
}

const createStyles = (theme: Style) =>
   StyleSheet.create({
      footer: {
         gap: 10,
      },
      button: {
         width: "100%",
         height: 40,
         borderRadius: 100,
         backgroundColor: theme.colors.primary,
         justifyContent: "center",
         alignItems: "center",
      },
      buttonText: {
         color: theme.colors.white,
         fontSize: theme.fontSize.sm,
         fontWeight: "bold",
      },
   });