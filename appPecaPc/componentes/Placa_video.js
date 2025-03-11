import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Placa_video() {
  return (
    <View style={styles.container}>
      <Text>PLACA DE VIDEO</Text>
      <Image style={styles.img} source={require('../assets/Rtx.jpg')}/>
      <Text style={styles.Mplaca}>A placa de vídeo é o hardware responsável 
        por processar e renderizar gráficos, melhorando o desempenho visual do computador.</Text>
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
  Mplaca: {
    padding: 40,
  },
});
