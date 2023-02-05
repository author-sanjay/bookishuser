import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import navi from "../../../assets/nav.png";
import profile from "../../../assets/profile.png";
import { useNavigation } from "@react-navigation/native";
const HomeNav = () => {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView style={{ marginTop: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("profile")}>
            <Image source={navi} style={{ height: 50 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("editprofile")}>
            <Image source={profile} style={{ height: 35, width: 35 }} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeNav;
