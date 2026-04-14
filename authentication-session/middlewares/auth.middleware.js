import jwt from 'jsonwebtoken'

export const authMiddleware =async(req,res,next)=>{
    const token = req.headers['authorization']

    if(!token){
       return next()
    }
    if(!token.startsWith('Bearer')) 
        {
            return res.status(400).json({error: 'starts with bearer'})
        }
    
    const tok = token.split(' ')[1]

    const decoded = jwt.verify(tok,process.env.JWT_SECRET)

    req.user = decoded
    next()

}

export const restrictToRole = (role)=>{
    return (req,res,next)=>{
        if (req.user.role!==role) {
            return res.status(401).json({error:'not auth'})
        }
        return next()
    }
    
}