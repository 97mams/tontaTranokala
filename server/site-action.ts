"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import z from "zod";

const siteShema = z.object({
  id: z.number(),
  name: z.string().min(1, "Title is required"),
  description: z.string(),
  linkSite: z.string(),
  groupSiteId: z.int()
});

export async function updateSite(formData: FormData) {
  const id = Number(formData.get('id'))
  const name = formData.get('nameSite')
  const description = formData.get('description')
  const url = formData.get('urlSite')

  const input= siteShema.safeParse({
    id,
    name,
    description,
    linkSite: url,
    groupSiteId: Number(formData.get('groupeSite'))
  })

 console.log("data:", input)

  const site = await prisma.site.update(
    {
      where: {
        id: input.data?.id
      }, 
      data: {
        name: input.data?.name,
        description: input.data?.description,
        url: input.data?.linkSite
      }
    })

    if(input.error) {
      return {error: true, message: "error maching"}
    }

    if(!site) {
      return {error: true, message: "update failded"}
    }

  return {success: true, message: "update successfully"}
}

export async function deleteSite(id: number) {
  const site = await prisma.site.delete({
    where: {id: id}
  })

  if(!site) {
    return {error: true, message: "site not matching"}
  }

  revalidatePath("/");

  return {success: true, message: "ok", data: site}

}