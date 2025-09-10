import { StatusBar } from 'expo-status-bar';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ListRenderItem, FlatList} from 'react-native';
import { useState } from 'react';
type Produto = {
  id: string,
  nome: string,
  comprado: boolean,
};




export default function App() {
  const [produto, setProduto] = useState<string>('');
  const [lista, setLista] = useState<Produto[]>([
    {id: '1', nome: 'Maça', comprado: true},
    {id: '2', nome: 'Banana', comprado: true},
    {id: '3', nome: 'Melancia', comprado:true},
  ]);

  const adicionarProduto = () => {
    if (produto.trim() === '') return; {
      
      const novoProduto: Produto = {
        id: Date.now().toString(),
        nome: produto,
        comprado: false,
      };

      setLista([...lista, novoProduto]);
      setProduto('');
    };
  }

  const alternarProduto = (id: string) => {
    const novaLista = lista.map((item) => 
      item.id === id ? { ...item, comprado: !item.comprado} : item
    );
    setLista(novaLista);
      
  }

  const rederItem: ListRenderItem<Produto> = ({item}) => (
    <TouchableOpacity style={styles.alinhar} onPress={() => alternarProduto(item.id)}>
      <AntDesign name="checkcircle" size={30} color="black" />
      <Text style = {styles.produtos}>{item.nome}</Text>
    </TouchableOpacity>

  )

  return (
    <View style={styles.container}>
      
      <View style={styles.centro}>
        <Text style={styles.texto}>Lista de Compras</Text>
        <View style={styles.base}>
          <TextInput
            style={styles.digite}
            placeholder='Digite o Produto'
            placeholderTextColor="#FFFFFF"
            value={produto}
            onChangeText={setProduto}
          />
          <TouchableOpacity style={styles.plus} onPress={adicionarProduto}>
            <AntDesign  name="pluscircleo" size={40} color="#9400D3" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.lista}>
        <FlatList
          data={lista}
          renderItem={rederItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9400D3',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    paddingTop: 50,
    gap: 10
  },
  texto:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  digite: {
    backgroundColor: 'black',
    color: 'white',
    width: '83%',
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
    width: '95%',
    alignItems: 'flex-start',
    gap: 10,
  },
  base: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
  lista:{
    borderColor: 'black',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
    borderBlockColor: 'black',
    borderRadius: 10,
    height: '80%',
    padding: 10
  },
  alinhar:{
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 370,
    paddingLeft: 10
  },
  produtos:{
    color: 'white',
    fontSize: 30,
  }
  
});
