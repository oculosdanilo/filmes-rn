import React from "react";
import { TextInput, View } from "react-native";
import styles from "./style";

export default function Search() {
  return (
    <View style={styles.containerSearch}>
      <TextInput
        placeholder="Digite o filme desejado"
        style={[styles.inputSearch, {outlineColor: "transparent"}]}
      ></TextInput>
    </View>
  );
}
