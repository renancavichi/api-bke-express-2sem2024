import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
    res.json({message: "Rota de POST Account"})
})
router.get('/list', (req, res) => {
    res.json({message: "Rota de GET Account/List"})
})
router.get('/:id', (req, res) => {
    res.json({message: "Rota de GET Account ID"})
})
router.put('/:id', (req, res) => {
    res.json({message: "Rota de PUT Account"})
})
router.delete('/:id', (req, res) => {
    res.json({message: "Rota de DELETE Account"})
})

export default router