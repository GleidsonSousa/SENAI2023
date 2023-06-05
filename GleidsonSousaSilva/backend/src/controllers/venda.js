const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const create = async (req, res) => {
    let vendas = await prisma.venda.create({
        data: req.body
    });

    res.status(200).json(vendas).end();
}
const read = async (req, res) => {
    let vendas = await prisma.venda.findMany();

    res.status(200).json(vendas).end();
}


module.exports = {
    read,
    create

}