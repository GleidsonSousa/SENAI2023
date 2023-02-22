const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let usuario = await prisma.usuario.create({
        data: req.body
    });

    res.status(200).json(usuario).end();
}

const readOne = async (req, res) => {
    let usuario = await prisma.usuario.findUnique({
        where: {
            id: Number(req.params.id)
        },
        // select: {
        //     nome: true,
        //     cnh: true,
        //     operacoes: true
        // }
    });

    res.status(200).json(usuario).end();
}

const read = async (req, res) => {
    let usuarios = await prisma.usuario.findMany({
    });

    res.status(200).json(usuarios).end();
}


const update = async (req, res) => {
    const usuario = await prisma.usuario.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(usuario).end()
}

const remove = async (req, res) => {
    const usuario = await prisma.usuario.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(usuario).end()
}

const login = async (req, res) => {
    let usuario = await prisma.usuario.findMany({
        where: {
            AND: [
                { email: req.body.email },
                { senha: req.body.senha }
            ]
        },
        select: {
            id: true,
            nome: true,
            nivel: true
        }
    })

    //SELECT id, nome FROM usuario WHERE email = '' AND senha = ''

    res.status(200).json(usuario[0]).end();
}

module.exports = {
    create,
    update,
    remove,
    read,
    login,
    readOne
}