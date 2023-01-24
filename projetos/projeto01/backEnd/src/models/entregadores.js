const toReadAll = () => {
    return "SELECT * FROM entregadores";
}

const toReadId = (model) => {
    return `SELECT * FROM entregadores  WHERE  id_entregador =  '${model.id_entregador}'`;
}

module.exports = {
    toReadAll,
    toReadId
}