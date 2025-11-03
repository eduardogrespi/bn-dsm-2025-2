import { Router } from 'express'
import controller from '../controllers/pedidos.js'

const router = Router()

router.post('/', controller.create)

router.get('/', controller.retrieveAll)

// :id é um PARÂMETRO DE ROTA, isto é, uma informação não fixa
// que será enviado ao back-end na própria rota
router.get('/:id', controller.retrieveOne)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

// Rotas para os itens do pedido
router.post('/:id/itens', controller.createItem)
router.get('/:id/itens', controller.retrieveAllItems)
router.get('/:id/itens/:itemId', controller.retrieveOneItem)
router.put('/:id/itens/:itemId', controller.updateItem)
router.delete('/:id/itens/:itemId', controller.deleteItem)

export default router