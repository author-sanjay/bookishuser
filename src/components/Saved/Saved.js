import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import leftarrow from "../../../assets/leftarrow.png";
import BookwithDetails from "../BookCard/BookwithDetails";
import { useNavigation } from "@react-navigation/native";

const Saved = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#F6E1DC", width: "100%", height: "100%" }}>
      <SafeAreaView style={{ marginTop: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 20,
            margin: 20,
            // justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("profile")}>
            <Image source={leftarrow} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
          <View style={{ width: "80%", alignItems: "center" }}>
            <Text style={{ fontSize: 18 }}>Saved</Text>
          </View>
          {/* <Text style={{ display: "none" }}>Saved</Text> */}
        </View>

        <View style={{ marginTop: 20, width: "80%", alignSelf: "center" }}>
          <Text style={{ fontSize: 18 }}>Books</Text>
        </View>
        <BookwithDetails />
        <BookwithDetails />
      </SafeAreaView>
    </View>
  );
};

export default Saved;
