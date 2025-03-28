import "@/styles/global.css";

import { ToastProvider } from "@/components/Toast";
import { AuthProvider } from "@/providers/AuthProvider";
import { FontProvider } from "@/providers/FontProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { PortalProvider as TamaguiPortalProvider } from "@tamagui/portal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLoading from "expo-app-loading";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import defaultConfig from "@tamagui/config/v3";
import { createTamagui, TamaguiProvider } from "tamagui";

const configTamagui = createTamagui(defaultConfig);

const queryClient = new QueryClient();
export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TamaguiProvider config={configTamagui}>
          <TamaguiPortalProvider>
            <ThemeProvider>
              <FontProvider>
                <ToastProvider position="top">
                  {/* <Profile /> */}
                  <Stack screenOptions={{ headerShown: false }} />

                  <StatusBar style="dark" />
                </ToastProvider>
              </FontProvider>
            </ThemeProvider>
          </TamaguiPortalProvider>
        </TamaguiProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
