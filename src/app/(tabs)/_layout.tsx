import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import React from "react";
import { TouchableOpacity, useWindowDimensions, View } from "react-native";
import { SheetAddComponent } from "./components/SheetAddComponent";
import { useAddStore } from "./store";

type IconName = keyof typeof Ionicons.glyphMap;
const TabIcon = ({ color, icon }: { color: string; name: string; icon: IconName }) => {
  return (
    <View className="flex items-center justify-center mb-[-20px]">
      <Ionicons name={icon} size={24} color={color} />
    </View>
  );
};
export default function TabsLayout() {
  const { width } = useWindowDimensions();
  const tabBarWidth = Math.min(width * 0.9, 400); // 90% da largura da tela, máximo 400px

  const { colorScheme } = useColorScheme();

  const setOpenAddSheet = useAddStore().setOpen;

  const isDark = colorScheme === "dark";
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#AEE66B",
          tabBarInactiveTintColor: isDark ? "#CDCDE0" : "#888888",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 14,
            left: (width - tabBarWidth) / 2,
            backgroundColor: isDark ? "#161622" : "#FFFFFF",
            borderTopColor: isDark ? "#232533" : "#E0E0E0",
            height: 60,
            elevation: 0,
            borderRadius: 16,
            paddingVertical: 10,
            paddingHorizontal: 8,
            alignItems: "center",
            justifyContent: "center",
            borderTopWidth: 0,
            marginHorizontal: (width - tabBarWidth) / 2,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={focused ? "home" : "home-outline"} color={color} name="Home" />
            ),
          }}
        />
        <Tabs.Screen
          name="transactions"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={focused ? "list" : "list-outline"} color={color} name="Cadastros" />
            ),
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            headerShown: false,
            tabBarButton: (props) => (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setOpenAddSheet(true)}
                className="items-center justify-center bg-primary rounded-3xl "
                style={{ marginTop: -12, width: 56, height: 56, marginHorizontal: "auto" }} // Para centralizar na tab bar
              >
                <Ionicons
                  name="add-circle-outline"
                  size={28}
                  color="#FFFFFF"
                  style={{ marginHorizontal: "auto" }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="dashboard"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused ? "podium" : "podium-outline"}
                color={color}
                name="Dashboard"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={focused ? "person-circle" : "person-circle-outline"}
                color={color}
                name="Profile"
              />
            ),
          }}
        />
      </Tabs>

      {/* <Loader isLoading={loading} /> */}
      <SheetAddComponent />
      <StatusBar style={colorScheme} />
    </>
  );
}
