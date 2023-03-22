import { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

export default function Motorista() {
    const [lista, setLista] = useState([]);
    const [busca, setBusca] = useState("");

    useEffect(() => {
        setInterval(()=> {
          listar();
    
        },[1500])
      })
     
    
      const listar = () => {
        fetch('http://localhost:3000/motoristas') 
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
                            if ( item.nome.includes(busca) || item.cpf.includes(busca) || item.cnh.includes(busca))
                                return (
                                    <View style={styles.item} key={index}>
                                        <Text style={styles.text}>ID : {item.id}</Text>
                                        <Text style={styles.text}>NOME : {item.nome}</Text>
                                        <Text style={styles.text}>CNH : {item.cnh}</Text>
                                        <Text style={styles.text}>CPF : {item.cpf}</Text>
                                        <Text style={styles.text}>STATUS : {item.status}</Text>
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