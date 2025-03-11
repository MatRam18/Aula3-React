import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Placa_mae() {
  return (
    <View style={styles.container}>
      <Text>PLACA MAE</Text>
      <Image style={styles.img} source={require('../assets/placaM.jpg')}/>
      <Text style={styles.Tplaca}>A placa-mãe é o componente central do computador que conecta e 
        permite a comunicação entre todos os outros hardwares.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Tplaca: {
    padding: 40,
  },
});
