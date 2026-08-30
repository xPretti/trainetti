import {
   TextInput,
   TextInputProps,
   StyleSheet,
} from 'react-native';

export function Input(
   props: TextInputProps
) {
   return (
      <TextInput
         {...props}
         style={styles.input}
      />
   );
}

const styles = StyleSheet.create({
   input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 12,
      marginBottom: 12,
   },
});