const jwt=require('jsonwebtoken')
const createError=require('http-errors')

const createToken=(payload,JWT_SECRET_KEY,expiresIn)=>{
    if (typeof payload !== 'object' || !payload) {
        throw createError(401,'paylode is must in Jwt')
    }
    if (typeof JWT_SECRET_KEY !== 'string' || JWT_SECRET_KEY==='') {
        throw createError(401,'JWT_SECTRET_KEY is must required')
    }

try {
    const token=jwt.sign(payload, JWT_SECRET_KEY, {expiresIn:expiresIn})

    return token;
} catch (error) {
    console.log('jwt not created',error);
    throw error
}

}



module.exports=createToken