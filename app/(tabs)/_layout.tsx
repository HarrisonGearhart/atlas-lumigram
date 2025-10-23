import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import LogoutComponent from "@/components/LogoutComponent";

export default function TabLayout() {
  const colorScheme = useColorScheme(); // Determine current theme (light or dark)

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        headerTitleAlign: "left", // Align title to the left
        tabBarButton: HapticTab, // Apply haptic feedback for tab presses
        headerRight: () => <LogoutComponent />, // Logout button in header
        tabBarBackground: TabBarBackground, // Custom tab bar background
        tabBarStyle: Platform.select({
          ios: {
            // Transparent tab bar on iOS for blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      {/* Home Feed Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home Feed",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />

      {/* Search Tab */}
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "search" : "search-outline"}
              color={color}
            />
          ),
        }}
      />

      {/* Add Post Tab */}
      <Tabs.Screen
        name="addpost"
        options={{
          title: "Add Post",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "add" : "add-outline"}
              color={color}
            />
          ),
        }}
      />

      {/* Favorites Tab */}
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "heart" : "heart-outline"}
              color={color}
            />
          ),
        }}
      />

      {/* Profile Tab (default) */}
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "My Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />

      {/* Profile Tab (dynamic user ID, hidden from tab bar) */}
      <Tabs.Screen
        name="profile/[id]"
        options={{
          title: "My Profile",
          href: null, // Prevent this route from showing in the tab bar
        }}
      />
    </Tabs>
  );
}
