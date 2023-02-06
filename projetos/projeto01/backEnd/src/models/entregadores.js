const toReadAll = () => {
    return "SELECT * FROM entregadores";
}

const toReadId = (model) => {
    return `SELECT * FROM entregadores  WHERE  id_entregador =  '${model.id_entregador}'`;
}

const toReadEntregadores = (model) => {
    return `SELECT * FROM  vw_entregadores`;
}

const toUpdateEntregador = (model)=>{
    return `UPDATE entregadores SET  status = 'Indisponível' WHERE id_entregador = ${model.id_entregador}`;
        }

    const toLogin = (model) => {
        return `SELECT * FROM entregadores WHERE email = '${model.email}'`;
        }

        
module.exports = {
    toReadAll,
    toReadId,
    toLogin,
    toReadEntregadores,
    toUpdateEntregador
}