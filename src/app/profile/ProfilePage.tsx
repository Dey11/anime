"use client";

import { Label } from "@/components/ui/label";
import { ColorPicker } from "./colorpicker";
import { Input } from "@/components/ui/input";
import { Key, Mail, Save } from "lucide-react";
import Username from "./Username";
import BioComponent from "./bio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  checkUsernameAvailability,
  editUserProfile,
} from "@/actions/editProfile";
import Password from "./Password";

interface ProfilePageProps {
  username: string;
  email: string;
  image: string;
  name: string;
  bio: string;
  bannerColor: string;
}

const ProfilePage = ({
  username,
  image,
  email,
  name,
  bio,
  bannerColor,
}: ProfilePageProps) => {
  const { toast } = useToast();

  const handleSubmit = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const bio = formData.get("bio") as string;

    // if (!username || !password) {
    //   toast({
    //     variant: "destructive",
    //     title: "Empty field(s)",
    //     description: "Please fill out all the input fields.",
    //   });
    //   return;
    // }

    try {
      const checkUsername = await checkUsernameAvailability(username, email);
      if (!checkUsername) {
        toast({
          title: "Username error",
          description: "Please try a different username.",
          variant: "destructive",
        });
        return;
      }
      const updateProfile = await editUserProfile({
        email,
        username,
        password,
        bio,
        bannerColor: localStorage.getItem("bannerColor") as string,
      });
      if (updateProfile) {
        toast({
          title: "Success",
          description: "Profile updated successfully",
        });
      }
    } catch (err) {
      console.log(err);
      toast({
        title: "Error",
        description: "Some error occured. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <form action={handleSubmit}>
      <div className="mt-5 flex flex-col overflow-hidden rounded-2xl bg-[#FFD9D9] pb-10 font-semibold text-black md:w-[965px]">
        <ColorPicker name={username} image={image} bannerColor={bannerColor} />

        <div className="pt-10 md:grid md:grid-cols-6">
          <div className="flex flex-col gap-8 px-10 pt-5 md:col-span-4">
            <Label className="flex flex-col gap-2">
              <span className="pl-2">Email address</span>
              <div className="relative">
                <Input
                  className="rounded-2xl pl-10 dark:border-0 dark:bg-white"
                  name="email"
                  type="email"
                  value={email}
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
                <Username name={username} email={email} />
              </div>
            </Label>

            <Label className="flex flex-col gap-2">
              <span className="pl-2">Password</span>
              <div className="relative">
                {/* <Input
                  className="rounded-2xl pl-10 dark:border-0 dark:bg-white"
                  name="password"
                  type="password"
                />
                <div className="absolute bottom-0 left-0 top-0 ml-2 mt-2">
                  <Key />
                </div> */}
                <Password />
              </div>
            </Label>

            <Label className="flex flex-col gap-2">
              <span className="pl-2">Bio</span>
              <BioComponent bio={bio} />
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

        <Button
          variant={"secondary"}
          className="mx-auto mt-10 flex"
          type="submit"
        >
          <Save />
        </Button>
      </div>
    </form>
  );
};

export default ProfilePage;

// {
//   /* <Label className="flex flex-col gap-2">
//             <span className="pl-2">Date of Birth</span>
//             <div className="relative">
//               <Input
//                 className="rounded-2xl pl-10 dark:border-0 dark:bg-white"
//                 name="dob"
//                 type="number"
//                 placeholder="DD/MM/YYYY"
//               />
//               <div className="absolute bottom-0 left-0 top-0 ml-2 mt-2">
//                 <Cake />
//               </div>
//             </div>
//           </Label> */
// }
// {
//   /* <Label className="flex flex-col gap-2">
//             <span className="pl-2">Date of Birth</span>
//             <CalendarComponent />
//           </Label> */
// }
