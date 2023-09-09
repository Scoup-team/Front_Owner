import { React, useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getEvent, deleteEvent } from "../api/event";

const EventPage = () => {
  const navigation = useNavigation();

  const cafeId = 1;

  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    getEventData();
  }, []);

  const getEventData = async () => {
    try {
      const getData = await getEvent(cafeId);
      const formattedData = getData.data.map((data) => ({
        ...data,
        createdAt: data.createdAt.split("T")[0],
      }));
      setEventData(formattedData);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEventData = async (eventId) => {
    try {
      const deleteData = await deleteEvent(eventId);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditButtonPress = (eventId, content) => {
    navigation.navigate("EditingEventPage", { eventId, content });
  };

  const handleDeleteButtonPress = (eventId) => {
    deleteEventData(eventId);
    Alert.alert("이벤트/공지 삭제에 성공했습니다.");
    getEventData();
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>이벤트/공지</Text>
      <View style={styles.EventSection}>
        {eventData && eventData.length > 0 ? (
          eventData.map((data) => (
            <View style={styles.EventComponent} key={data.eventId}>
              <View>
                <Text style={styles.date}>{data.createdAt}</Text>
              </View>
              <Text style={styles.content}>{data.content}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <TouchableOpacity
                  style={styles.Btn}
                  onPress={() =>
                    handleEditButtonPress(data.eventId, data.content)
                  }
                >
                  <Text style={{ ...styles.text, color: "#ffffff" }}>수정</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.Btn}
                  onPress={() => handleDeleteButtonPress(data.eventId)}
                >
                  <Text style={{ ...styles.text, color: "#ffffff" }}>삭제</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <View />
        )}
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
