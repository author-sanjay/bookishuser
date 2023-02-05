import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import search from "../../../assets/search.png";
import Header from "../Header/Header";
import arrow from "../../../assets/arrow.png";
// import MenuOpenIcon from "@mui/icons-material/MenuOpen";
const SearchBar = (props) => {
  const [visible, setvisible] = useState(false);
  const handleClick = (e) => {
    props.string(e);
    console.log(props);
  };
  // console.log(navigation);

  const handleMagicTap = () => {
    console.log("HEllo");
  };
  return (
    <View>
      <SafeAreaView>
        <Header title="Home" />

        <View style={{ alignSelf: "center", marginTop: 20, width: "80%" }}>
          <Text>Hi, Sanjay</Text>

          <Text style={{ fontSize: 25, fontWeight: "400" }}>
            What are you reading
          </Text>

          <Text style={{ fontSize: 25 }}>Today?</Text>
        </View>

        <View
          // onpress={handleMagicTap}
          style={{
            marginTop: "5%",
            display: "flex",
            flexDirection: "row",
            width: "80%",
            alignSelf: "center",
            alignItems: "center",
            marginRight: 20,
            borderColor: "black",
            borderWidth: 1,
            // padding: 5,
            borderRadius: 10,
            paddingTop: 5,
            paddingLeft: 15,
          }}
        >
          {/* <MenuOpenIcon /> */}
          <Image source={search} style={{ height: 25, width: 25 }} />
          <TextInput
            style={{
              width: "80%",
              fontSize: 15,
              marginBottom: 4,
              marginLeft: 10,
            }}
            placeholder="Title, Author, Category"
            onChangeText={(value) => {
              {
                props.queryupdate(value);
                // console.log(props.query);
                // props.active(true);
                setvisible(true);
                props.func;
              }
            }}
          />
          {visible ? (
            <TouchableOpacity onPress={() => props.active(false)}>
              <View>
                <Image
                  source={arrow}
                  style={{ height: 20, width: 20, marginLeft: -10 }}
                />
              </View>
            </TouchableOpacity>
          ) : (
            //
            <View></View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SearchBar;
