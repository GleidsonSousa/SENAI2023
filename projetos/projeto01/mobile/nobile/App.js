import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


// Essa função é pra listar os pedidos!!
export default function App() {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    setInterval(()=> {
      console.log("Atualisar Lista")
      listarPedidos();
    },1500)
  })
 
  const listarPedidos = () => {
    // Falta colocar a rota aqui 
    fetch('') 
      .then(Response => { return Response.json() })
      .then(data => {
        setPedidos(data);
      })
  }

  // Essa é pra atualisar se foi entregue ou não !!
 
const enviarPedido = (id_pedido) => {
  // Falta colocar a rota aqui 
  fetch('' + id_pedido,
  {
    "method":"PUT"
  })
  .then(response => {
    if(response.status === 200) {
      console.log("Pedido Enviado");
      listarPedidos();
    }else {
      console.log(response.status);
    }
  })
}

  return (
    <View style={styles.container}>
      <View>
        <Text>Cosinha</Text>
      </View>
      <View>
        <Text>Em execução</Text>
        <ScrollView>
          {
            pedidos.map((pedido, index) => {
              return (
                <View>
                  <Text>id : ${ }</Text>
                  <Text>Cliente : ${ }</Text>
                  <Text>Produto : ${ }</Text>
                  <Text>Endereço : ${ }</Text>
                  <Text>Data : ${ }</Text>
                  <Text>Horario : ${ }</Text>
                  <TouchableOpacity onPress={() => { }}>
                    <Text>Enviar entrega</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          }

        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
