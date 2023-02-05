import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import book from "../../../../assets/book1.jpg";
import close from "../../../../assets/close.png";

const AdminBookCard = () => {
  return (
    <View>
      <View
        style={{
          width: 150,
          height: 250,
          marginHorizontal: 5,
          marginTop: 50,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image source={book} style={{ height: "100%", width: "100%" }} />
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "white",
              height: 30,
              width: 30,
              borderRadius: 20,
              left: -15,
              top: -10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={close}
              style={{
                height: 20,
                width: 20,
                // backgroundColor: "white",
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdminBookCard;
