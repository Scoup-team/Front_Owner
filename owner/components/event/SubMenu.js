import React from "react";
import {
  View,
  Text,
  Pressable,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";

const SubMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btnbox}>
        <TouchableOpacity style={styles.cancleBtn}>
          <Text style={styles.text}>수 정</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={{ ...styles.text, color: "#ffffff" }}>삭 제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubMenu;

const styles = StyleSheet.create({
  container: {
    // width: 66,
    // height: 47,
  },
  btnbox: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
  cancleBtn: {
    width: 67,
    height: 35,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: "#000000",
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
  submitBtn: {
    width: 67,
    height: 35,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: "#A64747",
    backgroundColor: "#A64747",
    justifyContent: "center",
    color: "#FFFFFF",
  },

  text: {
    textAlign: "center",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "200",
    // lineHeight: "normal",
    letterSpacing: 0.36,
  },
});
