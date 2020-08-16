import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { Navbar } from "./src/NavBar";
import { AddToDo } from "./src/AddToDo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
    };
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <View>
      <Navbar title={"TODO APP!"} />
      <View style={styles.container}>
        <AddToDo onSubmit={addTodo} />
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo onRemove={removeTodo} todo={item} />}
        />
        {/*    <ScrollView>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
