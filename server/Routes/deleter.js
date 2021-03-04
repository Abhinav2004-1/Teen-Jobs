import express from 'express';
import RegistrationModel from '../Models/register.js';

const router = express.Router();

router.delete('/', async(_, res) => {
    await RegistrationModel.remove();
    return res.json({deleted: true});
})

export default router;