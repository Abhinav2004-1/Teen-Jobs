import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post('/', (req, res) => {
    const Token = req.body.token;
    jwt.verify(Token, process.env.JWT_AUTH_TOKEN, (err, data) => {
        if(!err){
            if(data){
                return res.json({access: true});
            }else{
                return res.json({ auth_token_err: true });
            }
        }else{
            return res.json({ auth_token_err: true });
        }
    })
});

export default router;