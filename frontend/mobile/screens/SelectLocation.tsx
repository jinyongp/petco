import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const SelectLocation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Select Location</Text>
      <Button
        title="현재 위치로 결정하기"
        onPress={() => {
          // TODO navigation.navigate("");
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

export default SelectLocation;
