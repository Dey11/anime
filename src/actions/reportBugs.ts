"use server";
import prisma from "@/lib/prisma";

type reportBugProps = {
  username: string;
  description: string;
  url: string;
};

async function reportBug({ username, description, url }: reportBugProps) {
  try {
    const newBug = await prisma.errors.create({
      data: {
        username,
        description,
        url,
      },
    });

    console.log(newBug);
  } catch (err) {
    console.log(err);
    return -1;
  }
}
