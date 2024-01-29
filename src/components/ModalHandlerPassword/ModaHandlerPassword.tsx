import { Button } from "@components/Button/Button"
import React, { FC, useContext } from "react"
import { Modal, ModalProps, Text, View, useWindowDimensions } from "react-native"
import { Feather } from '@expo/vector-icons';
import { S } from './styles'
import GeneratePasswordContext from "providers/useGeneratePassword";
import * as Clipboard from 'expo-clipboard';
import { saveData } from "utils/storageData";


interface ModalHandlerPasswordProps extends ModalProps {}

export const ModalHandlerPassword: FC<ModalHandlerPasswordProps> = () => {
  const { width: WIDTH_SCREEN } = useWindowDimensions()
  const HEIGHT_MODAL = 200
  const { password, setPassword, updateList } = useContext(GeneratePasswordContext)

  const onClose = () => {
    setPassword('')
  }

  const onSave = async () => {
    await Clipboard.setStringAsync(password)
    saveData(password)
    updateList()
    setPassword('')
  }

  return(
    <Modal animationType="slide" transparent={true} visible={!!password}>
      <View style={[{
        height: HEIGHT_MODAL,
        top: (WIDTH_SCREEN / 2) + (HEIGHT_MODAL / 2)
        }, S.modalContainer]}>
        <Text style={S.text}>{password}</Text>
        <View style={S.buttonContainer}>
          <Button 
            onPress={onClose}
            style={S.buttonModal}
            icon={<Feather name="trash-2" size={24} color="black" />}
            label={<Text style={S.labelButton}>Descartar</Text>}
          />

          <Button 
            onPress={onSave}
            style={S.buttonModal}
            icon={<Feather name="save" size={24} color="black" />}
            label={<Text style={S.labelButton}>Copiar e Salvar</Text>}
          />
        </View>
      </View>
    </Modal>
  )
}