"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";

interface UserProfile {
  email: string;
  username: string;
  password: string;
  bio: string;
  bannerColor: string;
}

export const checkUsernameAvailability = async (
  username: string,
  email: string,
): Promise<boolean> => {
  const session = await auth();
  if (!session?.user) {
    return false;
  }
  try {
    const checkSameUser = await prisma.user.findFirst({
      where: {
        email,
        username,
      },
    });
    if (checkSameUser) return true;

    const checkAvailability = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    if (checkAvailability != null) return false;
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const editUserProfile = async ({
  email,
  username,
  password,
  bio,
  bannerColor,
}: UserProfile): Promise<boolean> => {
  try {
    const session = await auth();
    if (!session?.user) return false;

    const updateProfile = await prisma.user.update({
      where: { email },
      data: {
        username,
        password,
        bio,
        bannerColor,
      },
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
