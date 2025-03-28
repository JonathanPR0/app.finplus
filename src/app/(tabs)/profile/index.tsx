import { useTheme } from "@/providers/ThemeProvider";
import {
  Contact,
  CreditCard,
  Landmark,
  LayoutGrid,
  Package,
  User,
  Wallet,
} from "@tamagui/lucide-icons";
import React from "react";
import { ScrollView, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonRedirect from "./components/ButtonRedirect";

export default function Profile() {
  //   const provider = useAuthProvider();
  // console.log("DATA", process.env.EXPO_PUBLIC_API_URL);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <SafeAreaView className="flex-1 bg-background text-foreground">
      <ScrollView>
        <TouchableHighlight
          className="w-32 h-32 bg-input rounded-full mx-auto my-5 items-center justify-center"
          onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <User size={40} className="text-opacity-10" />
        </TouchableHighlight>

        <ButtonRedirect icon={Landmark} label="meus bancos" href="/profile/banks" />
        <ButtonRedirect
          icon={Wallet}
          label="minhas contas bancárias"
          href="/profile/bank-accounts"
        />
        <ButtonRedirect icon={CreditCard} label="meus cartões" href="/profile/cards" />
        <ButtonRedirect icon={LayoutGrid} label="minhas categorias" href="/profile/categories" />
        <ButtonRedirect icon={Package} label="meus fornecedores" href="/profile/suppliers" />
        <ButtonRedirect icon={Contact} label="meus clientes" href="/profile/clients" />
      </ScrollView>
    </SafeAreaView>
  );
}
