import { Text, View } from "react-native";

import { SvgProps } from "react-native-svg";

import { styles } from "./styles";

export type DayProps = {
  icon: React.FC<SvgProps>;
  day: string;
  weather: string;
  max: string;
  min: string;
};

type Props = {
  testId?: string;
  data: DayProps;
};

const Day: React.FC<Props> = ({ data, testId = "day" }) => {
  const { icon: Icon } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.day} testID={testId}>
        {data.day}
      </Text>

      <Icon testID={`${testId}-icon`} width={56} height={56} />

      <Text testID={`${testId}-max`} style={styles.max}>
        {data.max}
      </Text>

      <Text testID={`${testId}-min`} style={styles.min}>
        {data.min}
      </Text>
    </View>
  );
};

export default Day;
