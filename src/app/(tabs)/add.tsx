import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeTab() {
  //   const provider = useAuthProvider();
  // console.log("DATA", process.env.EXPO_PUBLIC_API_URL);

  return (
    <SafeAreaView className="flex-1 bg-background text-foreground">
      <ScrollView>
        <View className="flex-1 min-h-full">
          <Text className="text-3xl text-center font-semibold text-foreground mt-10 font-psemibold">
            HOME
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
