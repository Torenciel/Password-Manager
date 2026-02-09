import express from 'express'
import {authMiddleWare} from '../middleware/authmiddleware.js'
import {registerUser,
verifyUserEmail,
login,
resetPasswordRequest,
resetPassword} from "../controllers/password.controller.js"

const router = express.Router()

// toutes les routes nécessitent un utilisateur connecté
router.use(authMiddleWare)

//ajouter un mot de passe
router.post('/')

//récupérer tous les mots de passe
router.get('/')

//récupérer un mot de passe précis
router.get('/:id')

//mettre à jour un mot de passe
router.put('/:id')

//supprimer un mot de passe
router.delete('/:id')

export default router