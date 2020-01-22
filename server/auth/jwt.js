import JWT from 'jsonwebtoken'

export const Sign = async(data, secret) => await JWT.sign(data, secret)
