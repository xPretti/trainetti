import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from "../../../../hooks/useTheme";
import { Style } from "../../../../styles";
import { useMemo } from 'react';

interface IEmptyProfileProps {
   handleClick?: () => void;
}

export function EmptyProfileCard({ handleClick }: IEmptyProfileProps) {
   const { theme } = useTheme();

   const styles = useMemo(() => createStyles(theme), [theme]);

   return (
      <TouchableOpacity style={styles.container} onPress={handleClick}>
         <Text style={styles.text}>Nenhum perfil encontrado</Text>
         <Text style={styles.action}>
            Clique aqui para criar um perfil
         </Text>
      </TouchableOpacity>
   );
};

const createStyles = (theme: Style) =>
   StyleSheet.create({
      container: {
         backgroundColor: theme.colors.gray[7],
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "center",
         padding: theme.padding[4],
         borderRadius: theme.borderRadius[4],
         borderWidth: 1,
         borderColor: theme.colors.gray[4],
         gap: 10,
         borderStyle: "dashed",
      },

      text: {
         fontSize: theme.fontSize.md,
         color: theme.colors.black,
         fontWeight: "regular",
      },

      action: {
         fontSize: theme.fontSize.sm,
         color: theme.colors.primary,
         fontWeight: "bold",
      },
   });