import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
  Image,
} from "react-native";
import { getShopInfo } from "../api/shop";

const ShopInformation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const shopData = await getShopInfo();
      setData(shopData);
      console.log("data", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>내 가게 관리하기</Text>
      <Image
        style={styles.shopImage}
        source={require("../assets/sampleshop.png")}
      ></Image>
      <View style={styles.line}></View>
      <View style={styles.informationSection}>
        <View style={styles.information}>
          <Text style={styles.infoTitle}>가게명</Text>
          <Text style={styles.infoContent}>카페코지 목동신월점</Text>
        </View>
        <View style={styles.information}>
          <Text style={styles.infoTitle}>전화번호</Text>
          <Text style={styles.infoContent}>070-4606-9858</Text>
        </View>
        <View style={styles.information}>
          <Text style={styles.infoTitle}>가게주소</Text>
          <Text style={styles.infoContent}>
            서울 양천구 남부순환로83길 17 105동 상가 카페코지
          </Text>
        </View>
        <View style={styles.information}>
          <Text style={styles.infoTitle}>사업자 번호</Text>
          <Text style={styles.infoContent}>648-87-01423</Text>
        </View>
        <View style={styles.information}>
          <Text style={styles.infoTitle}>영업 시간</Text>
          <Text style={styles.infoContent}>매일 09:00 - 22:00</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={{ ...styles.text, color: "#ffffff" }}>수정하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShopInformation;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    marginBottom: 30,
  },
  shopImage: {
    width: 211,
    height: 211,
    borderRadius: 50,
    borderRadius: 211,
  },
  line: {
    width: 390,
    height: 9,
    background: "rgba(43, 51, 68, 0.64)",
  },
  informationSection: {
    marginTop: 50,
  },
  information: { flexDirection: "row", width: "100%" },
  infoTitle: {
    width: 120,
    height: 35,
    borderRightWidth: 1.5,
    borderRightColor: "#D9D9D9",
  },
  infoContent: {
    marginLeft: 20,
    width: 200,
    height: 60,
  },
  submitBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 87,
    height: 40,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: "#000000",
    backgroundColor: "#1D2D4F",
    justifyContent: "center",
    color: "#FFFFFF",
  },
});
