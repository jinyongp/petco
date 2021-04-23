import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const SelectPet = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Select Pet</Text>
      <Button
        title="진료받을 동물 선택하기"
        onPress={() => {
          navigation.navigate("SearchLocation");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SelectPet;
