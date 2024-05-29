import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import ProfilePage from "./ProfilePage";

const page = async () => {
  const session = await auth();
  if (!session?.user) {
    return <div className="text-center text-2xl">Unauthenticated</div>;
  }

  const userDetails = await prisma.user.findFirst({
    where: { email: session.user.email as string },
  });

  return (
    <ProfilePage
      name={userDetails?.name as string}
      username={userDetails?.username as string}
      image={userDetails?.image as string}
      email={userDetails?.email as string}
      bio={userDetails?.bio as string}
      bannerColor={userDetails?.bannerColor as string}
    />
  );
};

export default page;
