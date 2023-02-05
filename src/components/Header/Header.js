import {
  View,
  Text,
  SafeAreaView,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import menu from "../../../assets/menu.png";
import user from "../../../assets/user.png";
import { useNavigation } from "@react-navigation/native";
const Header = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView
        style={{ marginTop: 20, alignContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            marginHorizontal: 20,
            width: "95%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("profile")}>
            <Image
              source={menu}
              style={{ height: 40, width: 40, marginTop: 3 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 23, fontWeight: "300" }}>{props.title}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("editprofile")}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                backgroundColor: "wheat",
                marginTop: 3,
              }}
            >
              <Image source={user} style={{ height: 40, width: 40 }} />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;
