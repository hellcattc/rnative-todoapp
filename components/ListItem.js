import { TouchableOpacity, Text } from "react-native";

const ListItem = ({ el, deleteHandler }) => {
  return (
    <TouchableOpacity onPress={() => deleteHandler(el.key)}>
      <Text className="p-4 text-center rounded bg-amber-200 border mt-5 w-auto">
        {el.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ListItem;
