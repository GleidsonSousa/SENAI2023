import { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Operacao({ navigation }) {
    const [lista, setLista] = useState([]);
    const [busca, setBusca] = useState("");

    useEffect(() => {
        setInterval(()=> {
          listar();
    
        },[2500])
      })
     
    //   const finalizar = (id) => {
    // const hoje = new Date()
    // const dia = hoje.getDate().toString().padStart(2,'0')
    // const mes = String(hoje.getMonth() + 1).padStart(2,'0')
    // const ano = hoje.getFullYear()
    // const dataAtual = `${ano}-${mes}-${dia}T10:53:02.654Z`
    // let body = {
    //     'data_retorno': `${dataAtual}`
    // }
    // const options = {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    // }
    // options.body = JSON.stringify(body)
    // console.log(body)
    // if (body.data_retorno.length > 0) {
    //     fetch('http://localhost:3000/operacao/final/'+id, options)
    //         .then(resp => resp.status)
    //         .then(data => {
    //             if (data == 200) {
    //                 alert('Finalizado com SUCESSO! 😀✔')
    //                 setTimeout(() => { window.location.reload() }, 1500);
                    
    //             } else {
                    
    //             }
    //         })
    // } else {
    //     alert("Preencha todos os campos obrigatórios ❗")
    // }

    //   }
    
      const listar = () => {
        fetch('http://localhost:3000/operacao') 
          .then(Response => { return Response.json() })
          .then(data => {
            setLista(data);

          })
      }
    

    return (

        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={(val) => { setBusca(val) }} placeholder="Digite para buscar..." placeholderTextColor={"#00000077"} />
            <ScrollView>
                <View style={styles.lista}>
                    {
                        lista.map((item, index) => {
                            if(item.data_retorno != null){
                                // document.querySelector('#btn') = style={display}
                            }
                            if ( item.motorista.nome.includes(busca) || item.veiculo.placa.includes(busca) || item.data_saida.includes(busca) || item.data_retorno.includes(busca) || item.disponibilidade.includes(busca))
                                return (
                                    <View style={styles.item} key={index}>
                                        <Text style={styles.text}>ID : {item.id}</Text>
                                        <Text style={styles.text}>MOTORISTA : {item.motorista.nome}</Text>
                                        <Text style={styles.text}>VEÍCULO : {item.veiculo.placa}</Text>
                                        <Text style={styles.text}>SAÍDA : {item.data_saida.slice(0,10)}</Text>
                                        <Text style={styles.text}>RETORNO : {item.data_retorno != null ? item.data_retorno.slice(0,10) : "Em execução..." }</Text>
                                        <Text style={styles.text}>DESCRIÇÃO: {item.descricao}</Text>
                                        <View key={index}>

                                        <TouchableOpacity style={styles.button} id={'btn'} onPress={{}
                                            }>

                                            <Text style={styles.textButton}>Finalizar</Text>
                                        </TouchableOpacity>
                                        </View>
                                        
                                    </View>
                                )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#505050',
        alignItems: 'center',
    },
    input: {
        width: '90%',
        paddingHorizontal: '12px',
        paddingVertical: '12px',
        backgroundColor: '#EFEFEF',
        outlineStyle: 'none',
        border: 'none',
        borderRadius: '5px',
        marginVertical: '10px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 16,
    },
    lista: {
        width: '100vw',
        alignItems: 'center'
    },
    item: {
        width: '90%',
        marginVertical: '5px',
        borderRadius: '5px',
        borderRadius: '5px',
        marginBottom: '10px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 16,
        padding: 15,
    },
    linha: {
        width: '100%',
        height: '1px',
        backgroundColor: '#8a66fa',
        marginTop: '15px',
    },
    text: {
        color: '#EFEFEF',
    },
    button: {
        width: '75%',
        marginTop:'15px',
        marginLeft: '40px',
        backgroundColor: '#ffff',
        paddingHorizontal: '12px',
        paddingVertical: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
    },
    textButton: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#000',
    }
});