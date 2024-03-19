import {
  View,
  TextInput,
  TextInputProps,
  ActivityIndicator,
} from "react-native";

import { theme } from "@styles/theme";

import { styles } from "./styles";

type InputProps = TextInputProps & {
  testId?: string;
  isLoading?: boolean;
};

const Input: React.FC<InputProps> = ({
  testId = "input",
  isLoading = false,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        testID={testId}
        style={styles.input}
        placeholderTextColor={theme.colors.gray_400}
        {...props}
      />

      {isLoading && (
        <ActivityIndicator
          testID={`${testId}-activity-indicator`}
          color={theme.colors.blue_light}
        />
      )}
    </View>
  );
};

export default Input;
