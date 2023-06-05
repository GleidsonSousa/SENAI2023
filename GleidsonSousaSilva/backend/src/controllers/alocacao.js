const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const create = async (req, res) => {
    let alocacao = await prisma.alocacao.create({
        data: req.body
    });

    res.status(200).json(alocacao).end();
}
const read = async (req, res) => {
    let alocacao = await prisma.alocacao.findMany({
        select: {
            id: true,
            id_automovel: true,
            id_concessionaria: true,
            area: true,
            quantidade: true,
            concessionaria: true,
            automovel: true
            // chama o autmovel assim posso listar como quiser o nome placa etc..
        }
    });


    res.status(200).json(alocacao).end();
}


module.exports = {
    read,
    create
}