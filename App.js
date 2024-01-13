import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Button,
  BackHandler,
  FlatList,
  ScrollView,
} from "react-native";
import { useState, useCallback, useEffect } from "react";
import Header from "./components/Header.js";
import ListItem from "./components/ListItem.js";
import Form from "./components/Form.js";
import { LogBox } from "react-native";

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const [listOfTasks, setListOfTasks] = useState([
    {
      text: "Сходить в магазин",
      key: 1,
    },
    {
      text: "Выбросить мусор",
      key: 2,
    },
    {
      text: "Убраться в комнате",
      key: 3,
    },
  ]);

  const handlePress = useCallback(
    (text) => {
      setListOfTasks((prev) => [
        ...prev,
        { text: text, key: Math.random().toString(36).substring(7) },
      ]);
    },
    [setListOfTasks]
  );

  const handleDeletion = useCallback((key) => {
    setListOfTasks((prev) => prev.filter((item) => item.key !== key));
  });

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView className="px-4 overflow-scroll flex-1 w-full">
        <Form handlePress={handlePress} />
        <FlatList
          className="py-6"
          data={listOfTasks}
          renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={handleDeletion}></ListItem>
          )}
        />
      </ScrollView>
    </View>
  );
}
