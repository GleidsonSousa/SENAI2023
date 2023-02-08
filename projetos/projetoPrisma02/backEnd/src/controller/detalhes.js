const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createMany = async(req,res) => {
    let createDet = await prisma.detalhe.createMany({
        data: [
          { id_produto:1,id_venda:1,quantidade:14 },
          { id_produto:2,id_venda:2,quantidade:9 },
          { id_produto:3,id_venda:3,quantidade:3 },
          { id_produto:4,id_venda:4,quantidade:6 },
          { id_produto:5,id_venda:5,quantidade:10 },
          { id_produto:6,id_venda:6,quantidade:8 },
          { id_produto:7,id_venda:7,quantidade:2 },
          { id_produto:8,id_venda:8,quantidade:3 },
          { id_produto:9,id_venda:9,quantidade:5 },
          { id_produto:10,id_venda:10,quantidade:2 },

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
    let detalhes = await prisma.detalhe.findMany();

    res.status(200).json(detalhes).end();
}



module.exports = {
    create,
    createMany,
    read
}