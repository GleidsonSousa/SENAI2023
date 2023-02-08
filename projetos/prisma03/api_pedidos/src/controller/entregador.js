const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const test = async (req, res) => {
    res.status(200).json("API online, aguardando requisições").end();
}
const create = async (req, res) => {
    const entregador = await prisma.entregador.create({
        data: req.body
    });
    res.status(200).json(entregador).end();
}

module.exports = {
    test,
    create
}