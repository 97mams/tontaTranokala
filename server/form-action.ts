"use server";

import { prisma } from "@/lib/prisma";
import { UrlHelper } from "@/lib/urlHelper";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const siteSchema = z.object({
  name: z.string().min(1, "Title is required"),
  description: z.string(),
  linkSite: z.string(),
  groupSiteId: z.int()
  });

const group = z.object({
  title: z.string().min(1, "Title is required")
});

export async function formGroupAction(formData: FormData) {

  const title = formData.get("title") as string;

  const input = group.safeParse({ title });
  if (!input.success) {
    return {error: true, message: input.error}
  }

  const addSiteGroup = await prisma.groupSite.create({
    data: {
      title: input.data.title,
    },
  });

  if (!addSiteGroup) {
    return {error: true, message: "data not found"}
  }

  revalidatePath("/")

  return {success: true, message: input.success, data: UrlHelper(input.data.title)}
}

export async function formSiteAction(formData:FormData) {

  const name = formData.get('nameSite')
  const description = formData.get('description')
  const linkSite = formData.get('urlSite')
  const groupSiteId = Number(formData.get('groupeSite'))

  const input = siteSchema.safeParse({name, description, linkSite, groupSiteId})

  if(!input.success) {
    return {error: true, message: "error type"}
  }

  const site = await prisma.site.create({
    data: {
      name: input.data.name,
      description: input.data.description,
      url: input.data.linkSite,
      GroupSiteId: input.data.groupSiteId
    }
  })

  if(!site) {
    return {error: true, message: "register faild"}
  }

  return {success: true, message: "register success"}

}

export async function groupSiteDeleteAction(formData:FormData) {
  const id:number = Number(formData.get('id'))
  const groupSite = await prisma.groupSite.delete({where: {id: id}})
  console.log(groupSite)
  if(!group) {
    return {error: true, message: "id is not matching"}
  }

  revalidatePath("/")

  return {success: true, message: "delete successfully"}
}