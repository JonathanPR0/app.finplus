import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  //   const provider = useAuthProvider();
  // console.log("DATA", process.env.EXPO_PUBLIC_API_URL);

  return (
    <SafeAreaView className="flex-1 bg-slate-200/50">
      <ScrollView>
        <View className="flex gap-4 px-4 pb-8 pt-14 rounded-3xl ">
          <Image
            source={require("@/assets/sign-in.png")}
            resizeMode="contain"
            className="w-full h-60 "
          />
        </View>

        <View className="flex-1 bg-slate-100 min-h-full">
          <Text className="text-3xl text-center font-semibold text-slate-800 mt-10 font-psemibold">
            HOME
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
