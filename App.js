// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import AddBook from "./src/components/AdminControl/Books/AddBook";
import AddMembership from "./src/components/AdminControl/Books/AddMembership";
import AdminStats from "./src/components/AdminControl/Books/AdminStats";
import Books from "./src/components/AdminControl/Books/Books";
import AdminMembership from "./src/components/AdminControl/Membership/AdminMembership";
import Details from "./src/components/Details/Details";
import EditProfile from "./src/components/EditProfile/EditProfile";
import Header from "./src/components/Header/Header";
import Home from "./src/components/Home/Home";
import Login from "./src/components/Login/Login";
import OTP from "./src/components/Login/OTP";
import Password from "./src/components/Login/Password";
import Username from "./src/components/Login/Username";
import Membership from "./src/components/Membership/Membership";
import MembershipList from "./src/components/Membership/MembershipList";
import Profile from "./src/components/Profile/Profile";
import Publish from "./src/components/Publish/Publish";
import Register from "./src/components/Register/Register";
import RegisterOTP from "./src/components/Register/RegisterOTP";
import UserDetails from "./src/components/Register/UserDetails";
import Saved from "./src/components/Saved/Saved";
import Search from "./src/components/Search/Search";
import Stats from "./src/components/Stats/Stats";

export default function App() {
  const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="home" component={Home} />

        <Tab.Screen name="profile" component={Profile} />
      </Tab.Navigator>
  */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            fullScreenGestureEnabled: true,
            navigationBarHidden: false,
          }}
        />
        <Stack.Screen
          name="Header"
          component={Header}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="publish"
          component={Publish}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="saved"
          component={Saved}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="membership"
          component={Membership}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="adminbook"
          component={Books}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="bookadd"
          component={AddBook}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="addmembership"
          component={AddMembership}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="adminmembership"
          component={AdminMembership}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="otp"
          component={OTP}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="adminstats"
          component={AdminStats}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="registerotp"
          component={RegisterOTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="password"
          component={Password}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="editprofile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="membershiplist"
          component={MembershipList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="username"
          component={Username}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="userdetails"
          component={UserDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="details"
          component={Details}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="stats"
          component={Stats}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="search"
          component={Search}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
