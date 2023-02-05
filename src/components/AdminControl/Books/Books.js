import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import book1 from "../../../../assets/book1.jpg";
import close from "../../../../assets/close.png";
import { useNavigation } from "@react-navigation/native";

const Books = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#F6E1DC",
        minHeight: "100%",
        width: "100%",

        // alignItems: "center",
      }}
    >
      <SafeAreaView style={{ marginTop: 30 }}>
        <Text style={{ marginTop: 20, fontSize: 20, alignSelf: "center" }}>
          Books
        </Text>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate("bookadd")}>
            <Text
              style={{
                backgroundColor: "#3d3a4bff",
                color: "white",
                paddingHorizontal: 20,
                paddingVertical: 10,
                fontSize: 18,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
              }}
            >
              Add Book
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            style={{
              alignSelf: "center",
              borderRadius: 20,
              marginTop: 30,
              width: "90%",
              fontSize: 15,
              marginBottom: 4,
              marginLeft: 10,
              marginRight: 10,
            }}
            placeholder="Title, Author, Category"
            onChangeText={(value) => {
              {
                // props.queryupdate(value);
                // // console.log(props.query);
                // // props.active(true);
                // setvisible(true);
                // props.func;
              }
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            marginHorizontal: 10,
            flexWrap: "wrap",
            display: "flex",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
          >
            <Image source={book1} style={{ height: 250, width: 150 }} />

            <TouchableOpacity>
              <Image
                source={close}
                style={{ height: 20, width: 20, top: -8, left: -10 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Books;
