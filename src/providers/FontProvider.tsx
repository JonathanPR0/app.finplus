import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const FontContext = createContext({});
export function FontProvider({ children }: { children: any }) {
  const [loaded, error] = useFonts({
    "Poppins-Black": require("@/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("@/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("@/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("@/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Italic": require("@/fonts/Poppins-Italic.ttf"),
    "Poppins-Light": require("@/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("@/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("@/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("@/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("@/fonts/Poppins-Thin.ttf"),
  });

  if (!loaded && !error) {
    return (
      <View>
        <Text>Carregando fontes...</Text>
        <ActivityIndicator />
      </View>
    );
  }

  return <FontContext.Provider value={{ loaded }}>{children}</FontContext.Provider>;
}

export function useFont() {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
}
