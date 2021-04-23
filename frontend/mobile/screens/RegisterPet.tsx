import React from "react";
import { View, Text, TextInput } from "react-native";

export default function RegisterPet() {
  return (
    <View>
      <Text>이전</Text>
      <Text>반려동물 이름</Text>
      <TextInput placeholder="이름" />
    </View>
  );
}
