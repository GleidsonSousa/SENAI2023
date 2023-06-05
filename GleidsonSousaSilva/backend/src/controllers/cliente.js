const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const create = async (req, res) => {
    let clientes = await prisma.cliente.create({
        data: req.body
    });

    res.status(200).json(clientes).end();
}
const read = async (req, res) => {
    let clientes = await prisma.cliente.findMany();

    res.status(200).json(clientes).end();
}


module.exports = {
    read,
    create

}