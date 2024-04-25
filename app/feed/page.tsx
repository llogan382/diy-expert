import Image from "next/image";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";
import { PrismaClient, Prisma } from '@prisma/client'
import Banner from "../components.tsx/banner";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DiyCardHeader from "../components.tsx/card";
import DiyCard from "../components.tsx/card";



const prisma = new PrismaClient()


export default async function Page() {

  const clerkUser = await currentUser()
  console.log(clerkUser)
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: clerkUser?.id,
      },
    })



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={`/user/${user.id}`}>
        User Settings
        </Link>
    <DiyCard user={user}/>
    </main>

  )
}
