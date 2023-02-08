const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createMany = async(req,res) => {
    let createProd = await prisma.produto.createMany({
        data: [
          { nome: 'Skate de pé', valor:129.99, setor_id:1 },
          { nome: 'Barco de pesca', valor:3559.99, setor_id:1 },
          { nome: 'PC GAMER PIXAU I7 ', valor:4999.99, setor_id:2 },
          { nome: 'PC DA NASA RODA TUDÔ', valor:59999.99, setor_id:2 },
          { nome: 'Nightingale of Kuala Lumpur', valor:30000.00, setor_id:3 },
          { nome: 'Jaqueta de couro', valor:200.00, setor_id:3 },
          { nome: 'Caderno 24 matérias', valor:199.99, setor_id:4 },
          { nome: 'Conjunto helloKitty', valor:229.99, setor_id:4 },
          { nome: 'Jack Daniels', valor:299.99, setor_id:5 },
          { nome: 'Don Julio Blanco', valor:399.99, setor_id:5 },
          { nome: 'Mouso do bolivia', valor:29.99, setor_id:2 },
          { nome: 'Kit sobrevivência na SELVA', valor:4599.99, setor_id:1 },
          { nome: 'Kit pc Gamer 2022', valor:5999.99, setor_id:2 },
    
          
        ],
        skipDuplicates: true,
      })
      res.status(200).json(createProd).end();

}

 

const create = async (req, res) => {
    let produto = await prisma.produto.create({
        data: req.body
    });

    res.status(200).json(produto).end();
}

const read = async (req, res) => {
    let produtos = await prisma.produto.findMany();

    res.status(200).json(produtos).end();
}

module.exports = {
    create,
    createMany,
    read
}