import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key, Mail, Save, User } from "lucide-react";
import CalendarComponent from "./calendar";
import Image from "next/image";
import BioComponent from "./bio";
import { auth } from "@/auth";

const page = async () => {
  const session = await auth();
  if (!session?.user) {
    return <div className="text-center text-2xl">Unauthenticated</div>;
  }

  return (
    <div className="mt-5 overflow-hidden rounded-2xl bg-[#FFD9D9] pb-10 font-semibold text-black md:w-[965px]">
      <div className="relative">
        <div className="h-[130px]  p-1 md:h-[150px]">
          <Image
            src={"/mushoku2.jpg"}
            alt="mushoku"
            objectFit="cover"
            fill={true}
          />
        </div>
        <div className="absolute left-5 top-3/4 h-20 w-20 overflow-hidden rounded-full border-2 border-red-300 bg-white md:top-2/4 md:h-32 md:w-32">
          <Image
            src={session.user.image as string}
            alt={session.user.name as string}
            objectFit="cover"
            fill={true}
          />
        </div>
      </div>

      <div className="pt-5 md:grid md:grid-cols-6">
        <div className="flex flex-col gap-5 px-10 pt-16 md:col-span-4">
          <Label className="flex flex-col gap-2">
            <span className="pl-2">Email address</span>
            <div className="relative">
              <Input
                className="rounded-2xl pl-10 dark:border-0 dark:bg-white"
                name="email"
                type="email"
                value={session.user.email as string}
                disabled
              />
              <div className="absolute bottom-0 left-0 top-0 ml-2 mt-2">
                <Mail />
              </div>
            </div>
          </Label>

          <Label className="flex flex-col gap-2">
            <span className="pl-2">Username</span>
            <div className="relative">
              <Input
                className="rounded-2xl pl-10 dark:border-0 dark:bg-white"
                name="username"
                type="username"
              />
              <div className="absolute bottom-0 left-0 top-0 ml-2 mt-2">
                <User />
              </div>
            </div>
          </Label>

          <Label className="flex flex-col gap-2">
            <span className="pl-2">Password</span>
            <div className="relative">
              <Input
                className="rounded-2xl pl-10 dark:border-0 dark:bg-white"
                name="password"
                type="password"
              />
              <div className="absolute bottom-0 left-0 top-0 ml-2 mt-2">
                <Key />
              </div>
            </div>
          </Label>

          <Label className="flex flex-col gap-2">
            <span className="pl-2">Date of Birth</span>
            <CalendarComponent />
          </Label>

          <Label className="flex flex-col gap-2">
            <span className="pl-2">Bio</span>
            <BioComponent />
          </Label>
        </div>

        <div className="mx-auto hidden md:col-span-2 md:block">
          <Image
            className=""
            src={"/marin.png"}
            alt="Marin Kitagawa"
            width={200}
            height={200}
          />
        </div>
      </div>

      <Button variant={"secondary"} className="mx-auto mt-10 flex">
        <Save />
      </Button>

      {/* <h1 className="pt-10 text-center text-2xl">Under construction!</h1> */}
    </div>
  );
};

export default page;
