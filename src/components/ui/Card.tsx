import {
   View,
   StyleSheet,
} from 'react-native';

export function Card({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <View style={styles.card}>
         {children}
      </View>
   );
}

const styles = StyleSheet.create({
   card: {
      padding: 16,
      marginBottom: 12,
      borderRadius: 10,
      backgroundColor: '#f5f5f5',
   },
});