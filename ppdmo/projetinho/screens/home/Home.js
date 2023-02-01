import { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-web';


export default function Home({ navigation }) {
    const [tarefas, setTarefas] = useState([]);
    useEffect(() => {
        listarTarefas();
    }, [])

    const listarTarefas = () => {
        fetch("http://localhost:4500/tarefas/read")
        .then(response => {return response.json();})
        .then(data => {
            setTarefas(data);

            
        })
    }

    const CancelarTarefa = (id) => {
        fetch("http://localhost:4500/tarefas/update-cancelado/" + id, {
            "method":"PUT"
        })
        .then(response => {
            if(response.status === 200) {
                alert("Tarefa cancelada 😭✔ ");
                listarTarefas();
            }else {
                console.log(response.status);
            }
        })
    }

    const excluirTarefa = (id) => {
        fetch("http://localhost:4500/tarefas/delete/" + id, {
            "method":"DELETE"
        })
        .then(response => {
            if(response.status === 204) {
                alert("Tarefa deletada 💅 ✔");
                listarTarefas();
            }else {
                console.log(response.status);
            }
        })
    }

    const finalizarTarefa = (id) => {
        fetch("http://localhost:4500/tarefas/update-finalizado/" + id, {
            "method":"PUT"
        })
        .then(response => {
            if(response.status === 200) {
                alert("Tarefa concluída 🤠 ✔");
                listarTarefas();
            }else {
                console.log(response.status);
            }
        })
    }

    return(
        <View>
            <TouchableOpacity style={{}} onPress={() => navigation.navigate("Cadastro")}>
                            <Text style={{}}>Cadastro</Text>
                            </TouchableOpacity>
            {
                tarefas.map((tarefa, index) => {
                    if(tarefa.status ==  1){
                        tarefa.status ="Aberta"
                        return (
                    
                            
                            <View style={{display:'flex', margin:20,backgroundColor:"#A9A9A9", padding:10, borderRadius:"15px", }} key={index}>                               
                                <TouchableOpacity onPress={() => {
                                    excluirTarefa(tarefa.id_tarefa)
                                }}>
                                <Image  style={{width:34,height:34,marginLeft:"90%"}} source={{uri: "https://cdn-icons-png.flaticon.com/512/5510/5510213.png"}}/>
    
                                </TouchableOpacity>
                                <Text>ID : {tarefa.id_tarefa}</Text>
                                <Text>Descrição:  {tarefa.descricao}</Text>
                                <Text>Horário:  {tarefa.horario_tarefa}</Text>
                                <Text>Término:  {tarefa.horario_encerramento}</Text>
                                <Text>Status : {tarefa.status}</Text>
                                <TouchableOpacity style={{marginTop:10,height:30, backgroundColor:"#fff",alignItems:'center',justifyContent:'center', color:'#000'}} onPress={() => {
                                    finalizarTarefa(tarefa.id_tarefa);
                                }}>
                                    <Text>Concluir Tarefa </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginTop:10,height:30, backgroundColor:"#FA8072",alignItems:'center',justifyContent:'center',color:'#fff'}} onPress={() => {
                                    CancelarTarefa(tarefa.id_tarefa);
                                }}>
                                    <Text>Cancelar Tarefa </Text>
                                </TouchableOpacity>
                            </View>
                        )

                    }else
                    if(tarefa.status ==  2){
                        tarefa.status ="Finalizada"
                        return (
                            <View style={{display:'flex', margin:20,backgroundColor:"#A9A9A9", padding:10, borderRadius:"15px"}} key={index}>
                                <TouchableOpacity onPress={() => {
                                    excluirTarefa(tarefa.id_tarefa)
                                }}>
                                <Image  style={{width:34,height:34,marginLeft:"90%"}} source={{uri: "https://cdn-icons-png.flaticon.com/512/5510/5510213.png"}}/>
    
                                </TouchableOpacity>
                                <Text>ID : {tarefa.id_tarefa}</Text>
                                <Text>Descrição:  {tarefa.descricao}</Text>
                                <Text>Horário:  {tarefa.horario_tarefa}</Text>
                                <Text>Término:  {tarefa.horario_encerramento}</Text>
                                <Text>Status : {tarefa.status}</Text>
                            </View>
                        )
                    }else
                     if(tarefa.status == 3){
                        tarefa.status ="Cancelada"
                        return (
                            <View style={{display:'flex', margin:20,backgroundColor:"#A9A9A9", padding:10, borderRadius:"15px"}} key={index}>
                                <TouchableOpacity onPress={() => {
                                    excluirTarefa(tarefa.id_tarefa)
                                }}>
                                <Image  style={{width:34,height:34,marginLeft:"90%"}} source={{uri: "https://cdn-icons-png.flaticon.com/512/5510/5510213.png"}}/>
    
                                </TouchableOpacity>
                                <Text>ID : {tarefa.id_tarefa}</Text>
                                <Text>Descrição:  {tarefa.descricao}</Text>
                                <Text>Horário:  {tarefa.horario_tarefa}</Text>
                                <Text>Término:  {tarefa.horario_encerramento}</Text>
                                <Text>Status : {tarefa.status}</Text>
                            </View>
                        )
                    }
                    
                })
            }
        </View>
    )

}


