import { useState } from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const dog = require("../../assets/panda.gif");

export default function Login({navigation}) {
    const [email, setEmail] = useState("carlinhos@orkut.com");
    const [senha, setSenha] = useState("1234");

    const handleLogin = () => {
        const uriLogin = 'http://localhost:3000/login';
      
        fetch(uriLogin, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, senha }),
        })
          .then((response) => response.json())
          .then((data) => {

                if (data.validation == true) {
                    navigation.navigate('Home');
                  } else if(data.erro == "Usuário não encontrado") {
                    alert('Erro ao fazer login. Por favor, verifique o Email digitado.');
                  } else if(data.erro == "Senha inválida"){
                      alert('Erro ao realizar login. Verifique a Senha digitada.')
                  }            
            
          })
          .catch((error) => {
            console.error(error);
          });
      };

    return (
        <View style={styles.container}>
            <Image style={styles.dog} source={dog} />
            <TextInput style={styles.input} onChangeText={(val) => {setEmail(val)}} placeholder="Informe o email" placeholderTextColor={"#00000077"} />
            <TextInput style={styles.input} onChangeText={(val) => {setSenha(val)}} secureTextEntry={true} placeholder="Informe sua senha" placeholderTextColor={"#00000077"} />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.textButton}>Conectar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        backgroundColor: '#505050'
    },
    dog: {
        width: '200px',
        height: '200px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 3.00,
        elevation: 24,
    },
    input: {
        width: '75%',
        paddingHorizontal: '12px',
        paddingVertical: '12px',
        backgroundColor: '#EFEFEF',
        outlineStyle: 'none',
        border: 'none',
        borderRadius: '5px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 16,
    },
    button: {
        width: '75%',
        backgroundColor: '#8A66FA',
        paddingHorizontal: '12px',
        paddingVertical: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 16,
    },
    textButton: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#EFEFEF',
    }
});