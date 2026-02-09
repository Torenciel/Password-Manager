import express from 'express'
const router = express.Router()

//créer un nouvel utilisateurs
router.post('/register')

//vérification de la validité de l'email de l'utilisateur pour confirmer la création de compte
router.get('/verify')

//connexion de l'utilisateur
router.post('/login')

//demande de mis a jour du mot de passe
router.post('/reset-password-request')

//mise a jour du mot de passe
router.post('/reset-password')

export default router