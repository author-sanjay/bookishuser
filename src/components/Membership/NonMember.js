import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import chip from "../../../assets/chip.png";
import { useNavigation } from "@react-navigation/native";
const NonMember = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "90%",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        alignItems: "center",
        borderRadius: 20,
      }}
    >
      <View
        style={{ backgroundColor: "#5B0A91", width: "100%", borderRadius: 20 }}
      >
        <View style={{ marginTop: 50 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                marginLeft: 30,
                fontSize: 20,
                marginTop: 10,
              }}
            >
              Gold
            </Text>
            <Image
              source={chip}
              style={{ height: 50, width: 70, marginRight: 30 }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 40,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                marginLeft: 30,
                marginTop: 10,
              }}
            >
              Sanjay Kumar
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                marginLeft: 30,
                marginTop: 10,
                marginRight: 40,
              }}
            >
              EXPIRED
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("membershiplist");
        }}
      >
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#301934",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", padding: 15 }}>Renew Card</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NonMember;
