import { StyleSheet, Text, TextInput as RNTextInput, View } from "react-native";

import { Style } from "../../styles";
import { useTheme } from "../../hooks/useTheme";

import { useState } from "react";

interface ITextInputProps {
   id?: string;
   value?: string;
   maxLength?: number;
   placeholder?: string;
   required?: boolean;
   showError?: boolean;
   errorMessage?: string;
   requiredMessage?: string;
   onChange?: (value: string) => void;
}

export function TextInput({
   id = "",
   value = "",
   placeholder = "",
   required = false,
   showError = false,
   errorMessage = "Digite um valor válido.",
   requiredMessage = "Este campo é obrigatório.",
   maxLength,
   onChange = () => { },
}: ITextInputProps) {
   const { theme } = useTheme();

   const [isFocused, setIsFocused] = useState(false);

   const styles = createStyles(theme);

   const isEmpty = !value.trim();

   const hasError = showError || (showError && required && isEmpty);

   const message =
      required && isEmpty
         ? requiredMessage
         : errorMessage;

   function handleChange(text: string) {
      const formattedValue = text.trimStart();

      onChange(formattedValue);
   }

   return (
      <View style={styles.container}>
         <RNTextInput
            nativeID={id}
            value={value}
            placeholder={placeholder}
            onChangeText={handleChange}
            style={[
               styles.input,
               isFocused && styles.inputFocused,
               hasError && styles.inputError,
            ]}
            placeholderTextColor={theme.colors.gray[4]}
            cursorColor={theme.colors.primary}
            selectionColor={theme.colors.primary}
            maxLength={maxLength}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
         />

         {hasError && (
            <Text style={styles.error}>
               {message}
            </Text>
         )}
      </View>
   );
}

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         width: "100%",
      },

      input: {
         backgroundColor: theme.colors.gray[7],
         color: theme.colors.black,
         borderWidth: 1,
         borderColor: theme.colors.gray[4],
         borderRadius: theme.borderRadius[4],
         paddingHorizontal: theme.padding[3],
         paddingVertical: theme.padding[2],
      },

      inputFocused: {
         borderColor: theme.colors.primary,
      },

      inputError: {
         borderColor: theme.colors.danger,
      },

      error: {
         marginTop: 4,
         color: theme.colors.danger,
         fontSize: theme.fontSize.xs,
      },
   });
