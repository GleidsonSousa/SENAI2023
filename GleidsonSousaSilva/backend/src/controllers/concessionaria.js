const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const create = async (req, res) => {
    let concessionarias = await prisma.concessionaria.create({
        data: req.body
    });

    res.status(200).json(concessionarias).end();
}
const read = async (req, res) => {
    let concessionarias = await prisma.concessionaria.findMany();

    res.status(200).json(concessionarias).end();
}


module.exports = {
    read,
    create

}