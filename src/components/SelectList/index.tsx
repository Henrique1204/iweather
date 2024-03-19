import { Text, TouchableOpacity, View } from "react-native";

import { CityProps } from "@services/getCityByNameService";

import Input from "@components/Input";

import { styles } from "./styles";

type SelectListProps = {
  data: CityProps[];

  onChange: (value: string) => void;
  onPress: (value: CityProps) => void;

  testId?: string;
  isLoading?: boolean;
  placeholder?: string;
  value?: string;
};

const SelectList: React.FC<SelectListProps> = ({
  testId = "select-list",
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Input
        testId={testId}
        placeholder={props.placeholder}
        onChangeText={props.onChange}
        isLoading={props.isLoading}
        value={props.value}
      />

      <View style={styles.options}>
        {props.data.map((item) => (
          <TouchableOpacity
            testID={`${testId}-item-${item.name}`}
            key={item.latitude}
            activeOpacity={0.7}
            onPress={() => props.onPress(item)}
          >
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SelectList;
