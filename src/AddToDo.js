import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddToDo = (props) => {
  const [value, setValue] = useState("");
  const pressHandler = () => {
    if (value.trim()) {
      props.onSubmit(value);
      setValue(" ");
    } else {
      Alert.alert("Название дела не может быть пустым");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(text) => setValue(text)}
        style={styles.input}
        value={value}
        placeholder="Введите название"
   
      />
      <Button onPress={pressHandler} title="Добавить" />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    padding: 10,
    width: "70%",
    borderBottomColor: "#3949ab",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
});
