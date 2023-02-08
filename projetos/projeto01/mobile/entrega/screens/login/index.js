import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const autenticar = () => {
        fetch("http://localhost:4500/entregadores/login", {
            "method":"POST",
            "headers":{
                "Content-Type": "application/json"
            },
            "body":JSON.stringify({
                "email":email,
                "senha":senha
            })
        })
        .then(response => {return response.json(); })
        .then(data => {
            if(data.length > 0) {
                navigation.navigate("Home", {
                    "id":data[0].id,
                    "nome":data[0].nome
                })
            }else {
                console.log("LOGIN INVALIDO")
            }
        })

    }

    return(
        <View style={styles.container}>
            <Text style={styles.login}>LOGIN</Text>
            <View style={styles.container2}>
                <TextInput style={styles.Inp} value={email} onChangeText={(val) => { setEmail(val); }}  placeholder={" Email..."}/>
                <TextInput style={styles.Inp} value={senha} onChangeText={(val) => { setSenha(val); }} placeholder={" Senha..."}/>
                <TouchableOpacity onPress={() => { autenticar(); }}>
                    <Text>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    container2: {
        marginTop:'20%',
        gap:'5%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
    login: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '20px',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#000',
        width: '100%',
        height: '5%',
      },
      Inp: {
        padding: '10px',
        border: '1px solid',
        borderRadius: '15px',
        borderColor: '#000',
        fontSize: '20px',
        width: '100%',
        height: '5%',
      },
  });