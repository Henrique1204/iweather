import { Text, View } from "react-native";
import { SvgProps } from "react-native-svg";

import { styles } from "./styles";

type Props = {
  icon: React.FC<SvgProps>;
  title: string;
  value: string;
  isLast?: boolean;
};

const WeatherItem: React.FC<Props> = ({
  icon: Icon,
  title,
  value,
  isLast = false,
}) => {
  return (
    <View style={[styles.container, !isLast && styles.borderBottom]}>
      <Icon width={24} height={24} />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default WeatherItem;
