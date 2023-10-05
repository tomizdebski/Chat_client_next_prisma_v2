"use server";
import { getServerSession } from "next-auth";
import { prisma } from "./lib/db";
import { authOptions } from "./lib/auth";

export async function postData(message: string, socketID: string) {
  "use server";
  
  const session = await getServerSession(authOptions);
  //const message = formData.get("message");

  const data = await prisma.message.create({
    data: {
      message: message as string,
      email: session?.user?.email,
      socketID: socketID,
    },
    include: {
      User: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
}
