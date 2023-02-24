const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    var info = req.body

    req.body.id_motorista = Number(req.body.id_motorista)
    req.body.id_veiculo = Number(req.body.id_veiculo)
    let operacao = await prisma.operacao.create({
        data: info
    });

    res.status(200).json(operacao).end();
}

const readOne = async (req, res) => {
    let operacao = await prisma.operacao.findUnique({
        where: {
            id: Number(req.params.id)
        },
    });

    res.status(200).json(operacao).end();
}

const read = async (req, res) => {
    let operacoes = await prisma.operacao.findMany({
    });

    res.status(200).json(operacoes).end();
}


const update = async (req, res) => {
    const operacao = await prisma.operacao.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(operacao).end()
}

const remove = async (req, res) => {
    const operacao = await prisma.operacao.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(operacao).end()
}




module.exports = {
    create,
    update,
    remove,
    read,
    readOne
}