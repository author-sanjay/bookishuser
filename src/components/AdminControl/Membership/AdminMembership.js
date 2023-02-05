import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";

const AdminMembership = () => {
  return (
    <View
      style={{
        backgroundColor: "#F6E1DC",
        minHeight: "100%",
        width: "100%",
        marginTop: 30,
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: 30, marginTop: 20, fontSize: 20 }}>
        Add Membership
      </Text>
      <View style={{ marginBottom: 30 }}>
        {/* <Text>File Picker Here</Text> */}
      </View>
      <View style={{ width: "80%", height: 50, marginBottom: 10 }}>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            width: "100%",
            height: "100%",
            marginBottom: 10,
            borderRadius: 20,
            // marginTop: 20,
            paddingLeft: 20,
          }}
          //   onChangeText={}
          //   value={number}
          placeholder="Membership Name"
          //   keyboardType="numeric"
        />
      </View>
      <View style={{ width: "80%", height: 50, marginBottom: 10 }}>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            width: "100%",
            height: "100%",
            borderRadius: 20,
            // marginTop: 20,
            paddingLeft: 20,
          }}
          //   onChangeText={}
          //   value={number}
          placeholder="Description"
          //   keyboardType="numeric"
        />
      </View>
      <View style={{ width: "80%", height: 50, marginBottom: 10 }}>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            width: "100%",
            height: "100%",
            marginBottom: 10,
            borderRadius: 20,
            // marginTop: 20,
            paddingLeft: 20,
          }}
          //   onChangeText={}
          //   value={number}
          placeholder="Price"
          //   keyboardType="numeric"
        />
      </View>
      <View style={{ width: "80%", height: 50, marginBottom: 10 }}>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            width: "100%",
            height: "100%",
            marginBottom: 10,
            borderRadius: 20,
            // marginTop: 20,
            paddingLeft: 20,
          }}
          //   onChangeText={}
          //   value={number}
          placeholder="Duration in Days"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              paddingHorizontal: 50,
              paddingVertical: 15,
              borderRadius: 10,
              backgroundColor: "#3d3a4bff",
              color: "white",
            }}
          >
            Upload Membership
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AdminMembership;
