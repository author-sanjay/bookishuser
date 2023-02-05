import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";

const UserDetails = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <View>
        <SafeAreaView
          style={{
            backgroundColor: "wheat",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View style={{ margin: 20, height: "25%" }}>
            <Text
              style={{
                alignSelf: "center",
                marginTop: 80,
                fontSize: 30,
                fontWeight: "300",
              }}
            >
              Basic Details
            </Text>
            <Text
              style={{
                alignSelf: "center",
                //   marginTop: 80,
                fontSize: 12,
                fontWeight: "300",
              }}
            >
              We Just want to know you better
            </Text>
          </View>
          <View
            style={{
              height: "75%",
              backgroundColor: "white",
              borderRadius: 40,
            }}
          >
            <View style={{ marginHorizontal: 30 }}>
              <Text style={{ marginTop: 20 }}>Name</Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                  marginTop: 10,
                  paddingLeft: 20,
                }}
                //   onChangeText={}
                //   value={number}
                placeholder="Name"
                //   keyboardType="numeric"
              />
              <Text style={{ marginTop: 20 }}>Email</Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                  marginTop: 10,
                  paddingLeft: 20,
                }}
                //   onChangeText={}
                //   value={number}
                placeholder="Email"
                //   keyboardType="numeric"
              />
              <Text style={{ marginTop: 20 }}>Create Password</Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                  marginTop: 10,
                  paddingLeft: 20,
                }}
                //   onChangeText={}
                //   value={number}
                placeholder="Password"

                //   keyboardType="numeric"
              />
              <Text style={{ marginTop: 20 }}>Username</Text>
              <TextInput
                style={{
                  borderColor: "black",
                  borderWidth: 1,
                  width: "100%",
                  height: 50,
                  borderRadius: 10,
                  marginTop: 10,
                  paddingLeft: 20,
                }}
                //   onChangeText={}
                //   value={number}
                placeholder="Username"
                //   keyboardType="numeric"
              />
              <View
                style={{
                  alignItems: "center",
                  marginTop: 20,
                  backgroundColor: "#3d3a4bff",
                  height: 40,
                  borderRadius: 12,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "400",
                    alignSelf: "center",
                  }}
                  onPress={() => navigation.navigate("password")}
                >
                  Start Reading
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default UserDetails;
