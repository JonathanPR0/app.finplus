import { useTheme } from "@/providers/ThemeProvider";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BankAccounts() {
  //   const provider = useAuthProvider();
  // console.log("DATA", process.env.EXPO_PUBLIC_API_URL);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <SafeAreaView className="flex-1 bg-background text-foreground">
      <ScrollView>
        <View className="flex-1 min-h-full">
          <Text className="text-3xl text-center font-semibold text-foreground mt-10 font-psemibold">
            CONTAS BANCÁRIAS
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
