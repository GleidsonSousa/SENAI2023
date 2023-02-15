const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createMany = async (req, res) => {
    let createDet = await prisma.detalhe.createMany({
        data: [
            {  id_produto:1,id_venda: 1, quantidade: 14 },
            {  id_produto:2,id_venda: 2, quantidade: 9 },
            {  id_produto:3,id_venda: 3, quantidade: 3 },
            {  id_produto:4,id_venda: 4, quantidade: 6 },

        ],
        skipDuplicates: true,
    })
    res.status(200).json(createDet).end();

}



const create = async (req, res) => {
    let detalhe = await prisma.detalhe.create({
        data: req.body
    });

    res.status(200).json(detalhe).end();
}

const read = async (req, res) => {
    let detalhes = await prisma.detalhe.findMany({
        include: {
            produto: true
        }
    });
    
    res.status(200).json(detalhes).end();
}



module.exports = {
    create,
    createMany,
    read
}