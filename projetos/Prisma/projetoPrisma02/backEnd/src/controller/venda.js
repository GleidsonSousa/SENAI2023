const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createMany = async(req,res) => {
    let createProd = await prisma.venda.createMany({
        data: [
          {  id_vendedor:1 },
          {  id_vendedor:4 },
          {  id_vendedor:3 },
          {  id_vendedor:4 },
        ],
        skipDuplicates: true,
      })
      res.status(200).json(createProd).end();

}

 

const create = async (req, res) => {
    let venda = await prisma.venda.create({
        data: req.body
    });

    res.status(200).json(venda).end();
}

const read = async (req, res) => {
    let vendas = await prisma.venda.findMany({
        select: {
            id:true,
            data: true,
            id_vendedor: true,
            vendedor: true,
            detalhes:{
                select: {
                    produto:true
                }
            }
        }
    });
 
    

    res.status(200).json(vendas).end();
}

const readOne = async (req, res) => {
    let venda = await prisma.venda.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            data: true,
            id_vendedor: true,
            detalhes: true,
            vendedor: true
        }
    });
    res.status(200).json(venda).end();
}

module.exports = {
    create,
    createMany,
    readOne,
    read
}