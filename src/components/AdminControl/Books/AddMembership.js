import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AdminMembershipCard from "./AdminMembershipCard";
import { useNavigation } from "@react-navigation/native";

const AddMembership = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#F6E1DC",
        minHeight: "100%",
        width: "100%",

        // alignItems: "center",
      }}
    >
      <SafeAreaView style={{ marginTop: 10 }}>
        <Text style={{ marginTop: 20, fontSize: 20, alignSelf: "center" }}>
          Membership
        </Text>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("adminmembership")}
          >
            <Text
              style={{
                backgroundColor: "#3d3a4bff",
                color: "white",
                paddingHorizontal: 20,
                paddingVertical: 10,
                fontSize: 18,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
              }}
            >
              Add Membership
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <AdminMembershipCard />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AddMembership;
