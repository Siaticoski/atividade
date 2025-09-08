import { StatusBar } from 'expo-status-bar';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Lista de Compras</Text>
      <View style={styles.centro}>
        <View style={styles.base}>
            <TextInput style={styles.digite}>digite o produto</TextInput>
            <TouchableOpacity style={styles.plus}>
            <AntDesign  name="pluscircleo" size={40} color="#9400D3" />
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9400D3',
    alignItems: 'center',
    textAlign: 'left',
    flexDirection: 'column',
    paddingTop: 50,
  },
  texto:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  digite: {
    backgroundColor: 'black',
    color: 'white',
    width: '90%',
    borderRadius: 10,
    fontSize: 25,
  },
  plus: {
    backgroundColor:'black',
    width: 55,
    height: 55,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  centro:{
    width: '80%',
    textAlign: 'center',
    gap: 20,
  },
  base: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
  
});
