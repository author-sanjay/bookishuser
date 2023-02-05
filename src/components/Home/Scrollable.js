import {
  View,
  Text,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Scrollable = (props) => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={props.data}
        // keyExtractor={(item) => item.key.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        // style={{ height: 200 }}
        renderItem={(item) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("details", {
                  name: "bookname",
                  author: "sanjay",
                  description: "desc",
                  price: "123",
                  img: item.item.img,
                })
              }
            >
              <View style={{ marginHorizontal: 20, width: 150 }}>
                <Image
                  source={{ uri: item.item.img }}
                  style={{ height: 220, width: 150 }}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "wheat",
                    height: 35,
                    width: "100%",
                  }}
                >
                  <View
                    style={{
                      alignContent: "center",
                      backgroundColor: "wheat",
                      width: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TouchableOpacity>
                      <Text style={{ marginLeft: 10, paddingRight: 10 }}>
                        Rate
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#251a13",
                      width: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                    }}
                  >
                    <TouchableOpacity>
                      <Text style={{ marginRight: 10, color: "white" }}>
                        Read
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Scrollable;
