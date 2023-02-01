const express = require('express');
const cors = require('cors');

const tarefas = require('./src/routes/tarefa.routes');


const app = express();
app.use(express.json());
app.use(cors());
app.use(tarefas);


app.listen(4500, () => {
    console.log("APP ON 4500 🤨 ");
});