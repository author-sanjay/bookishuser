import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import image from "../../../assets/login.png";

const Register = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <View>
        <SafeAreaView
          style={{
            backgroundColor: "#d3c0cdff",
            height: "100%",
            alignContent: "center",
          }}
        >
          {/* <View> */}
          <View
            style={{
              backgroundColor: "#d3c0cdff",
              height: "60%",
              marginTop: "10%",
              alignContent: "center",
              top: "1%",
            }}
          >
            <Image source={image} style={{ width: "100%", height: "90%" }} />
          </View>
          <View
            style={{
              backgroundColor: "#d3c0cdff",
              height: "50%",
              // marginTop: "%",
              alignContent: "center",
              marginHorizontal: "5%",
            }}
          >
            <Text
              style={{ alignSelf: "center", fontSize: 30, fontWeight: "200" }}
            >
              Register
            </Text>
            <TextInput
              style={{
                borderColor: "black",
                borderWidth: 1,
                width: "100%",
                height: "15%",
                borderRadius: 20,
                marginTop: 20,
                paddingLeft: 20,
              }}
              //   onChangeText={}
              //   value={number}
              placeholder="Phone Number"
              keyboardType="numeric"
            />
            <Text style={{ marginTop: 5, paddingLeft: 20, fontSize: 10 }}>
              By Signing Up You agree to our T&C and Privacy Policies{" "}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("registerotp")}
            >
              <View
                style={{
                  backgroundColor: "#3d3a4bff",
                  height: "30%",
                  borderTopRightRadius: 15,
                  borderBottomLeftRadius: 15,
                  marginTop: "5%",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    padding: "1%",
                    fontSize: 20,
                    fontWeight: "300",
                    color: "white",
                  }}
                >
                  Get OTP
                </Text>
                <Text
                  style={{ marginTop: 10 }}
                  onPress={() => navigation.navigate("Login")}
                >
                  Already Have An Account
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
