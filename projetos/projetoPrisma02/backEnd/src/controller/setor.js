const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createMany = async(req,res) => {
    let createProd = await prisma.setor.createMany({
        data: [
          { nome: 'Esprotes', comissao:10.0 },
          { nome: 'Tecnologia', comissao:25.0 },
          { nome: 'Moda', comissao:5.0 }
        ],
        skipDuplicates: true,
      })
      res.status(200).json(createProd).end();

}


const create = async (req, res) => {
    let info =  req.body
    req.body.comissao = Number(req.body.comissao)

    let setor = await prisma.setor.create({
        data: info
    });

    res.status(200).json(setor).end();
}

const readOne = async (req, res) => {
    let setor = await prisma.setor.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            comissao: true,
            produtos: true,
            vendedores:true
        }
    });
    res.status(200).json(setor).end();
}

const read = async (req, res) => {
    let setores = await prisma.setor.findMany({
        select: {
            id:true,
            nome: true,
            comissao: true
        }
    });
    res.status(200).json(setores).end();
}



module.exports = {
    create,
    createMany,
    read,
    readOne
}