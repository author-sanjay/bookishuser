import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import stats from "../../../assets/stats.png";
import books from "../../../assets/books.png";
import membershipcard from "../../../assets/membership-card.png";
import logout from "../../../assets/logout.png";
import { useNavigation } from "@react-navigation/native";
const Admin = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 30,
        alignSelf: "center",
        width: "90%",
        // backgroundColor: "black",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("adminstats");
        }}
      >
        <View
          style={{
            borderRadius: 10,
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#E5F3FD",
          }}
        >
          <View style={{ margin: 10, display: "flex", flexDirection: "row" }}>
            <Image source={stats} style={{ height: 30, width: 30 }} />
            <Text style={{ marginLeft: 10, marginTop: 2, fontSize: 15 }}>
              Stats
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("bookadd");
        }}
      >
        <View
          style={{
            borderRadius: 10,
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#E5F3FD",
          }}
        >
          <View style={{ margin: 10, display: "flex", flexDirection: "row" }}>
            <Image source={books} style={{ height: 30, width: 30 }} />
            <Text style={{ marginLeft: 10, marginTop: 2, fontSize: 15 }}>
              Add Book
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("addmembership");
        }}
      >
        <View
          style={{
            borderRadius: 10,
            marginTop: 10,
            display: "flex",
            backgroundColor: "#E5F3FD",
            flexDirection: "row",
          }}
        >
          <View style={{ margin: 10, display: "flex", flexDirection: "row" }}>
            <Image source={membershipcard} style={{ height: 30, width: 30 }} />
            <Text style={{ marginLeft: 10, marginTop: 2, fontSize: 15 }}>
              Add Membership
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate("stats");
        }}
      >
        <View
          style={{
            borderRadius: 10,
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#E5F3FD",
          }}
        >
          <View style={{ margin: 10, display: "flex", flexDirection: "row" }}>
            <Image source={logout} style={{ height: 30, width: 30 }} />
            <Text style={{ marginLeft: 10, marginTop: 2, fontSize: 15 }}>
              Sign Out
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Admin;
