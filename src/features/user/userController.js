import UserModel from "./userModel.js";

export default class UserController{

    signUp(req, res){
        const {name, email, password, type} = req.body;
        const user = UserModel.SignUp(name, email, password, type)
        res.status(200).send(user)
    }

    signIn(req, res){
        const result = UserModel.SignIn(req.body.email, req.body.password)
        if(!result){
            return res.status(404).send('Incorrect credentials')
        }else{
            return res.send('Login Successfully')
        }
    }
}