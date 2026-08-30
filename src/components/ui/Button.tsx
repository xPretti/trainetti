import {
   Button as RNButton,
} from 'react-native';

type Props = {
   title: string;
   onPress: () => void;
};

export function Button({
   title,
   onPress,
}: Props) {
   return (
      <RNButton
         title={title}
         onPress={onPress}
      />
   );
}