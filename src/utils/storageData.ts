
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MY_KEYS } from './contants';

const saveData = async (value: string) => {
  if(value === null) return
  try {
    const keysSaved = await AsyncStorage.getItem(MY_KEYS)
    const arr = keysSaved?.split(',')

    if(arr && arr?.length > 0) {
      const newKeys = [...arr, value].join(',')

      await AsyncStorage.setItem(MY_KEYS, newKeys);
    } else {
      await AsyncStorage.setItem(MY_KEYS, value);
    }
    
  } catch (e) {
    throw new Error('Error to save')
  }
}

const getListKeys = async () => {
  const listKeys = await AsyncStorage.getItem(MY_KEYS)

  if(listKeys) {
    const myKeys =  listKeys.split(',')
    return myKeys
  }
  return []
}

export  {
  getListKeys,
  saveData
}