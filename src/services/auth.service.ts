import bcrypt from 'bcrypt'
import prisma from '../lib/prisma.js'
import { Prisma } from "../../generated/prisma/client.js";


export async function registerUser(email: string, password: string, name?:string) {
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.BCRYPT_WORK_FACTOR || '10'))
    try{
      const newUser= await prisma.user.create({   
        data:{
            email,
            password: hashedPassword,
            name: name,
        } ,
        select:{
            id: true,
            email: true,
            name: true,
            createdAt: true
        }
      })
      return newUser
    }catch(error){
      if(error instanceof Prisma.PrismaClientKnownRequestError && error.code=='P2002'){
       throw new Error(`User with email ${email} already exist` )
      }
      throw error
    }
}
