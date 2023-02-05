import { View, Text, Image } from "react-native";
import React from "react";
import NameDetails from "./NameDetails";

const Top = (props) => {
  const { name, author, description, price, img, rating, pages, lang } =
    props.route.params;
  console.log(props.route.params);
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 30,
        backgroundColor: "#e0a251",
      }}
    >
      {/* <Text>Top</Text> */}
      <View
        style={{
          width: 150,
          height: 240,
          backgroundColor: "#e0a251",
          shadowOffset: { width: -2, height: 4 },
          shadowColor: "white",
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
      >
        <Image
          source={{ uri: img }}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 20,
          }}
        />
      </View>
      <NameDetails
        name={name}
        author={author}
        description={description}
        rating={rating}
        page={pages}
        lang={lang}
      />
    </View>
  );
};

export default Top;
