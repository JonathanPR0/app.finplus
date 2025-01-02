import { MaterialIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Text, TextProps, View } from "react-native";

import { colors } from "@/styles/colors";

interface OptionProps {
  children: ReactNode;
}

interface IconProps {
  icon: keyof typeof MaterialIcons.glyphMap;
}

function Option({ children }: OptionProps) {
  return (
    <View className="w-full flex-row items-center gap-2 border-b border-gray-500 py-3">
      {children}
    </View>
  );
}

function Icon({ icon }: IconProps) {
  return <MaterialIcons name={icon} size={20} color={colors.foreground} />;
}

function Title({ ...rest }: TextProps) {
  return <Text className="text-foreground text-lg flex-1" {...rest} />;
}

Option.Title = Title;
Option.Icon = Icon;

export { Option };
