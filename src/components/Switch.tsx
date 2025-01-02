import { Switch as NativeSwitch } from "react-native";

import { colors } from "@/styles/colors";

function Switch({ ...props }: React.ComponentPropsWithoutRef<typeof NativeSwitch>) {
  return (
    <NativeSwitch
      trackColor={{
        true: colors.secondary,
        false: colors.primary,
      }}
      thumbColor={colors.primary}
      {...props}
    />
  );
}

export { Switch };
