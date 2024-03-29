const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    var info = req.body

    req.body.valor = Number(req.body.valor)
    req.body.id_veiculo = Number(req.body.id_veiculo)

    let manutencao = await prisma.manutencao.create({
        data:info
    });

    res.status(200).json(manutencao).end();
}

const readOne = async (req, res) => {
    let manutencao = await prisma.manutencao.findUnique({
        where: {
            id: Number(req.params.id)
        },
        // select: {
        //     nome: true,
        //     cnh: true,
        //     operacoes: true
        // }
    });

    res.status(200).json(manutencao).end();
}

const read = async (req, res) => {
    let manutencaos = await prisma.manutencao.findMany({
        select:{
            id:true,
            data_inicio: true,
            data_fim: true,
            valor: true,
            descricao: true,
            id_veiculo: true,
            veiculo:true
        }
    });

    res.status(200).json(manutencaos).end();
}


const update = async (req, res) => {
    var info = req.body

    req.body.valor = Number(req.body.valor)
    const manutencao = await prisma.manutencao.update({
        where: {
            id: Number(req.params.id)
        },
        data: info
    })

    res.status(200).json(manutencao).end()
}

const remove = async (req, res) => {
    const manutencao = await prisma.manutencao.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(manutencao).end()
}

module.exports = {
    create,
    update,
    remove,
    read,
    readOne
}