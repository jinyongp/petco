import React, { useRef, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../style/colors";
import navi from "../assets/images/navi.png";
import choco from "../assets/images/choco.png";
import Estimate from "../assets/icons/estimate.svg";
import Stethoscope from "../assets/icons/stethoscope.svg";
import { ScreenLayout, Container, NanumText } from "../components";
import { terminateTokenAsync } from "../apollo";

const userPets = [
  {
    name: "초코",
    profile: choco,
  },
];
export default function MyPage() {
  const navigation = useNavigation();
  const scrollViewRef = useRef();
  const [option, setOption] = useState(true);
  return (
    <ScreenLayout>
      <NanumText type="header" margin={{ top: 30, bottom: 30 }}>
        {`서강준님${"\n"}안녕하세요!`}
      </NanumText>

      <Container>
        <TouchableOpacity style={styles.button}>
          <View style={styles.imageWrapper}></View>
          <NanumText position="center" size={18}>
            내 정보
          </NanumText>
          <TouchableOpacity
            onPress={async () => {
              await terminateTokenAsync();
            }}
          >
            <NanumText
              position="center"
              size={10}
              color={colors.red}
              margin={{ left: 10 }}
            >
              로그아웃
            </NanumText>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.imageWrapper}>
            <Estimate width={33} height={45} />
          </View>
          <NanumText position="center" size={18}>
            내 견적
          </NanumText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.imageWrapper}>
            <Stethoscope width={33} height={40} />
          </View>
          <Text style={styles.buttonText}>내 예약</Text>
        </TouchableOpacity>
      </Container>
      <Container
        row
        style={{ alignItems: "center", justifyContent: "space-between" }}
        margin={{ bottom: 20 }}
      >
        <NanumText type="header">{`서강준님의${"\n"}반려동물`}</NanumText>
        {option ? (
          <TouchableOpacity onPress={() => setOption(false)}>
            <Ionicons name="settings-outline" size={25} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.completeButton}
            onPress={() => setOption(true)}
          >
            <NanumText type="button">완료</NanumText>
          </TouchableOpacity>
        )}
      </Container>
      <Container row>
        <ScrollView
          horizontal
          ref={scrollViewRef}
          onContentSizeChange={(x) =>
            scrollViewRef?.current?.scrollTo({ x, animated: false })
          }
        >
          {userPets?.map(({ name, profile }, index) => (
            <TouchableOpacity
              style={styles.petSelectButton}
              disabled
              key={index}
            >
              {option || (
                <TouchableOpacity
                  style={styles.petDeleteButton}
                  onPress={() => {
                    // TODO Delete selected pet
                  }}
                >
                  <Ionicons name="close" size={25} />
                </TouchableOpacity>
              )}
              <Image
                style={styles.petImage}
                source={profile}
                width={80}
                height={80}
              />
              <NanumText position="center">{name}</NanumText>
            </TouchableOpacity>
          ))}
          {option || (
            <TouchableOpacity
              style={styles.petRegisterButton}
              onPress={() => navigation.navigate("RegisterPets")}
            >
              <Ionicons name="add-outline" size={50} color="#555" />
            </TouchableOpacity>
          )}
        </ScrollView>
      </Container>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  imageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 20,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "nanum-regular",
  },
  petImage: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  petSelectButton: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    marginVertical: 10,
  },
  petDeleteButton: {
    zIndex: 999,
    position: "absolute",
    right: -5,
    top: -5,
    backgroundColor: "white",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.yellow,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  petRegisterButton: {
    elevation: 3,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 1,
    alignSelf: "center",
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 38,
    marginRight: 10,
  },
  completeButton: {
    marginRight: 10,
    backgroundColor: colors.yellow,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
