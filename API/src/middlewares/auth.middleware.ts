import { FastifyReply, FastifyRequest } from "fastify";
import jwt from 'jsonwebtoken'

// This function checks whether the user is logged in or not
export async function verifyAuth (req: FastifyRequest, res: FastifyReply){
  // In here we save the token inside cookies
  const token = req.cookies.token
  // console.log('token: ' + token)
  // if don't have token sends a error message saying 'Token not exist
  if(!token){
    return res.status(401).send({error: 'Token not exist'})
  }

  try {
    console.log('entrei no try')
    // We here decode the jwt(token) received with our scretkey(secretjwt)
    const decoded = jwt.verify(token, 'jwtToken') as {
      id: string,
    }
    // console.log('passei o decoded')
    
    // console.log('decoded: ' + JSON.stringify(decoded))
    req.user = { id: String(decoded) };
  } catch (error) {
    return res.status(401).send({error: 'Token invalide'})
  }
}