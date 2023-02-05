import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import BookCard from "./BookCard";
import star from "../../../assets/star.png";
import book from "../../../assets/book.png";
import { useNavigation } from "@react-navigation/native";

const BookwithDetails = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("details", {
            name: "bookname",
            author: "sanjay",
            description: "desc",
            price: "123",
            img: "https://upload.wikimedia.org/wikipedia/en/b/b2/The_Forty_Rules_of_Love_cover.jpg",
            rating: "4.5",
            pages: "240",
            lang: "ENG",
          })
        }
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            margin: 20,
            width: "90%",
            height: 170,
            borderRadius: 10,
            shadowColor: "black",
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 10,
            backgroundColor: "#E5F3FD",
            padding: 10,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              height: 300,
              width: 100,
            }}
          >
            <BookCard
              img={
                "https://upload.wikimedia.org/wikipedia/en/b/b2/The_Forty_Rules_of_Love_cover.jpg"
              }
            />
          </View>
          <View
            style={{
              alignItems: "flex-start",
              width: 150,
              marginTop: 10,
              marginLeft: 50,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 10,
                }}
              >
                <Image source={star} style={{ height: 20, width: 20 }} />
                <Text> 4.5</Text>
              </View>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>Name</Text>
              <Text style={{ fontSize: 12 }}>Authors</Text>
            </View>
            <View>
              <Image source={book} style={{ height: 30, width: 30 }} />
            </View>
            {/* <Text style={{ fontSize: 12 }}>Short Description</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BookwithDetails;
