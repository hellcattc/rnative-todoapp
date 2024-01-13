import { useCallback, useRef } from "react";
import { Button, TextInput, View } from "react-native";

const Form = ({ handlePress }) => {
  const taskInput = useRef(null);
  const handleInput = useCallback(
    (text) => {
      taskInput.current = text;
    },
    [taskInput]
  );

  return (
    <View className="pt-10 w-full">
      <TextInput
        onChangeText={handleInput}
        placeholder="Текст задачи..."
        className="border rounded-sm border-black px-3 py-2 mb-4"
      ></TextInput>
      <Button
        title="Добавить задачу"
        onPress={() => handlePress(taskInput.current)}
        color="#8c4a0b"
      ></Button>
    </View>
  );
};

export default Form;
