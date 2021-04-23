import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <Button
        title="동물 등록하기"
        onPress={() => {
          navigation.navigate("RegisterPets");
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

export default SignUp;
