import { StyleSheet, Text } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { Style } from "../../styles";
import { BottomSheet } from "@expo/ui";
import { BottomSheetModal } from "@expo/ui/community/bottom-sheet";
import { BottomSheetModel } from "../../components/ui/BottomSheet/BottomSheetModel";

interface ICreateProfileBottomSheetProps {
   isPresented: boolean;
   close: () => void;
}

export function CreateProfileBottomSheet({ isPresented, close }: ICreateProfileBottomSheetProps) {
   const { theme } = useTheme();

   const styles = createStyles(theme);

   return (
      <BottomSheetModel open={isPresented} close={close}>
         <Text>Teste1</Text>
         <Text>Teste</Text>
         <Text>Teste</Text>
         <Text>Teste</Text>
         <Text>Teste</Text>
         <Text>Teste</Text>
         <Text>Teste</Text>
         <Text>Teste</Text>
         <Text>Teste</Text>
         <Text>Teste</Text>
         <Text>Teste</Text>
         <Text>Teste</Text>
      </BottomSheetModel>
   );
};

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         backgroundColor: theme.colors.header,
      },
   });