import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import leftarrow from "../../../assets/leftarrow.png";
import { useNavigation } from "@react-navigation/native";
import Member from "./Member";
import NonMember from "./NonMember";
const Membership = () => {
  const [mem, setmem] = useState(false);
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
            <Text style={{ fontSize: 18 }}>Membership</Text>
          </View>

          {/* <Text style={{ display: "none" }}>Saved</Text> */}
        </View>
        {mem ? <Member /> : <NonMember />}
      </SafeAreaView>
    </View>
  );
};

export default Membership;
