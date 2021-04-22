import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';
import styled from "styled-components";



const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const text = {
    email,
    password,
  }

  //데이터 받아오는 함수식 작성

  return (
    <View>
      <Text>펩코에 로그인하기:)</Text>
      <TextInput placeholder="아이디를 입력해 주세요"></TextInput>
      <TextInput placeholder="비밀번호를 입력해 주세요" secureTextEntry></TextInput>
      <Text onPress={() => Alert.alert('아이디 찾기')}>아이디 찾기</Text>
      <Text onPress={() => Alert.alert('비밀번호 찾기')}>비밀번호 찾기</Text>
      <Button
        title="로그인 하기"
        color="#f194ff"
        onPress={() => Alert.alert('로그인되었습니다')}
      />
      <Text>펩코가 처음이신가요?</Text>
      <Text onPress={() => Alert.alert('회원가입 하기')}>회원가입 하기</Text>
    </View>
  )
  // style 추가
  // Button 로그인 기능
  // 아이디, 비밀번호 찾기 & 회원가입 하기 페이지 링크 연결
}


export default Login;