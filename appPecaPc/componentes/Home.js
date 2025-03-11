import { SafeAreaView,StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home(props) {
  return (
    <SafeAreaView style={styles.container}>
    
    <View style={styles.principal}>
      <Text style={styles.titulo}>Partes do computador</Text>
      <Text style={styles.subtitulo}>As partes mais importantes do computador</Text>
    </View>


    <View>
      <TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate('Placa_mae')}}>
        <Text style={styles.textbutton}>Placa Mãe</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>{props.navigation.navigate('Placa_video')}}>
        <Text style={styles.textbutton}>Placa de Video</Text>
      </TouchableOpacity>
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:30
  },
  subtitulo:{
    fontSize:15
  },
  button:{
    margin:10,
    padding:5,
    backgroundColor: '#add8e6',
    borderRadius:5,
    alignItems:'center'
  },
  textbutton:{
    fontSize:20
  },
  principal:{
    alignItems:'center',
    marginBottom: 50,
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#4f5a'
  }
});
