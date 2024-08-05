import jwt from "jsonwebtoken"

const jwtAuth = (req, res, next)=>{

    // read the token from headers
    const token = req.headers['authorization']

    // if no token, return the error
    if(!token){
        return res.status(401).send('unAuthorized')
    }

    // check if token is valid
    try {
        const payload = jwt.verify(token, 'D3hdazP1Nlo57bvKKiJDRvQLjSKMPjSQ')  
        console.log(payload) 
    } catch (error) {
        return res.status(401).send('unAuthorized')
    }

    // call next middlware
    next()
}

export default jwtAuth;