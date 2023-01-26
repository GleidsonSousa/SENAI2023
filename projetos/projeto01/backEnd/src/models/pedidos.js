const toCreate = (model) => {
    return `INSERT INTO pedidos VALUES (DEFAULT, '${model.cliente}','${model.endereco}','${model.produto}',curDate(),curTime(), "" ,"", null)`;
}

const toReadAll = () => {
    return "SELECT * FROM pedidos ORDER BY id_pedido DESC";
}

const toReadId = (model) => {
    return `SELECT * FROM pedidos  WHERE  id_pedido =  ${model.id_pedido} `;
}

const toReadCozinha = () => {
    return "SELECT * FROM vw_cozinha";
}

const toReadEntrega = () => {
    return "SELECT * FROM vw_entrega";
}

const toReadFinalizado = () => {
    return "SELECT * FROM vw_finalizados order by id_pedido DESC";
}

const toDelete = (model) => {
    return `DELETE FROM pedidos WHERE id_pedido = ${model.id_pedido}`;
}

const toUpdatePedido = (model)=>{
    return `UPDATE pedidos SET   cliente = '${model.cliente}', endereco = '${model.endereco}', produto = '${model.produto}' WHERE id_pedido = ${model.id_pedido}`;
    }

const toUpdateEntregador = (model)=>{
    return `UPDATE pedidos SET   hora_entrega = curTime(), entregador = ${model.entregador} WHERE id_pedido = ${model.id_pedido}`;
        }

const toUpdateEntregue = (model)=>{
    return `UPDATE pedidos SET   hora_fim = curTime()  WHERE id_pedido = ${model.id_pedido}`;
            }

module.exports = {
    toCreate,
    toReadAll,
    toReadId,
    toReadCozinha,
    toReadEntrega,
    toReadFinalizado,
    toDelete,
    toUpdatePedido,
    toUpdatePedido,
    toUpdateEntregador,
    toUpdateEntregue
}