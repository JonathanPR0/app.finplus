import { SheetComponent } from "@/components/Sheet";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAddStore } from "../store";

export function SheetAddComponent() {
  const open = useAddStore().open;
  const setOpen = useAddStore().setOpen;
  const { colorScheme } = useColorScheme();

  const isDark = colorScheme == "dark";
  return (
    <SheetComponent
      open={open}
      setOpen={setOpen}
      style={{ backgroundColor: isDark ? "#232533" : "#E0E0E0" }}
    >
      <View className="flex flex-col gap-6 py-6">
        <Text className="text-2xl text-foreground dark:text-slate-100 text-center mb-4">
          O que você quer <Text className="font-medium">adicionar</Text>?
        </Text>
        <View className="flex flex-col gap-4">
          <TouchableOpacity
            className={"flex justify-between p-4 flex-row border border-success rounded-xl w-full"}
            activeOpacity={0.7}
          >
            <Text className="text-xl font-medium text-success">receita</Text>
            <Ionicons
              name={"add-circle-outline"}
              size={24}
              color={isDark ? "hsl(85 36% 45%)" : "hsl(85 36% 51%)"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            className={
              "flex justify-between p-4 flex-row border border-destructive rounded-xl w-full"
            }
            activeOpacity={0.7}
          >
            <Text className="text-xl font-medium text-destructive">despesa</Text>
            <Ionicons
              name={"remove-circle-outline"}
              size={24}
              color={isDark ? "hsl(0 89% 68%)" : "hsl(0 79% 59%)"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SheetComponent>
  );
}
