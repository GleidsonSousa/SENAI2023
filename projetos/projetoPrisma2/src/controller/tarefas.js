const {PrismaClient} = require ('@prisma/client')

const prisma = new  PrismaClient();

const create = async (req ,res) =>{

    var info = req.body;
    info.horario_tarefa =  new Date(req.body.horario_tarefa);

   const tarefas = await prisma.tarefas.create({
    data: req.body
   });
   res.status(200).json(tarefas).end()
}

const read = async (req ,res) =>{
       const tarefass = await prisma.tarefas.findMany();

       res.status(200).json(tarefass).end() 
}

const readTarefa = async (req ,res) =>{
    const tarefas = await prisma.tarefas.findUnique({
        where:{
            id_tarefa:Number(req.params.id_tarefa) 
        }
    });
    res.status(200).json(tarefas).end()
}

const update = async (req ,res) =>{
    const tarefas = await prisma.tarefas.update({
        where:{
            id_tarefa:Number(req.params.id_tarefa)
        },
        data:req.body
    })

    res.status(200).json(tarefas).end()
}

const remove = async(req ,res) =>{
    const tarefas = await prisma.tarefas.delete({
        where:{
            id_tarefa:Number(req.params.id_tarefa)
        }
    })
    res.status(200).json(tarefas).end()
}

module.exports ={
    create,
    read,
    readTarefa,
    update,
    remove
}