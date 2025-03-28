import { useTheme } from "@/providers/ThemeProvider";
import { ChevronRight } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ButtonRedirect({
  icon: Icon,
  label,
  href,
}: {
  icon: any;
  label: string;
  href: string;
}) {
  //   const provider = useAuthProvider();
  // console.log("DATA", process.env.EXPO_PUBLIC_API_URL);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const router = useRouter(); // Inicializa o router
  return (
    <TouchableOpacity
      className={"flex justify-between p-4 flex-row"}
      activeOpacity={0.7}
      onPress={() => router.push(href)}
    >
      <View className="flex gap-5 flex-row text-primary">
        <Icon size={25} color={isDark ? "#CDCDE0" : "#888888"} />
        <Text className="text-lg font-medium text-foreground">{label}</Text>
      </View>
      <ChevronRight size={25} color={isDark ? "#CDCDE0" : "#888888"} />
    </TouchableOpacity>
  );
}
