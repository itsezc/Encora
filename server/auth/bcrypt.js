import BCrypt from 'bcrypt'

export const Hash = async(data) => await BCrypt.hash(data, 14)
export const Compare = async(check, data) => await BCrypt.compare(check, data)
