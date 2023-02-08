const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createMany = async(req,res) => {
    let createProd = await prisma.vendedor.createMany({
        data: [
          { nome: 'Roberto Nunes', salario:1500.00,setor_id:1  },
          { nome: 'David GoMES', salario:4500.00,setor_id:2 },
          { nome: 'Ednaldo', salario:4000.00,setor_id:2},
          { nome: 'Sergio', salario:2350.00,setor_id:1},
          { nome: 'Luiza', salario:2130.50,setor_id:3},
          { nome: 'Andressa', salario:1400.00,setor_id:3},
          { nome: 'Thaynara', salario:2500.00,setor_id:4},
          { nome: 'Jheniffer', salario:1500.00,setor_id:4},
          { nome: 'Carlos', salario:2000.00,setor_id:5},
          { nome: 'Klaudio', salario:3340.50,setor_id:5},
        ],
        skipDuplicates: true,
      })
      res.status(200).json(createProd).end();

}

const create = async (req, res) => {
    let vendedor = await prisma.vendedor.create({
        data: req.body
    });

    res.status(200).json(vendedor).end();
}

const readOne = async (req, res) => {
    let vendedor = await prisma.vendedor.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            salario: true,
            setor_id: true,
            vendas:true
        }
    });
    res.status(200).json(vendedor).end();
}


const read = async (req, res) => {
    let vendedores = await prisma.vendedor.findMany();

    res.status(200).json(vendedores).end();
}

module.exports = {
    create,
    createMany,
    read,
    readOne
}