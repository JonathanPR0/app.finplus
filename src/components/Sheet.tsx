import { Sheet } from "@tamagui/sheet";
import React, { memo, ReactElement } from "react";
import { StyleProp } from "react-native";
import { ViewStyle } from "tamagui";

const spModes = ["percent", "constant", "fit", "mixed"] as const;

export function SheetComponent({
  open,
  setOpen,
  children,
  style,
}: {
  open: boolean;
  setOpen: (bool: boolean) => void;
  children: ReactElement;
  style?: StyleProp<ViewStyle>;
}) {
  const [position, setPosition] = React.useState(0);

  return (
    <Sheet
      forceRemoveScrollEnabled={open}
      modal={true}
      open={open}
      onOpenChange={setOpen}
      snapPointsMode={"fit"}
      dismissOnSnapToBottom
      position={position}
      onPositionChange={setPosition}
      zIndex={100_000}
      animation="medium"
    >
      <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />

      <Sheet.Handle />
      <SheetContents style={style} children={children} />
    </Sheet>
  );
}

// in general good to memoize the contents to avoid expensive renders during animations
const SheetContents = memo(({ children, style }: { children: any; style?: StyleProp<any> }) => {
  return (
    <Sheet.Frame
      flex={1}
      justifyContent="center"
      alignItems="center"
      gap="$2"
      padding={"$4"}
      style={style}
    >
      <Sheet.ScrollView>{children}</Sheet.ScrollView>
    </Sheet.Frame>
  );
});
