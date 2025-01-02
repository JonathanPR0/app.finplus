import { useEffect, useState } from "react";
import { View } from "react-native";

import { Checkbox } from "@/components/Checkbox";
import { Option } from "@/components/Option";
import { Switch } from "@/components/Switch";
import { Title } from "@/components/Title";
import { useTheme } from "@/providers/ThemeProvider";

export function Preferences() {
  const [isEnabled, setIsEnabled] = useState(true);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme(isEnabled ? "dark" : "light");
  }, [isEnabled]);
  return (
    <View className="w-full">
      <Title className="text-foreground">Preferences: {theme}</Title>

      <Option>
        <Option.Icon icon="dark-mode" />
        <Option.Title>Dark mode</Option.Title>
        <Switch onValueChange={() => setIsEnabled((prev) => !prev)} value={isEnabled} />
      </Option>

      <Option>
        <Option.Icon icon="email" />
        <Option.Title>Public email</Option.Title>
        <Checkbox />
      </Option>
    </View>
  );
}
