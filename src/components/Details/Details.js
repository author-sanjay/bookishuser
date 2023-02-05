import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import leftarrow from "../../../assets/leftarrow.png";
import bookmark from "../../../assets/bookmark.png";
import Top from "./Top";
import { useNavigation } from "@react-navigation/native";
const Details = ({ route, props }) => {
  const navigation = useNavigation();
  // const { name, author, description, price, img } = props.route.params;
  // console.log(img);
  console.log(route);
  return (
    <View>
      <ScrollView style={{ minHeight: "100%" }}>
        <SafeAreaView
          style={{
            backgroundColor: "#F6E1DC",
            width: "100%",

            minHeight: "100%",
          }}
        >
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View style={{ backgroundColor: "#e0a251" }}>
              <View
                style={{
                  display: "flex",
                  marginTop: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity onPress={() => navigation.navigate("home")}>
                  <Image source={leftarrow} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={bookmark} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ backgroundColor: "#e0a251" }}>
              <Top route={route} />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Details;
