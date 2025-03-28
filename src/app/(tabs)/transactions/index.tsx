import { SheetComponent } from "@/components/Sheet";
import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Paragraph } from "tamagui";
import HeaderLancamentos from "./components/HeaderLancamentos";

export default function LancamentosTab() {
  //   const provider = useAuthProvider();
  // console.log("DATA", process.env.EXPO_PUBLIC_API_URL);
  const [open, setOpen] = React.useState(false);

  return (
    <SafeAreaView className="flex-1 bg-background text-foreground">
      <ScrollView
        style={{
          paddingBottom: 80,
        }}
        className="px-3"
      >
        <HeaderLancamentos />

        <SheetComponent open={open} setOpen={setOpen}>
          <>
            <Text>HELLO WORLD</Text>
            {[1, 2, 3].map((i) => (
              <Paragraph key={i} size="$2">
                Eu officia sunt ipsum nisi dolore labore est laborum laborum in esse ad pariatur.
                Dolor excepteur esse deserunt voluptate labore ea. Exercitation ipsum deserunt
                occaecat cupidatat consequat est adipisicing velit cupidatat ullamco veniam aliquip
                reprehenderit officia. Officia labore culpa ullamco velit. In sit occaecat velit
                ipsum fugiat esse aliqua dolor sint.
              </Paragraph>
            ))}
          </>
        </SheetComponent>
      </ScrollView>
    </SafeAreaView>
  );
}
