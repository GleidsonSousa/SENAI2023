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

    },[1500])
  })
 

  const listarPedidos = () => {
    // Falta colocar a rota aqui 
    fetch('http://localhost:4500/read/vw_cozinha') 
      .then(Response => { return Response.json() })
      .then(data => {
        setPedidos(data);

      })
  }

  // Essa é pra atualisar se foi entregue ou não !!
 
  function getRandomArbitrary(max,min) {
    max = 5;
    min = 1;
  return parseInt(Math.random() * (max - min) + min)
}

const enviarPedido = (id_pedido) => {
  const body = {
    "id_pedido":id_pedido,
    "entregador":getRandomArbitrary()
}
const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' }
};
options.body = JSON.stringify(body);
  fetch('http://localhost:4500/pedidos/update-entregador',options)
  .then(response => {
    if(response.status === 200) {
      console.log("Pedido Enviado");
      alert("Pedido Enviado 😀✔.")
      listarPedidos();
    }else {
      console.log(response.status);
    }
  })
}

  return (
    <View style={styles.container}>
      <View>
        <Text>Cozinha</Text>
        <Text style={styles.text} >Em execução</Text>
      </View>

      
        <ScrollView>
          {
            pedidos.map((pedido, index) => {
              return (
                <View style={styles.cardCozinha} key={index}>
                  <Text>ID:  {pedido.id_pedido}</Text>
                  <Text>Cliente : {pedido.cliente}</Text>
                  <Text>Produto : { pedido.produto}</Text>
                  <Text>Endereço : { pedido.endereco}</Text>
                  <Text>Data : { pedido.data}</Text>
                  <Text>Horario : {pedido.hora_pedido }</Text>
                  <TouchableOpacity style={styles.btnEnvia} onPress={() => {enviarPedido(pedido.id_pedido)}}>
                    <Text style={styles.text2} >Enviar entrega</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          }

        </ScrollView>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  },
  cardCozinha:{
    backgroundColor:'#FFF5EE',
    padding:10,
    margin:30,
    borderRadius:'14px'
  },
  btnEnvia:{
    padding:10,
    margin:10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:'14px',
    backgroundColor:"#7FFFD4"
  },
  text:{
    marginTop:10,
    fontWeight:'bold',
    fontSize:'30px',
  },
  text2:{
    fontWeight:'bold',
    fontSize:'20px',
  },
});
