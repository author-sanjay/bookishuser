import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import Textpart from "./Textpart";

const EditProfile = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <View style={{ backgroundColor: "#F6E1DC", minHeight: "100%" }}>
        <SafeAreaView style={{ marginTop: 30, alignItems: "center" }}>
          <View>
            <Text style={{ fontSize: 20 }}>Edit Profile</Text>
          </View>
          <Textpart />

          <View style={{ marginTop: 20 }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  backgroundColor: "#3d3a4bff",
                  color: "white",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                Save Profile
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
