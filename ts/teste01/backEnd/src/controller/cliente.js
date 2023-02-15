const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    var info = req.body
    const cliente = await prisma.cliente.create({
        data: info
    })
    res.status(200).json(cliente).end()
}

const update = async (req ,res) =>{

    req.body.id = Number(req.body.id)

    const cliente = await prisma.cliente.update({
        where:{
            id:Number(req.body.id)
        },
        data:req.body
    })

    res.status(200).json(cliente).end()
}

const read = async (req, res) => {
    let clientes = await prisma.cliente.findMany({
        include: {
            telefones: true,
            produtos: true
        }
    });
    
    res.status(200).json(clientes).end();
}

const readOne = async (req, res) => {
    let clientes = await prisma.cliente.findUnique({
        where: {
            id: Number(req.params.id)
        },       
        include: {
            telefones: true,
            produtos: true
        }
    });
    
    res.status(200).json(clientes).end();
}

module.exports ={
    create,
    update,
    read,
    readOne
}