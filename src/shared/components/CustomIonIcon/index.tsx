import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  size: number;
  color: string;
}

const CustomIonIcon = ({name, size, color}: Props) => {
  return <Icon name={name} size={size} color={color} />;
};

export default CustomIonIcon;
