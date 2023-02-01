import { useState, useEffect, } from 'react';
import { View, Text ,StyleSheet,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Cadastro({ navigation }) {
    const [descricao, setDescricao] = useState("");
    const [horario, setHorario] = useState("");

    return(
        <View>
           <TextInput style={styles.input} placeholder="Descrição" placeholderTextColor={"#00000077"} onChangeText={(val) => setPet(val)}/>
            <TextInput style={styles.input} placeholder="Horário" placeholderTextColor={"#00000077"} onChangeText={(val) => setMedico(val)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        padding: '5vw',
        alignItems: 'center',
        gap: '20px',
        backgroundColor: '#505050'
    },
    input: {
        width: '75%',
        paddingHorizontal: '12px',
        paddingVertical: '12px',
        backgroundColor: '#EFEFEF',
        outlineStyle: 'none',
        border: 'none',
        borderRadius: '5px',
    },
    button: {
        width: '75%',
        backgroundColor: '#8a66fa',
        paddingHorizontal: '12px',
        paddingVertical: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
    },
    textButton: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#EFEFEF',
    }
});