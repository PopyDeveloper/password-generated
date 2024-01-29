import { FC, ReactNode } from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { S } from "./styles";

interface ButtonProps extends PressableProps {
  label?: string | ReactNode
  icon?: ReactNode 
}

export const Button: FC<ButtonProps> = ({ label, icon,  ...rest }) => {

  return (
    <Pressable style={S.button} {...rest}>
      {icon && icon}
      { 
        label && typeof label === 'string' ? (
          <Text style={S.label}>{label}</Text>
        ) : (
          label
        )
      }
    </Pressable>
  )
}