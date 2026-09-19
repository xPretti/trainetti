import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from "../../../hooks/useTheme";
import { Style } from "../../../styles";
import { alpha } from '../../../utils/color';

interface IAddProfileCardProps {
   handleClick?: () => void;
}

export function AddProfileCard({ handleClick }: IAddProfileCardProps) {
   const { theme } = useTheme();

   const styles = createStyles(theme);

   return (
      <TouchableOpacity style={styles.container} onPress={handleClick}>
         <Text style={styles.action}>
            Adicionar um novo perfil
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
         padding: 20,
         borderRadius: 15,
         borderWidth: 1,
         borderColor: theme.colors.gray[4],
         gap: 10,
         borderStyle: "dashed",
         boxShadow: theme.boxShadow[0],
      },

      action: {
         fontSize: theme.fontSize.sm,
         color: theme.colors.tertiary,
         fontWeight: "regular",
      },
   });