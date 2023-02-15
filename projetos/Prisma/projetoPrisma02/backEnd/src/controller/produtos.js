const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createMany = async (req, res) => {
    let createProd = await prisma.produto.createMany({
        data: [
            { nome: 'Skate de pé', valor: 129.99, setor_id: 1 },
            { nome: 'Barco de pesca', valor: 3559.99, setor_id: 1 },
            { nome: 'PC GAMER PIXAU I7 ', valor: 4999.99, setor_id: 2 },
            { nome: 'PC DA NASA RODA TUDÔ', valor: 59999.99, setor_id: 2 },
            { nome: 'Nightingale of Kuala Lumpur', valor: 30000.00, setor_id: 3 },
        ],
        skipDuplicates: true,
    })
    res.status(200).json(createProd).end();

}



const create = async (req, res) => {
    var info = req.body
    req.body.valor = Number(req.body.valor)
    req.body.setor_id = Number(req.body.setor_id)
    const produto = await prisma.produto.create({
        data: info
    })

    res.status(200).json(produto).end()
}

const read = async (req, res) => {
    let produtos = await prisma.produto.findMany();

    res.status(200).json(produtos).end();
}

module.exports = {
    create,
    createMany,
    read
}