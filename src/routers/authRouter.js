import express from 'express'

const router = express.Router()

router.post('/signup', (req, res) => {
    res.json({message: "Rota de POST Auth/Signup"})
})
router.post('/login', (req, res) => {
    res.json({message: "Rota de POST Auth/Login"})
})
router.post('/logout', (req, res) => {
    res.json({message: "Rota de POST Auth/Logout"})
})

export default router