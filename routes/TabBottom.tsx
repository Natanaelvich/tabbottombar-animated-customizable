import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { AddButton } from "../components/AddButton";

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#2B3654",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StatusBar style="auto" />
    </View>
  );
}

const RouteName = {
  TabsBookmarks: "TABS_BOOKMARKS",
  TabsLikes: "TABS_LIKES",
  TabsPrivate: "TABS_PRIVATE",
  TabsProfile: "TABS_PROFILE",
  OtherScreen: "OTHER_SCREEN",
};

export default function TabBottom() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // hide labels
        tabBarActiveTintColor: "#F8F8F8", // active icon color: ;
        tabBarInactiveTintColor: "#586589", // inactive icon color: ;
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#171F33", // TabBar background
        },
      }}
    >
      <Tab.Screen
        name={RouteName.TabsBookmarks}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.TabsLikes}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.OtherScreen}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <AddButton />,
        }}
      />
      <Tab.Screen
        name={RouteName.TabsPrivate}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="lock" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.TabsProfile}
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
