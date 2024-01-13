import { View, Text } from "react-native";

const Header = () => {
  return (
    <View className="flex items-center justify-self-start bg-orange-600">
      <View className="bg-white pt-6 w-full"></View>
      <View className="py-2">
        <Text className="m-auto text-2xl text-white">Тудушка</Text>
      </View>
    </View>
  );
};

export default Header;
