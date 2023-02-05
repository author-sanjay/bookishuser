import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import user from "../../../assets/user.png";
// import { TextInput } from "react-native-paper";
import username from "../../../assets/username.png";
import name from "../../../assets/name.png";
import password from "../../../assets/key.png";
import email from "../../../assets/email.png";
import phone from "../../../assets/phone.png";
import address from "../../../assets/address.png";
const Textpart = () => {
  return (
    // <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
    <View style={{ marginTop: 30, width: "80%" }}>
      <View style={{ alignItems: "center" }}>
        <Image source={user} style={{ height: 110, width: 110 }} />
      </View>
      <View style={{ marginTop: 30 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Image
            source={name}
            style={{ height: 30, width: 30, marginTop: 5 }}
          />
          <TextInput
            style={{
              width: "80%",
              fontSize: 15,
              marginBottom: 4,
              marginLeft: 10,
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="Name"
            onChangeText={(value) => {
              {
              }
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={username}
            style={{ height: 30, width: 30, marginTop: 5 }}
          />
          <TextInput
            style={{
              width: "80%",
              fontSize: 15,
              marginBottom: 4,
              marginLeft: 10,
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="UserName"
            onChangeText={(value) => {
              {
              }
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={password}
            style={{ height: 30, width: 30, marginTop: 5 }}
          />
          <TextInput
            style={{
              width: "80%",
              fontSize: 15,
              marginBottom: 4,
              marginLeft: 10,
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="Password"
            onChangeText={(value) => {
              {
              }
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={email}
            style={{ height: 30, width: 30, marginTop: 5 }}
          />
          <TextInput
            style={{
              width: "80%",
              fontSize: 15,
              marginBottom: 4,
              marginLeft: 10,
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="Email"
            onChangeText={(value) => {
              {
              }
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={phone}
            style={{ height: 30, width: 30, marginTop: 5 }}
          />
          <TextInput
            style={{
              width: "80%",
              fontSize: 15,
              marginBottom: 4,
              marginLeft: 10,
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="Phone Number"
            onChangeText={(value) => {
              {
              }
            }}
          />
        </View>
        <View
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={address}
            style={{ height: 30, width: 30, marginTop: 5 }}
          />
          <TextInput
            style={{
              width: "80%",
              fontSize: 15,
              marginBottom: 4,
              marginLeft: 10,
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="Address"
            onChangeText={(value) => {
              {
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Textpart;
