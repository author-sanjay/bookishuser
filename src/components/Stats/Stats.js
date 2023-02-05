import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import leftarrow from "../../../assets/leftarrow.png";
import { useNavigation } from "@react-navigation/native";

const Stats = () => {
  const navigation = useNavigation();
  const [published, setpublished] = useState(true);
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
            <Text style={{ fontSize: 18 }}>Stats</Text>
          </View>
          {/* <Text style={{ display: "none" }}>Saved</Text> */}
        </View>

        <View style={{ marginTop: 20, width: "80%", alignSelf: "center" }}>
          <Text style={{ fontSize: 15, marginBottom: 30 }}>
            My Reading habits
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                height: 130,
                width: 130,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FF756D",
                borderRadius: 30,
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>Read</Text>
              <Text style={{ color: "white", fontSize: 30 }}>169</Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                height: 130,
                width: 130,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#B39DDC",
                borderRadius: 30,
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>Saved</Text>
              <Text style={{ color: "white", fontSize: 30 }}>160</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20, width: "80%", alignSelf: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "300" }}>
            Your Book Stats
          </Text>
          {published ? (
            <View>
              <View
                style={{
                  // width: "80%",
                  marginTop: 30,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    height: 130,
                    width: 130,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#95BFC9",
                    borderRadius: 30,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>Books </Text>
                  <Text style={{ color: "white", fontSize: 30 }}>4</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    height: 130,
                    width: 130,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#85DE77",
                    borderRadius: 30,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>Saved By</Text>
                  <Text style={{ color: "white", fontSize: 30 }}>160</Text>
                </View>
              </View>
              <View
                style={{
                  // width: "80%",
                  marginTop: 30,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    height: 130,
                    width: 130,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#B39DDC",
                    borderRadius: 30,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>Read By</Text>
                  <Text style={{ color: "white", fontSize: 30 }}>160</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "white",
                    height: 130,
                    width: 130,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8DA290",
                    borderRadius: 30,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 15 }}>Revenue</Text>
                  <Text style={{ color: "white", fontSize: 30 }}>160</Text>
                </View>
              </View>

              <View
                style={{
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <TouchableOpacity>
                  <Text
                    style={{
                      backgroundColor: "skyblue",
                      padding: 20,
                      borderRadius: 20,
                      color: "black",
                    }}
                  >
                    Promote Book
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={{ marginTop: 30 }}>
              <Text
                style={{ flexWrap: "wrap", fontSize: 25, fontWeight: "300" }}
              >
                Sorry You have not published and book till now
              </Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Stats;
