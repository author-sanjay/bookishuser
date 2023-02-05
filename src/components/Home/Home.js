import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import left from "../../../assets/left.png";
// import SegmentIcon from "@mui/icons-material/Segment";
import searhi from "../../../assets/search.png";
// import im
import star from "../../../assets/star.png";
import SearchBar from "./SearchBar";
import BookCard from "../BookCard/BookCard";
import Scrollable from "./Scrollable";
import book from "../../../assets/book.png";
import BookwithDetails from "../BookCard/BookwithDetails";
const Home = ({ navigation }) => {
  const [search, setsearch] = useState(true);
  const [string, setstring] = useState("");

  function changestring(data) {
    setstring(data);
  }

  const data = [
    {
      img: "https://upload.wikimedia.org/wikipedia/en/b/b2/The_Forty_Rules_of_Love_cover.jpg",
    },
    {
      img: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/b/b2/The_Forty_Rules_of_Love_cover.jpg",
    },
    {
      img: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/b/b2/The_Forty_Rules_of_Love_cover.jpg",
    },
    {
      img: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/b/b2/The_Forty_Rules_of_Love_cover.jpg",
    },
    {
      img: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    },
  ];
  return (
    <View style={{ backgroundColor: "#F6E1DC" }}>
      {search ? (
        <ScrollView>
          <SafeAreaView
            style={{
              backgroundColor: "#F6E1DC",
              width: "100%",
              // height: "auto",
              // overflow: "scroll",
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View style={{ display: "flex", flexDirection: "column" }}>
              <View>
                <SearchBar
                  query={string}
                  queryupdate={setstring}
                  active={setsearch}
                  func={changestring}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginLeft: 22,
                  marginTop: 25,
                  marginRight: 40,
                }}
              >
                <View style={{ marginTop: "10%" }}>
                  <Text style={{ fontSize: 18 }}>Today's</Text>
                  <Text style={{ fontSize: 18 }}>Recommendation</Text>
                </View>
                <View style={{ height: 300, width: 100 }}>
                  <BookCard img={data[0].img} />
                </View>
              </View>
              <View style={{ marginTop: -80 }}>
                <Text
                  style={{
                    marginTop: 0,
                    fontSize: 20,
                    fontWeight: "300",
                    marginBottom: 20,
                    // fontFamily: "Segoe UI",
                    marginLeft: 20,
                  }}
                >
                  Trending Books
                </Text>
              </View>
              <Scrollable data={data} />
              <View>
                <View>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 20,
                      fontWeight: "300",
                      marginBottom: 20,
                      // fontFamily: "Segoe UI",
                      marginLeft: 20,
                    }}
                  >
                    New Arrivals
                  </Text>
                  <TouchableOpacity>
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
                        <BookCard img={data[0].img} />
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
                            <Image
                              source={star}
                              style={{ height: 20, width: 20 }}
                            />
                            <Text> 4.5</Text>
                          </View>
                          <Text style={{ fontSize: 18, marginBottom: 10 }}>
                            Name
                          </Text>
                          <Text style={{ fontSize: 12 }}>Authors</Text>
                        </View>
                        <View>
                          <Image
                            source={book}
                            style={{ height: 30, width: 30 }}
                          />
                        </View>
                        {/* <Text style={{ fontSize: 12 }}>Short Description</Text> */}
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      ) : (
        <View
          style={{
            height: "100%",
            width: "100%",
            // backgroundColor: "black",
          }}
        >
          <View
            style={{
              backgroundColor: "#F6E1DC",
              width: "100%",
              height: "100%",
              // height: "auto",
              // overflow: "scroll",
              minHeight: "100%",
              margin: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View style={{ height: "100%" }}>
              <Text style={{ marginTop: 30, fontSize: 20, fontWeight: "300" }}>
                Search
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => {
                    setsearch(true);
                  }}
                >
                  <Image
                    source={left}
                    style={{
                      height: 20,
                      width: 20,
                      marginTop: 25,
                      marginRight: 10,
                    }}
                  />
                </TouchableOpacity>
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
                  <Image source={searhi} style={{ height: 25, width: 25 }} />
                  <Text>{string}</Text>
                </View>
              </View>
              <View style={{ marginTop: 30, marginLeft: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "300" }}>
                  Your Results
                </Text>
              </View>
              <View>
                <TouchableOpacity>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 30,
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
                          <Image
                            source={star}
                            style={{ height: 20, width: 20 }}
                          />
                          <Text> 4.5</Text>
                        </View>
                        <Text style={{ fontSize: 18, marginBottom: 10 }}>
                          Name
                        </Text>
                        <Text style={{ fontSize: 12 }}>Authors</Text>
                      </View>
                      <View>
                        <Image
                          source={book}
                          style={{ height: 30, width: 30 }}
                        />
                      </View>
                      {/* <Text style={{ fontSize: 12 }}>Short Description</Text> */}
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
    // </View>
  );
};

export default Home;
