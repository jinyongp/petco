import { getCurrentPositionAsync } from "expo-location";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { Container, NanumText, ScreenContainer } from "../components";
import { usePlaceSearchAsync } from "../hooks";
import { DataType } from "../@types";
import { colors } from "../style/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RADIUS = 2000;

export default function VeterinaryCareList(): JSX.Element {
  const navigation = useNavigation();
  const requestPlacesAsync = usePlaceSearchAsync();
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const {
        coords: { latitude, longitude },
      } = await getCurrentPositionAsync();
      const results = await requestPlacesAsync(
        { latitude, longitude },
        RADIUS,
        "veterinary_care"
      );
      setData(results);
      setLoading(false);
    })();
  }, []);

  const renderItem = ({ item }: { item: DataType }) => {
    return (
      <Container
        style={{ borderBottomColor: colors.light, borderBottomWidth: 1 }}
      >
        <TouchableOpacity
          // onPress={() => navigation.navigate("Reservation", { data: item })}
          style={{ width: "100%", paddingVertical: 18, paddingHorizontal: 30 }}
        >
          <NanumText type="button" margin={{ bottom: 5 }}>
            {item.name}
          </NanumText>
          <NanumText weight="bold" size={13} margin={{ bottom: 10 }}>
            02-3334-1234
          </NanumText>
          <Container
            row
            style={{ justifyContent: "flex-start" }}
            margin={{ bottom: 5 }}
          >
            <Ionicons name="time-outline" size={15} />
            <NanumText size="s" position="center" margin={{ left: 8 }}>
              09:00 ~ 19:00
            </NanumText>
          </Container>
          <Container row style={{ justifyContent: "flex-start" }}>
            <Ionicons name="location-outline" size={15} />
            <NanumText size="s" margin={{ left: 8 }}>
              서울 특별시 강남구 역삼 1동 도곡로 189
            </NanumText>
          </Container>
        </TouchableOpacity>
      </Container>
    );
  };

  return (
    <ScreenContainer align="flex-start">
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Container>
          <Container
            style={{
              backgroundColor: colors.yellow,
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
            }}
          >
            <NanumText
              position="center"
              type="plain"
              margin={{ top: 10, bottom: 10 }}
            >{`총 ${data?.length || 0} 건이 검색되었습니다.`}</NanumText>
          </Container>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={({ place_id }) => place_id}
            style={{
              width: "100%",
            }}
          />
        </Container>
      )}
    </ScreenContainer>
  );
}
