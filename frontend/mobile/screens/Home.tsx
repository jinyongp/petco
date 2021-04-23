import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <Button
        title="견적 신청하기"
        onPress={() => {
          navigation.navigate("SelectPet");
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

export default Home;
