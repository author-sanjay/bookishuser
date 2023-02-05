import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import image from "../../../assets/login.png";
import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
const Password = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
      <SafeAreaView style={{ backgroundColor: "#d3c0cdff", height: "100%" }}>
        <View
          style={{
            backgroundColor: "#d3c0cdff",
            height: "60%",
            marginTop: "10%",
            alignContent: "center",
          }}
        >
          <Image source={image} style={{ width: "100%", height: "100%" }} />
        </View>
        <View
          style={{
            backgroundColor: "#d3c0cdff",
            height: "50%",
            marginTop: "5%",
            alignContent: "center",
            marginHorizontal: "5%",
          }}
        >
          <Text
            style={{ alignSelf: "center", fontSize: 20, fontWeight: "300" }}
          >
            2 Factor Authentication
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
            placeholder="Enter Password"
            //   keyboardType="numeric"
            textContentType="password"
          />
          <Text style={{ marginTop: 5, paddingLeft: 20, fontSize: 10 }}>
            By Signing in You agree to our T&C and Privacy Policies{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
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
                Vaildate
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Password;
