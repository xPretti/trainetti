import React, { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Style } from "../../styles";
import { useTheme } from "../../hooks/useTheme";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface IButtonProps extends TouchableOpacityProps {
   title: string;
   variant?: ButtonVariant;
}

export function Button({
   title,
   variant = "primary",
   style,
   ...rest
}: IButtonProps) {
   const { theme } = useTheme();
   const styles = useMemo(() => createStyles(theme), [theme]);

   const getVariantStyle = () => {
      switch (variant) {
         case "secondary":
            return styles.secondaryContainer;
         case "outline":
            return styles.outlineContainer;
         case "ghost":
            return styles.ghostContainer;
         case "primary":
         default:
            return styles.primaryContainer;
      }
   };

   const getVariantTextStyle = () => {
      switch (variant) {
         case "outline":
            return styles.outlineText;
         case "ghost":
            return styles.ghostText;
         case "secondary":
            return styles.secondaryText;
         case "primary":
         default:
            return styles.primaryText;
      }
   };

   return (
      <TouchableOpacity
         style={[styles.baseContainer, getVariantStyle(), style]}
         activeOpacity={0.8}
         {...rest}
      >
         <Text style={[styles.baseText, getVariantTextStyle()]}>
            {title}
         </Text>
      </TouchableOpacity>
   );
}

const createStyles = (theme: Style) =>
   StyleSheet.create({
      baseContainer: {
         height: 45,
         borderRadius: theme.borderRadius[5],
         justifyContent: "center",
         alignItems: "center",
         paddingHorizontal: theme.padding[4],
         flexDirection: "row",
      },
      baseText: {
         fontSize: theme.fontSize.sm,
         fontWeight: "bold",
      },

      // Tema Primary (Usa a cor primary do objeto)
      primaryContainer: {
         backgroundColor: theme.colors.primary,
      },
      primaryText: {
         color: theme.colors.absolute.black,
      },

      // Tema Secondary
      secondaryContainer: {
         backgroundColor: theme.colors.gray[5],
      },
      secondaryText: {
         color: theme.colors.tertiary,
      },

      // Tema Outline
      outlineContainer: {
         backgroundColor: "transparent",
         borderWidth: 1.5,
         borderColor: theme.colors.primary,
      },
      outlineText: {
         color: theme.colors.primary,
      },

      // Tema Ghost
      ghostContainer: {
         backgroundColor: "transparent",
      },
      ghostText: {
         color: theme.colors.secondary,
      },
   });