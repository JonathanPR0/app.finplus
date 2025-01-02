import React, { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { Button } from "@/components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SplashScreen, useRouter } from "expo-router";
import { configureReanimatedLogger, ReanimatedLogLevel } from "react-native-reanimated";

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});
export default function Index() {
  const router = useRouter();
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem("token");

      // Se o usuário estiver logado, navega para a tela inicial
      if (token) {
        router.push("/home");
      }
    };

    checkLoginStatus();
  }, [router]);

  return (
    <View className="flex-1 bg-slate-100 p-6 ">
      <ScrollView>
        <View className="flex gap-4 bg-slate-200 pt-8 pb-10 rounded-3xl mt-14">
          <Text className="text-4xl font-bold w-full text-center text-green-950">FinPlus</Text>
          <Image source={require("@/assets/home.png")} className="w-full h-[400px]" />
        </View>

        <View className="flex gap-3 flex-1 h-full">
          <Text className="text-green-950 font-semibold text-xl text-center pt-8 pb-5 max-w-80 mx-auto">
            Melhor forma de controlar suas finanças
          </Text>
          <Button
            label="Entrar"
            labelClasses="text-green-950"
            onPress={() => router.push("/sign-in")}
          />
          {/* <Button
            label="Criar Conta"
            className="border-2 border-primary bg-transparent"
            labelClasses="text-green-950"
            onPress={() => router.push("/sign-up")}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
}
