import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const SearchLocation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Search Location</Text>
      <Button
        title="현재 위치 설정하기"
        onPress={() => {
          navigation.navigate("SelectLocation");
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

export default SearchLocation;
