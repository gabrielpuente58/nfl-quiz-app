import React from "react";
import { Pressable, Text, ViewStyle, TextStyle } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function Button({
  label,
  onPress,
  style,
  textStyle,
  leftIcon,
  rightIcon,
}: Props) {
  return (
    <Pressable style={style} onPress={onPress}>
      {leftIcon}
      <Text style={textStyle}>{label}</Text>
      {rightIcon}
    </Pressable>
  );
}
