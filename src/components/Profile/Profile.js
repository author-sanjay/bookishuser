import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import save from "../../../assets/bookmark.png";
import Profilephoto from "./Profilephoto";
import arrow from "../../../assets/arrow.png";
import ProfileList from "./ProfileList";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#F6E1DC", width: "100%", height: "100%" }}>
      <SafeAreaView style={{ marginTop: 20 }}>
        <View style={{ margin: 20 }}>
          <View style={{ marginTop: 30 }}>
            <View style={{ marginBottom: 30, alignItems: "center" }}>
              <Text style={{ fontSize: 20 }}>Profile</Text>
            </View>
            <Profilephoto />
            <ProfileList />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
