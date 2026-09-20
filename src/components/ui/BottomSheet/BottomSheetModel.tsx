import { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@expo/ui/community/bottom-sheet";
import { useTheme } from "../../../hooks/useTheme";
import { Style } from "../../../styles";
import { X } from "lucide-react-native";

interface IBottomSheetModelProps {
   open: boolean;
   close: () => void;
   children: React.ReactNode;
}

export function BottomSheetModel({ open, close, children }: IBottomSheetModelProps) {
   const { theme } = useTheme();
   const styles = createStyles(theme);
   const sheetRef = useRef<BottomSheet>(null);

   useEffect(() => {
      if (open) {
         sheetRef.current?.snapToIndex(0);
      } else {
         sheetRef.current?.snapToIndex(-1);
      }
   }, [open]);

   return (
      <BottomSheet
         ref={sheetRef}
         index={-1}
         snapPoints={["50%", "90%"]}
         enablePanDownToClose
         onClose={close}
         backgroundStyle={{ backgroundColor: theme.colors.header }}
      >
         <BottomSheetView style={styles.header}>
            <Text style={styles.title}>Título</Text>
            <TouchableOpacity onPress={close} style={styles.closeButton}>
               <X size={20} color={theme.colors.black} />
            </TouchableOpacity>
         </BottomSheetView>
         <BottomSheetView style={styles.content}>{children}</BottomSheetView>
      </BottomSheet>
   );
}

const createStyles = (theme: Style) =>
   StyleSheet.create({
      header: {
         width: "100%",
         paddingHorizontal: theme.padding[4],
         flexDirection: "row",
         justifyContent: "space-between",
      },
      title: {
         fontSize: theme.fontSize.lg,
         color: theme.colors.black,
         fontWeight: "bold",
      },
      closeButton: {
         justifyContent: "center",
         alignItems: "center",
         width: 35,
         height: 35,
         backgroundColor: theme.colors.gray[6],
         borderRadius: 100,
      },
      content: {
         padding: theme.padding[4],
      },
   });