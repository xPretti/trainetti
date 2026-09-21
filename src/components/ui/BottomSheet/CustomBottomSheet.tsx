import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Keyboard, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {
   BottomSheetModal,
   BottomSheetScrollView,
   BottomSheetBackdrop,
   BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { useTheme } from "../../../hooks/useTheme";
import { Style } from "../../../styles";
import { X } from "lucide-react-native";

interface IBottomSheetModelProps {
   open: boolean;
   title?: string;
   close: () => void;
   children: React.ReactNode;
   footer?: React.ReactNode;
   height?: string;
}

export function CustomBottomSheet({
   title,
   open,
   close,
   children,
   footer,
   height = "90%",
}: IBottomSheetModelProps) {
   const { theme } = useTheme();
   const styles = useMemo(() => createStyles(theme), [theme]);
   const bottomSheetModalRef = useRef<BottomSheetModal>(null);

   const snapPoints = useMemo(() => [height], []);

   const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

   useEffect(() => {
      const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
         setIsKeyboardVisible(true);
      });
      const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
         setIsKeyboardVisible(false);
      });

      return () => {
         showSubscription.remove();
         hideSubscription.remove();
      };
   }, []);

   useEffect(() => {
      if (open) {
         bottomSheetModalRef.current?.present();
      } else {
         bottomSheetModalRef.current?.dismiss();
      }
   }, [open]);

   const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
         <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            opacity={0.4}
         />
      ),
      []
   );

   return (
      <BottomSheetModal
         ref={bottomSheetModalRef}
         index={0}
         snapPoints={snapPoints}
         enableDynamicSizing={false}
         onDismiss={close}
         backdropComponent={renderBackdrop}
         keyboardBehavior="fillParent"
         keyboardBlurBehavior="restore"
         android_keyboardInputMode="adjustResize"
         backgroundStyle={styles.background}
         handleIndicatorStyle={styles.handleIndicator}
      >
         <View style={styles.container}>

            {title && (
               <View style={styles.header}>
                  <Text style={styles.title} numberOfLines={1}>{title}</Text>
                  <TouchableOpacity onPress={close} style={styles.closeButton} activeOpacity={0.7}>
                     <X size={20} color={theme.colors.black} />
                  </TouchableOpacity>
               </View>
            )}

            <BottomSheetScrollView
               contentContainerStyle={styles.scrollContent}
               showsVerticalScrollIndicator={false}
            >
               {children}
            </BottomSheetScrollView>

            {footer && !isKeyboardVisible && (
               <View style={styles.footerContainer}>
                  {footer}
               </View>
            )}

         </View>
      </BottomSheetModal>
   );
}

const createStyles = (theme: Style) =>
   StyleSheet.create({
      background: {
         backgroundColor: theme.colors.background,
         borderWidth: 1,
         borderColor: theme.colors.gray[4],
         borderTopLeftRadius: 24,
         borderTopRightRadius: 24,
      },
      handleIndicator: {
         backgroundColor: theme.colors.gray[4],
         width: 40,
      },
      container: {
         flex: 1,
         flexDirection: "column",
      },
      header: {
         width: "100%",
         paddingHorizontal: theme.padding[4],
         paddingVertical: theme.padding[2],
         flexDirection: "row",
         justifyContent: "space-between",
         alignItems: "center",
         borderBottomWidth: 1,
         borderBottomColor: theme.colors.gray[6],
      },
      title: {
         fontSize: theme.fontSize.lg,
         color: theme.colors.black,
         fontWeight: "bold",
         flex: 1,
         marginRight: 8,
      },
      closeButton: {
         justifyContent: "center",
         alignItems: "center",
         width: 35,
         height: 35,
         backgroundColor: theme.colors.gray[6],
         borderRadius: 100,
      },
      scrollContent: {
         padding: theme.padding[4],
         paddingBottom: theme.padding[8],
      },
      footerContainer: {
         width: "100%",
         padding: theme.padding[4],
         backgroundColor: theme.colors.background,
         borderTopWidth: 1,
         borderTopColor: theme.colors.gray[6],
      },
   });