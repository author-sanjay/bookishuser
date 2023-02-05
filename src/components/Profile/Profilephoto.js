import { View, Text, Image } from "react-native";
import React from "react";
import user from "../../../assets/user.png";
const Profilephoto = () => {
  return (
    <View>
      <Image
        source={user}
        style={{ height: 110, width: 110, alignSelf: "center" }}
      />
    </View>
  );
};

export default Profilephoto;
