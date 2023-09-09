import React, { useState } from "react";
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
import { useRoute, useNavigation } from "@react-navigation/native";

const EditingEventPage = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const { eventId, content } = route.params;

  const [eventContent, setEventContent] = useState(content);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>이벤트/공지 수정</Text>
      <View style={styles.textbox}>
        <TextInput
          multiline={true}
          style={styles.input}
          value={eventContent}
          onChangeText={(text) => setEventContent(text)}
        />
      </View>
      <View style={styles.btnbox}>
        <TouchableOpacity
          style={styles.cancleBtn}
          onPress={() => navigation.pop()}
        >
          <Text style={styles.text}>취 소</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={{ ...styles.text, color: "#ffffff" }}>수 정</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditingEventPage;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    marginTop: 80,
    marginBottom: 40,
  },
  textbox: {
    // flexDirection: "column",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#E8E8E8",
    borderRadius: 10,
    width: 295,
    height: 286,
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: 0.24,
    padding: 15,
  },
  btnbox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
  cancleBtn: {
    width: 87,
    height: 40,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: "#000000",
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
  submitBtn: {
    width: 87,
    height: 40,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: "#000000",
    backgroundColor: "#1D2D4F",
    justifyContent: "center",
    color: "#FFFFFF",
  },

  text: {
    textAlign: "center",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "200",
    // lineHeight: "normal",
    letterSpacing: 0.36,
  },
});
