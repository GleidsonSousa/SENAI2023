const express = require('express');
const router = express.Router();

const RotaPedidos = require("../controllers/pedidosControllers");

router.post("/pedidos/create", RotaPedidos.criarPedido);
router.get("/pedidos/read", RotaPedidos.listarPedido);
router.get("/pedidos/read/:id_pedido", RotaPedidos.listarIdPedido);
router.get("/read/vw_cozinha", RotaPedidos.listarCozinha);
router.get("/read/vw_entrega", RotaPedidos.listarEntregue);
router.get("/read/vw_finalizado", RotaPedidos.listarFim);
router.delete("/pedidos/delete/:id_pedido", RotaPedidos.excluirPedido);
router.put("/pedidos/update/", RotaPedidos.editarPedido);
router.put("/pedidos/update-entregador", RotaPedidos.editarEntregador);
router.put("/pedidos/update-finalizado", RotaPedidos.editarFinal);




module.exports = router