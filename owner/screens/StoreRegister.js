import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import store from "../assets/store.png";
import ClickButton from "../components/ClickButton";

const StoreRegister = ({ navigation }) => {
  return (
    <ScrollView>
      <Text style={styles.mainText}>가게 등록</Text>

      <View style={styles.inputSection}>
        <Text style={styles.fixedText}>가게명</Text>
        <TextInput
          style={[styles.inputText, { width: 231, height: 42 }]}
          placeholder="카페코지 이대점"
        ></TextInput>
      </View>

      <View style={styles.lineStyle}></View>

      <View style={styles.photoSection}>
        <Text style={styles.photoText}>가게 대표 사진 등록</Text>
        <Image source={store} style={styles.storeImage} />
      </View>
      <View style={styles.lineStyle}></View>

      <View style={styles.inputSection}>
        <Text style={styles.fixedText}>전화번호</Text>
        <TextInput
          style={[styles.inputText, { width: 231, height: 42 }]}
          placeholder="070-4307-4192"
        ></TextInput>
      </View>
      <View style={styles.lineStyle}></View>

      <View style={styles.bigTextArea}>
        <Text style={[styles.fixedText, { marginTop: 5 }]}>가게 주소</Text>
        <TextInput
          style={[styles.inputText, { width: 231, height: 90 }]}
          placeholder="서울특별시 서대문구 이화여대길88-19"
        ></TextInput>
      </View>
      <View style={styles.lineStyle}></View>

      <View style={styles.inputSection}>
        <Text style={styles.fixedText}>사업자 번호</Text>
        <TextInput
          style={[styles.inputText, { width: 231, height: 42 }]}
          placeholder="105-86-28928"
        ></TextInput>
      </View>
      <View style={styles.lineStyle}></View>

      <View style={styles.bigTextArea}>
        <Text style={[styles.fixedText, { marginTop: 5 }]}>영업 시간</Text>
        <TextInput
          style={[styles.inputText, { width: 231, height: 92 }]}
          placeholder="주말 오전 11:00~ 오후 8:00&#10;평일 오전 10:00~ 오후 9:00"
        ></TextInput>
      </View>
      <View style={[styles.lineStyle, { marginBottom: 32 }]}></View>
      <ClickButton text={"저  장"} />
    </ScrollView>
  );
};

export default StoreRegister;

export const styles = StyleSheet.create({
  inputSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 19,
    marginTop: 15,
  },
  inputText: {
    backgroundColor: "#E8E8E8",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: -0.4,
    borderRadius: 8,
    paddingLeft: 9,
  },
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 66,
    fontStyle: "normal",
    marginBottom: 25,
  },
  fixedText: {
    color: "#6E85B7",
    textAlign: "center",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: -0.36,
    width: 116,
  },
  lineStyle: {
    width: 390.001,
    height: 0.5,
    backgroundColor: "#2B3344A3",
  },
  photoSection: {},
  photoText: {
    color: "#6E85B7",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: -0.36,
    marginLeft: 14,
    marginTop: 15,
  },
  storeImage: {
    width: 72,
    height: 71,
    marginLeft: 167,
    marginBottom: 32,
    marginTop: 19,
  },
  bigTextArea: {
    flexDirection: "row",
    marginBottom: 19,
    marginTop: 15,
  },
});
