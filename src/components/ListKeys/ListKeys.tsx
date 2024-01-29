import { useContext, useEffect, useState } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { Feather } from '@expo/vector-icons';
import { Button } from "@components/Button/Button";
import { getListKeys } from "utils/storageData";
import * as Clipboard from 'expo-clipboard'
import GeneratePasswordContext from "providers/useGeneratePassword";


export const ListKeys = () => {
  const [keys, setKeys] = useState<string[]>([])
  const [showMyPasswords, setShowMyPasswords] = useState<boolean>(false)
  const { updateMyList } = useContext(GeneratePasswordContext)

  useEffect(() => {
    getMyKeys()
  }, [updateMyList])

  const getMyKeys = async () => {
    const res  = await getListKeys()
    setKeys(res)
  }

  const handlerClick = async (password: string) => {
    await Clipboard.setStringAsync(password)
  }

  const renderItem = ({item}: {item: string}) => {
    return (
      <TouchableOpacity onPress={() => handlerClick(item)} style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
        <Text style={{color: 'white', fontSize: 24, marginBottom: 20}}>{item}</Text>
        <Feather name="copy" size={24} color="white" />
      </TouchableOpacity>
    )
  }
  
  return (
    <View style={{width: '100%', marginLeft: 20, alignItems: 'center'}}>
      <Button 
        onPress={() => setShowMyPasswords(!showMyPasswords)} 
        style={{
          width: '100%', 
          alignItems: 'center', 
          justifyContent: 'center', 
          flexDirection: 'row', 
          gap: 10, 
          padding: 20
        }}
        label='Mostrar minhas senhas salvas' 
        icon={
          <Feather 
            name={showMyPasswords ? 'eye' : 'eye-off'} 
            size={24} 
            color='white'
          />} 
        />
      {
        showMyPasswords && 
        <FlatList 
          data={keys}
          keyExtractor={i => i}
          style={{
            maxHeight: 300,
            width: '90%',
            paddingHorizontal: 20,
            marginTop: 30
          }}
          renderItem={renderItem}
        />
      }
    </View>
  )
}