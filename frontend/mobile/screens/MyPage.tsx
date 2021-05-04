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
import {
  ScreenLayout,
  Container,
  MainTitle,
  PlainText,
  ButtonTitle,
} from "../components";

const userPets = [
  {
    name: "초코",
    profile: choco,
  },
  {
    name: "초코",
    profile: choco,
  },
  {
    name: "나비",
    profile: navi,
  },
  {
    name: "나비",
    profile: navi,
  },
];
export default function MyPage() {
  const navigation = useNavigation();
  const scrollViewRef = useRef();
  const [option, setOption] = useState(true);
  return (
    <ScreenLayout>
      <Container
        style={{ alignItems: "flex-start" }}
        margin={{ top: 30, bottom: 30 }}
      >
        <MainTitle title={`서강준님${"\n"}안녕하세요!`} />
      </Container>
      <Container>
        <TouchableOpacity style={styles.button}>
          <View style={styles.imageWrapper}></View>
          <Text style={styles.buttonText}>내 정보</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.imageWrapper}>
            <Estimate width={33} height={45} />
          </View>
          <Text style={styles.buttonText}>내 견적</Text>
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
        <MainTitle title={`서강준님의${"\n"}반려동물`} />
        {option ? (
          <TouchableOpacity onPress={() => setOption(false)}>
            <Ionicons name="settings-outline" size={25} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.completeButton}
            onPress={() => setOption(true)}
          >
            <ButtonTitle title="완료" />
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
              <PlainText title={name} />
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
    alignSelf: "flex-start",
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
