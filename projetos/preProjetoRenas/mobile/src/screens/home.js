import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


const motorista = require("../../assets/motorista.png");
const veiculo = require("../../assets/veiculo.png");
const manutencao = require("../../assets/manutencao.png");
const operacao = require("../../assets/op.png");


export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.cards}>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Historico")}>
                    <Image style={styles.image} source={motorista}/>
                    <Text style={styles.text}>Histórico de Mostoristas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Historico")}>
                    <Image style={styles.image} source={veiculo}/>
                    <Text style={styles.text}>Histórico de Veiculos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Historico")}>
                    <Image style={styles.image} source={operacao}/>
                    <Text style={styles.text}>Histórico de operção</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Registro")}>
                    <Image style={styles.image} source={manutencao}/>
                    <Text style={styles.text}>Histórico de manutenção</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: '5vw',
        backgroundColor: '#505050'
    },
    cards: {
        flexDirection: 'row',
        gap: '5vw',
        flexWrap: 'wrap',
    },
    card: {
        width: '42.5vw',
        height: '45.5vw',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        backgroundColor: '#E5E5E5',
        borderRadius: '20px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.40,
        shadowRadius: 26.00,
        elevation: 24,
    },
    image: {
        width: '70px',
        height: '70px',
    },
    text: {
        fontWeight: 'bold',
        color: "#000",
    }
});