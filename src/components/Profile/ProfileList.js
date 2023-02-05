import { View, Text } from "react-native";
import React, { useState } from "react";
import UserList from "./UserList";
import Admin from "./Admin";

const ProfileList = () => {
  const [user, setUser] = useState(false);
  return <View>{user ? <UserList /> : <Admin />}</View>;
};

export default ProfileList;
