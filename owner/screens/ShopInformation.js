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
import { deleteStore, showStore } from "../api/store";
import { useIsFocused } from "@react-navigation/native";

const ShopInformation = ({navigation}) => {

  const [myShop, setMyShop] = useState([])
  const isFocused = useIsFocused();

  useEffect(()=>{
    checkAndShowStore();
  },[isFocused])

  const checkAndShowStore  = async() => {
    try{
      const response = await showStore()
      
      const shopData = response?.data;
      if (!shopData) {
        navigation.navigate("StoreRegister");
      } else{
        setMyShop(shopData);
        console.log("StoreShow: ", response?.data);
      }
      

    } catch(error){
      console.log("등록된 가게가 존재하지 않습니다.")
      // navigation.navigate("StoreRegister");
    }
  }


  const StoreDelete = async () => {
    try {
      const response = await deleteStore();
      console.log(response);
      navigation.navigate("MainPage")
    } catch (error) {
      console.log("error: ", error);
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
          <Text style={styles.infoContent}>{myShop?.shopName}</Text>
        </View>
        <View style={styles.information}>
          <Text style={styles.infoTitle}>전화번호</Text>
          <Text style={styles.infoContent}>{myShop?.phoneNumber}</Text>
        </View>
        <View style={styles.information}>
          <Text style={styles.infoTitle}>가게주소</Text>
          <Text style={styles.infoContent}>
          {myShop?.shopAddress}
          </Text>
        </View>
        <View style={styles.information}>
          <Text style={styles.infoTitle}>사업자 번호</Text>
          <Text style={styles.infoContent}>{myShop?.licenseeNumber}</Text>
        </View>
        <View style={styles.information}>
          <Text style={styles.infoTitle}>영업 시간</Text>
          <Text style={styles.infoContent}>{myShop?.runningTime}</Text>
        </View>
      </View>
      <Pressable style={styles.submitBtn} onPress={() => navigation.navigate("StoreRegister", {shopData: myShop})}>
        <Text style={{ ...styles.text, color: "#ffffff" }}>수정하기</Text>
      </Pressable>
      <Pressable style={styles.submitBtn} onPress={StoreDelete}>
        <Text style={{ ...styles.text, color: "#ffffff" }}>삭제하기</Text>
      </Pressable>
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
    marginBottom:10
  },
});
