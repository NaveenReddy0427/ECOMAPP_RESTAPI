import UserModel from "../features/user/userModel.js";

const basicAuthorizer = (req, res, next)=>{

    // check if authorization header is empty or not 
    const authHeader = req.headers['authorization']

    if(!authHeader){
       return res.status(401).send('No Authorization results found')
    }
    console.log(authHeader)

    // Extract Credentials
    const base64Credentials = authHeader.replace('Basic ', '')
    console.log(base64Credentials)

    // decode the credentials
    const decodecredentials = Buffer.from(base64Credentials, 'base64').toString('utf8')
    console.log(decodecredentials)

    const credentials = decodecredentials.split(':')

    const user = UserModel.getAll().find(u=>u.email==credentials[0] && u.password==credentials[1])
    if(user){
        next()
    }else{
        return res.status(401).send('Invalid Credentials')
    }
}

export default basicAuthorizer;