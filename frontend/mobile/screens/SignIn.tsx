import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Button
        title="로그인 하기"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title="회원가입 하기"
        onPress={() => {
          navigation.navigate("SignUp");
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

export default SignIn;
