import Checkbox from "expo-checkbox"
import { FC } from "react"
import { Text, View } from "react-native"

interface CheckButtonProps {
  label: string
}

export const CheckButton: FC<CheckButtonProps> = ({ label }) => {
  return (
    <View>
      <Text>{label}</Text>
      <Checkbox />
    </View>
  )
}