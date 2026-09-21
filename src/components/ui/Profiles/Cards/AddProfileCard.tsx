import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from "../../../../hooks/useTheme";
import { Style } from "../../../../styles";
import { alpha } from '../../../../utils/color';
import { Plus } from 'lucide-react-native';
import { useMemo } from 'react';

interface IAddProfileCardProps {
   handleClick?: () => void;
}

export function AddProfileCard({ handleClick }: IAddProfileCardProps) {
   const { theme } = useTheme();

   const styles = useMemo(() => createStyles(theme), [theme]);

   return (
      <TouchableOpacity style={styles.container} onPress={handleClick}>
         <View style={styles.icon}>
            <Plus size={24} color={theme.colors.lime[5]} />
         </View>
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
         padding: theme.padding[4],
         borderRadius: theme.borderRadius[4],
         borderWidth: 1,
         borderColor: theme.colors.gray[4],
         gap: 10,
         borderStyle: "dashed",
      },

      icon: {
         backgroundColor: alpha(theme.colors.lime[7], 0.2),
         height: 38,
         width: 38,
         borderRadius: 50,
         justifyContent: "center",
         alignItems: "center",
         padding: 10,
      },

      action: {
         fontSize: theme.fontSize.sm,
         color: theme.colors.secondary,
         fontWeight: "regular",
      },
   });