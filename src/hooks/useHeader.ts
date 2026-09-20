import { NativeStackHeaderProps, useNavigation } from "expo-router";
import { useEffect, ComponentType } from "react";

export function useHeader(
   header?: ((props: NativeStackHeaderProps) => React.ReactNode)
) {
   const navigation = useNavigation();

   useEffect(() => {
      navigation.setOptions({
         header: header
      });
   }, [navigation]);
}