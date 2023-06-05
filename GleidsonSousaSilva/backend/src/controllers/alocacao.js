const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const create = async (req, res) => {
    let alocacao = await prisma.alocacao.create({
        data: req.body
    });

    res.status(200).json(alocacao).end();
}
const read = async (req, res) => {
    let alocacao = await prisma.alocacao.findMany();


    res.status(200).json(alocacao).end();
}


module.exports = {
    read,
    create
}