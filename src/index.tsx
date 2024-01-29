import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@components/Button/Button';
import { ModalHandlerPassword } from '@components/ModalHandlerPassword/ModaHandlerPassword';
import { SizeSlider } from '@components/SizeSlider/SizeSlider';
import { useContext } from 'react';
import GeneratePasswordContext from 'providers/useGeneratePassword';
import { ListKeys } from '@components/ListKeys/ListKeys';

export default function AppMain() {
  const { generateString } = useContext(GeneratePasswordContext)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ModalHandlerPassword />
      <Text style={styles.title}>Gerador de Senha</Text>
      <SizeSlider />
      <Button label='Gerar Senha' onPress={generateString} />
      <ListKeys />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ddd',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
