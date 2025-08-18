"use server"

import { prisma } from "@/lib/prisma"
import z from "zod"

const platefromShema = z.object({
    name: z.string(),
    email     : z.string(),
    passWord   : z.string(),
    description: z.string(),
    url       : z.string().optional()
})

export async function formPlateformAction(formData:FormData) {

    const name = formData.get('nameplateform')?.toString()
    const email = formData.get('email')?.toString()
    const passWord = formData.get('pwd')?.toString()
    const description = formData.get('description')?.toString()
    const url = formData.get('urlplateform')?.toString()

   const result = platefromShema.safeParse({name,email,passWord,description,url})
   if (!result.success) {
       return { error: true, message: "verify your data" }
   }

   const plateform = await prisma.plateform.create({
       data: {
           name: result.data.name,
           email: result.data.email,
           passWord: result.data.passWord,
           description: result.data.description,
           url: result.data.url
       }
   })

   return {success: true, message: "Platform created successfully"}
}
