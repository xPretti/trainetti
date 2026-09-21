import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Style } from "../../../styles";
import { TextInput } from "../../ui/TextInput";

interface ICreateProfileFormProps {
   profileNameInput: string;
   setProfileNameInput: (value: string) => void;

   existProfile: (name: string) => boolean;
}

export function CreateProfileForm({ profileNameInput, setProfileNameInput, existProfile }: ICreateProfileFormProps) {
   const { theme } = useTheme();

   const styles = createStyles(theme);

   const handleExistsProfile = (): boolean => {
      return profileNameInput.trim().length > 0 && existProfile(profileNameInput);
   };

   return (
      <View>
         <View style={styles.inputContainer}>
            <Text style={styles.text}>Nome do perfil</Text>
            <TextInput showError={handleExistsProfile()} required maxLength={30} value={profileNameInput} placeholder="Nome do perfil" onChange={setProfileNameInput} errorMessage="Este perfil já existe" />
         </View>
      </View>
   );
};

const createStyles = (theme: Style) =>
   StyleSheet.create({
      inputContainer: {
         width: "100%",
         gap: 10,
      },

      text: {
         fontSize: theme.fontSize.sm,
         color: theme.colors.tertiary,
         fontWeight: "regular",
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
   });