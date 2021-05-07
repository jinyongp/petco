import React, { useEffect, useState } from "react";
import {
  Dimensions,
  LayoutAnimation,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  UIManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  ConfirmModal,
  Container,
  ModalContainer,
  NanumText,
  ScreenLayout,
  TextInputIcon,
  TouchableButton,
} from "../components";
import { colors } from "../style/colors";
import Search from "../assets/icons/search.svg";
import { useNavigation } from "@react-navigation/core";
import EstimateCaution from "./EstimateCaution";
import Dog from "../assets/animals/dog90.svg";

const subjects = [
  {
    id: 1,
    section: "각종 검진검사",
    list: [
      { id: 1, item: "종합 검진" },
      { id: 2, item: "혈액 검사" },
      { id: 3, item: "초음파 검사" },
      { id: 4, item: "엑스레이 검사" },
      { id: 5, item: "알러지 검사" },
      { id: 6, item: "심장사상충 키트 검사" },
      { id: 7, item: "기본 신체 검사" },
      { id: 8, item: "고양이 PCR 검사" },
    ],
  },
  {
    id: 2,
    section: "결석",
    list: [
      { id: 9, item: "방광결석" },
      { id: 10, item: "요도결석" },
    ],
  },
  {
    id: 3,
    section: "고양이 예방접종",
    list: [
      { id: 11, item: "1차" },
      { id: 12, item: "2차" },
      { id: 13, item: "3차" },
      { id: 14, item: "심장사상충 예방약" },
      { id: 15, item: "항체가검사" },
      { id: 16, item: "추가 접종" },
      { id: 17, item: "관경병 접종" },
    ],
  },
  {
    id: 4,
    section: "다리",
    list: [
      { id: 18, item: "다리 검진" },
      { id: 19, item: "슬개골 탈구" },
      { id: 20, item: "대퇴골두" },
      { id: 21, item: "접십자인대" },
    ],
  },
  {
    id: 5,
    section: "단순증상",
    list: [
      { id: 22, item: "구토" },
      { id: 23, item: "설사" },
      { id: 24, item: "혈변/혈뇨" },
      { id: 25, item: "기본 진료" },
    ],
  },
  {
    id: 6,
    section: "안과",
    list: [
      { id: 26, item: "안과진료" },
      { id: 27, item: "체리아이" },
    ],
  },
  {
    id: 7,
    section: "중성화 수술",
    list: [
      { id: 28, item: "중성화 수술(남아)" },
      { id: 29, item: "중성화 수술(여아)" },
    ],
  },
  {
    id: 8,
    section: "치과",
    list: [
      { id: 30, item: "스케일링" },
      { id: 31, item: "전발치 수술" },
      { id: 32, item: "유치 발치" },
      { id: 33, item: "치과진료" },
      { id: 34, item: "영구치발치" },
    ],
  },
  { id: 9, section: "탈장", list: [{ id: 35, item: "탈장" }] },
  { id: 10, section: "피부과 진료", list: [{ id: 36, item: "피부 진료" }] },
  {
    id: 11,
    section: "기타",
    list: [
      { id: 37, item: "유선 종양" },
      { id: 38, item: "자궁축농증" },
      { id: 39, item: "기타 종양" },
    ],
  },
];

export default function MedicalSearch(): JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    UIManager?.setLayoutAnimationEnabledExperimental?.(true);
    return () => UIManager?.setLayoutAnimationEnabledExperimental?.(false);
  }, []);

  const [selected, setSelected] = useState(0);
  const selectedSections = subjects.reduce((prev, { id }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    return {
      ...prev,
      [id]: {
        selectedItems,
        setSelectedItems,
      },
    };
  }, {});

  const toggleSelectedItems = (outer: number, inner: number) => {
    const { selectedItems, setSelectedItems } = selectedSections[outer];
    if (selectedItems.includes(inner)) {
      setSelected(selected - 1);
      setSelectedItems(selectedItems.filter((item: number) => item !== inner));
    } else {
      setSelected(selected + 1);
      setSelectedItems(selectedItems.concat(inner));
    }
  };

  return (
    <ScreenLayout align="flex-start">
      <Container margin={{ bottom: 20 }} row>
        <Container style={{ width: "80%" }}>
          <TextInputIcon Icon={Search} returnKeyType="search" blurOnSubmit />
        </Container>
        <Container style={{ width: "20%" }} margin={{ left: 20 }}>
          <TouchableButton
            title="선택"
            disabled={!selected}
            onPress={() => setIsModalVisible(true)}
          />
        </Container>
      </Container>
      <Container style={styles.sectionList}>
        {subjects?.map(({ id: sid, section, list }) => (
          <ListItem
            sid={sid}
            key={sid}
            section={section}
            list={list}
            selectedItems={selectedSections[sid].selectedItems}
            toggleSelectedItems={toggleSelectedItems}
          />
        ))}
      </Container>
      <ModalContainer
        isVisible={isModalVisible}
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        containerStyle={{ padding: 0 }}
      >
        <EstimateCaution
          onConfirm={() => {
            setIsModalVisible(false);
            setTimeout(setConfirmed, 600, true);
          }}
          onBack={() => setIsModalVisible(false)}
        />
      </ModalContainer>
      <ConfirmModal
        isVisible={confirmed}
        header="견적 신청을 완료했습니다."
        content={`견적 신청 내역을 확인하시고${"\n"}병원 예약을 진행해주세요`}
        onClose={() => {
          setConfirmed(false);
          navigation.navigate("Home");
        }}
        LeftPetSvg={Dog}
        buttonTitle="완료"
      />
    </ScreenLayout>
  );
}

function ListItem({ sid, section, list, selectedItems, toggleSelectedItems }) {
  const [open, setOpen] = useState(false);
  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  return (
    <Container style={styles.sectionContainer}>
      <Container row>
        <Pressable style={[styles.section, openedStyle(open).opened]} onPress={onPress}>
          <NanumText type="button">{section}</NanumText>
          <Container row style={{ width: "auto" }}>
            <NanumText position="center" margin={{ right: 5 }}>
              {selectedItems.length !== 0 && selectedItems.length}
            </NanumText>
            <Ionicons name={open ? "caret-down" : "caret-forward"} size={20} />
          </Container>
        </Pressable>
      </Container>
      {open && (
        <Container margin={{ top: 10 }}>
          {list?.map(({ id, item }, index: number) => (
            <Container
              key={index}
              style={{ alignItems: "flex-start", width: "80%" }}
              padding={{ bottom: 10 }}
            >
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => toggleSelectedItems(sid, id)}
              >
                <NanumText>{item}</NanumText>
                {selectedItems.includes(id) ? (
                  <Ionicons
                    style={styles.icon}
                    name="checkmark-circle"
                    size={20}
                    color={colors.yellow}
                  />
                ) : (
                  <Ionicons
                    style={styles.icon}
                    name="checkmark-circle-outline"
                    size={20}
                    color={colors.placeholder}
                  />
                )}
              </TouchableOpacity>
            </Container>
          ))}
        </Container>
      )}
    </Container>
  );
}

const openedStyle = (open: boolean) =>
  StyleSheet.create({
    opened: {
      backgroundColor: open ? colors.yellow : "white",
      borderBottomWidth: Number(open),
      borderBottomColor: colors.light,
    },
  });

const styles = StyleSheet.create({
  sectionList: {
    width: Dimensions.get("screen").width,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: colors.light,
    borderBottomColor: "white",
    alignItems: "flex-start",
  },
  sectionContainer: {
    width: "100%",
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
  },
  section: {
    width: Dimensions.get("screen").width,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  icon: {
    zIndex: -1,
  },
});
