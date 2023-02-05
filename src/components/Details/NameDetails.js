import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import bookmar from "../../../assets/bookmarks.png";
import book from "../../../assets/open-book.png";
const NameDetails = (props) => {
  return (
    <View
      style={{
        marginTop: 30,
        alignItems: "center",
        width: "100%",
      }}
    >
      <Text style={{ fontSize: 20, color: "white", fontWeight: "400" }}>
        {props.name}
      </Text>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
        <Text style={{ fontSize: 12, color: "white", fontWeight: "400" }}>
          By{" "}
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginTop: -3,
            color: "white",
            fontWeight: "400",
          }}
        >
          {props.author}
        </Text>
      </View>
      <View
        style={{
          width: "80%",
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "space-between",
          marginBottom: 60,
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 10, color: "white" }}>Rating</Text>
          <Text style={{ fontSize: 15, color: "white" }}>{props.rating}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 10, color: "white" }}>Pages</Text>
          <Text style={{ fontSize: 15, color: "white" }}>{props.page}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 10, color: "white" }}>Language</Text>
          <Text style={{ fontSize: 15, color: "white" }}>{props.lang}</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", width: "100%" }}>
        <View
          style={{
            //   backgroundColor: "white",
            top: -25,
            display: "flex",
            flexDirection: "row",
            width: "70%",
            alignSelf: "center",
            backgroundColor: "#342415",
            justifyContent: "space-between",
            alignContent: "center",
            borderRadius: 20,
            height: 50,
          }}
        >
          <View
            style={{
              alignContent: "center",
              justifyContent: "center",
              width: "50%",
              marginLeft: 10,
            }}
          >
            <TouchableOpacity>
              <View>
                <Image
                  source={bookmar}
                  style={{ width: 20, height: 20, marginLeft: 15 }}
                />

                <Text
                  style={{
                    marginLeft: 40,
                    color: "white",
                    fontSize: 18,
                    fontWeight: "300",
                    marginTop: -25,
                  }}
                >
                  Save
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              //   alignContent: "sta",
              //   justifyContent: "center",
              width: "50%",
              display: "flex",
              flexDirection: "row",
              top: 10,
              marginLeft: -10,
            }}
          >
            <TouchableOpacity>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Image
                  source={book}
                  style={{ width: 20, height: 20, marginLeft: 15 }}
                />
                <Text
                  style={{
                    marginLeft: 10,
                    color: "white",
                    fontSize: 18,
                    fontWeight: "300",
                    marginTop: -3,
                  }}
                >
                  Read
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Description</Text>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            {props.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NameDetails;
