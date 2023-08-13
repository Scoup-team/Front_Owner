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
import SubMenu from "../components/event/SubMenu";

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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.date}>2023-06-13</Text>
            <TouchableOpacity onPress={subMenuClick}>
              <Text style={styles.subMenu}>...</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.content}>
            오늘 개인사정으로로 휴무입니다. 다음주부터 정상적으로 운영합니다.
          </Text>
          {subMenuOpen ? <SubMenu /> : null}
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
    height: 141,
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#6E85B7",
    marginBottom: 40,
    paddingBottom: 10,
  },
  date: {
    color: "#ffffff",
    textAlign: "left",
    fontSize: 10,
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
});
