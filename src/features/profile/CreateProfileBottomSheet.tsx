import { Button, StyleSheet, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { Style } from "../../styles";
import { CustomBottomSheet } from "../../components/ui/BottomSheet/CustomBottomSheet";
import { useState } from "react";
import { CreateProfileForm } from "../../components/layout/Profiles/CreateProfileForm";

interface ICreateProfileBottomSheetProps {
   isPresented: boolean;
   close: () => void;
}

export function CreateProfileBottomSheet({ isPresented, close }: ICreateProfileBottomSheetProps) {
   const { theme } = useTheme();
   const [inputValue, setInputValue] = useState("");
   const styles = createStyles(theme);

   return (
      <CustomBottomSheet title="Criar novo perfil" open={isPresented} close={close}>
         <View style={styles.container}>
            <View style={styles.content}>
               <CreateProfileForm profileNameInput={inputValue} setProfileNameInput={setInputValue} />
            </View>

            <View style={styles.buttonContainer}>
               <Button title="Salvar" onPress={() => console.log("Salvar")} />
               <Button title="Cancelar" color={theme.colors.gray[5]} onPress={close} />
            </View>
         </View>
      </CustomBottomSheet>
   );
};

const createStyles = (theme: Style) =>
  StyleSheet.create({
    container: {
      justifyContent: "space-between",
    },

    content: {
      justifyContent: "space-between",
      minHeight: 180,
    },

    buttonContainer: {
      width: "100%",
      gap: 10,
    },
  });