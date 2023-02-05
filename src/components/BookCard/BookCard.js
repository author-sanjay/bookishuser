import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import book from "../../../assets/book1.jpg";
import { useNavigation } from "@react-navigation/native";

const BookCard = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ width: "100%", height: "50%" }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("details", {
            name: "bookname",
            author: "sanjay",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

            price: "123",
            img: props.img,
            rating: "4.5",
            pages: "250",
            lang: "ENG",
          })
        }
      >
        <Image
          source={{
            uri: props.img,
          }}
          style={{ height: "100%", width: "100%" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BookCard;
