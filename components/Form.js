import { useCallback, useRef } from "react";
import { Button, TextInput, View } from "react-native";

const Form = ({ handlePress }) => {
  const inputRef = useRef(null);

  return (
    <View className="pt-10 w-full">
      <TextInput
        ref={inputRef}
        onChangeText={(text) => (inputRef.current.value = text)}
        placeholder="Текст задачи..."
        className="border rounded-sm border-black px-3 py-2 mb-4"
      ></TextInput>
      <Button
        title="Добавить задачу"
        onPress={() => {
          inputRef.current.clear();
          handlePress(inputRef.current.value);
        }}
        color="#8c4a0b"
      ></Button>
    </View>
  );
};

export default Form;
