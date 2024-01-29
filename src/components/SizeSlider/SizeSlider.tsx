import Slider from '@react-native-community/slider';
import GeneratePasswordContext from 'providers/useGeneratePassword';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import { MAX_SIZE_PASSWORD, MIN_SIZE_PASSWORD } from 'utils/contants';


export const SizeSlider = () => {
  const { sizePassword, setSizePassword  } = useContext(GeneratePasswordContext)

  return (
    <View style={{marginVertical: 30}}>
      <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>Quantidade de caracteres {sizePassword}</Text>
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={MIN_SIZE_PASSWORD}
        maximumValue={MAX_SIZE_PASSWORD}
        minimumTrackTintColor="#800080"
        maximumTrackTintColor="#FFF"
        value={sizePassword}
        onValueChange={size => setSizePassword(+size.toFixed(0))}
      />
    </View>
  )
}