import UserModel from "./userModel.js";
import jwt from "jsonwebtoken"

export default class UserController{

    signUp(req, res){
        const {name, email, password, type} = req.body;
        const user = UserModel.signUp(name, email, password, type)
        res.status(200).send(user)
    }

    signIn(req, res){
        const result = UserModel.signIn(req.body.email, req.body.password)
        if(!result){
            return res.status(404).send('Incorrect credentials')
        }else{
            // create token 
            const token = jwt.sign(
                {
                userID: result.id,
                email: result.email,
                },
                'D3hdazP1Nlo57bvKKiJDRvQLjSKMPjSQ',
                {
                    expiresIn: '1h',
                }
            )
            // send token 
            return res.send(token)
        }
    }
}