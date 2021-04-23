import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const RegisterPets = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Register Pets</Text>
      <Button
        title="가입 완료"
        onPress={() => {
          navigation.navigate("Home");
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

export default RegisterPets;
