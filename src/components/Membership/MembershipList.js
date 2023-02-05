import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import chip from "../../../assets/chip.png";
const MembershipList = () => {
  return (
    <View style={{ backgroundColor: "#F6E1DC", minHeight: "100%" }}>
      <SafeAreaView style={{ marginTop: 30, margin: 20 }}>
        <View>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ fontSize: 18 }}>Renew Membership</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                backgroundColor: "#5B0A91",
                width: "100%",
                borderRadius: 20,
              }}
            >
              <View style={{ marginTop: 50 }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 20,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      marginLeft: 30,
                      fontSize: 20,
                      marginTop: 10,
                    }}
                  >
                    Gold
                  </Text>
                  <Image
                    source={chip}
                    style={{ height: 50, width: 70, marginRight: 30 }}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 40,
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      marginLeft: 30,
                      marginTop: 20,
                    }}
                  >
                    Rs 99/-
                  </Text>
                  <View>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 10,
                        marginLeft: 30,
                        marginTop: 10,
                        marginRight: 40,
                      }}
                    >
                      Validity:
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        marginLeft: 30,
                        // marginTop: 10,
                        marginRight: 40,
                      }}
                    >
                      1 Month
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                backgroundColor: "#5B0A91",
                width: "100%",
                borderRadius: 20,
              }}
            >
              <View style={{ marginTop: 50 }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 20,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      marginLeft: 30,
                      fontSize: 20,
                      marginTop: 10,
                    }}
                  >
                    Diamond
                  </Text>
                  <Image
                    source={chip}
                    style={{ height: 50, width: 70, marginRight: 30 }}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 40,
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      marginLeft: 30,
                      marginTop: 20,
                    }}
                  >
                    Rs 399/-
                  </Text>
                  <View>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 10,
                        marginLeft: 30,
                        marginTop: 10,
                        marginRight: 40,
                      }}
                    >
                      Validity:
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        marginLeft: 30,
                        // marginTop: 10,
                        marginRight: 40,
                      }}
                    >
                      6 Month
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MembershipList;
