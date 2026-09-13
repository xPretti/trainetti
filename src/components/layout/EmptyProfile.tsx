import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from "../../hooks/useTheme";
import { Style } from "../../styles";

interface IEmptyProfileProps {
   handleClick?: () => void;
}

export function EmptyProfile({ handleClick }: IEmptyProfileProps) {
   const { theme } = useTheme();

   const styles = createStyles(theme);

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
         backgroundColor: theme.colors.background,
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "center",
         padding: 20,
         borderRadius: 15,
         borderWidth: 1,
         borderColor: theme.colors.gray[6],
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