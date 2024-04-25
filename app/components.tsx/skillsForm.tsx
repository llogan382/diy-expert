import { PrismaClient, Prisma } from '@prisma/client'
import { auth, currentUser } from "@clerk/nextjs/server";

const prisma = new PrismaClient()


export async function UserSkillsForm() {
    'use server'
    const clerkUser = await currentUser();

    // build a query to update a skill
    console.log(clerkUser)
    // const user = await prisma.user.update({
    //     where: {
    //         id: 'user_2farvAwI4cdHUP8T5OZIj9lSFYm',
    //     },
    //     data: {
    //         skills: {
    //             upsert: {
    //                 create: {
    //                     nameOfSkill: 'fencing',
    //                 },
    //                 update: {
    //                     nameOfSkill: 'fencing',
    //                 },
    //             },
    //         },
    //     },
    //     include: {
    //         skills: true
    //     }

    // })
    const result = await prisma.user.update({
        where: {
            id: 'user_2farvAwI4cdHUP8T5OZIj9lSFYm',
        },
        data: {
          skills: {
            upsert: {
              create: {
                nameOfSkill: 'camping',
              },
              update: {
                nameOfSkill: 'camping',
              },
              where: {
                nameOfSkill: 'camping',
              }
            },
          },
        },
        include: {
          skills: true,
        },
      })

    // const rawFormData = {
    //   id: formData.get('userId'),
    //   amount: formData.get('amount'),
    //   status: formData.get('status'),
    // }

    // mutate data
    // revalidate cache

    return <form>The form</form>

}
