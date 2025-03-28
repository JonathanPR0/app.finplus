import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

export default function HeaderLancamentos() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const isDark = colorScheme === "dark";
  return (
    <View className="flex-row justify-between items-center py-2 px-4">
      <Text className="text-lg font-medium text-foreground">Lançamentos</Text>
      <View className="gap-1 flex-row">
        <TouchableHighlight className="rounded-full p-3">
          <Ionicons name="funnel-outline" size={18} color={"#fff"} />
        </TouchableHighlight>
        <TouchableHighlight className="rounded-full p-3">
          <Ionicons name="search-outline" size={18} color={"#fff"} />
        </TouchableHighlight>
      </View>
    </View>
  );
}
