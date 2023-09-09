import { React, useState } from "react";
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

const EventPage = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const subMenuClick = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>이벤트/공지</Text>
      <View style={styles.EventSection}>
        <View style={styles.EventComponent}>
          <View>
            <Text style={styles.date}>2023-06-13</Text>
          </View>
          <Text style={styles.content}>
            오늘 개인사정으로로 휴무입니다. 다음주부터 정상적으로 운영합니다.
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity style={styles.Btn}>
              <Text style={{ ...styles.text, color: "#ffffff" }}>수정</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Btn}>
              <Text style={{ ...styles.text, color: "#ffffff" }}>삭제</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventPage;

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
  },
  EventSection: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 40,
    marginBottom: 23,
  },

  EventComponent: {
    flexDirection: "column",
    width: 353,
    minHeight: 151,
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#6E85B7",
    marginBottom: 40,
    paddingBottom: 10,
  },
  date: {
    color: "#ffffff",
    textAlign: "left",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 0.2,
    marginTop: 14,
    marginLeft: 10,
  },
  content: {
    color: "#ffffff",
    textAlign: "left",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 0.24,
    flexGrow: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  subMenu: {
    color: "#ffffff",
    marginRight: 15,
    marginTop: 5,
  },
  Btn: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 30,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: "#000000",
    backgroundColor: "#1D2D4F",
    justifyContent: "center",
    color: "#FFFFFF",
  },
});
