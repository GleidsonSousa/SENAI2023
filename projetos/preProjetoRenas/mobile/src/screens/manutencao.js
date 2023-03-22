import { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Manutencao({ navigation }) {
    const [lista, setLista] = useState([]);
    const [busca, setBusca] = useState("");

    useEffect(() => {
        setInterval(()=> {
          listar();
    
        },[1500])
      })
     
    
      const listar = () => {
        fetch('http://localhost:3000/manutencao') 
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
                            if ( item.veiculo.placa.includes(busca) || item.data_inicio.includes(busca) )
                                return (
                                    <View style={styles.item} key={index}>
                                        <Text style={styles.text}>ID : {item.id}</Text>
                                        <Text style={styles.text}>VEÍCULO : {item.veiculo.placa}</Text>
                                        <Text style={styles.text}>INÍCIO : {item.data_inicio.slice(0,10)}</Text>
                                        <Text style={styles.text}>FIM : {item.data_fim != null ? item.data_fim.slice(0,10) : "Em andamento..."}</Text>
                                        <Text style={styles.text}>DESCRIÇÃO: {item.descricao}</Text>
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
    }
});