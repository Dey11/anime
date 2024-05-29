"use client";

import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { useState } from "react";
import { checkUsernameAvailability } from "@/actions/editProfile";

const Username = ({ name }: { name: string }) => {
  const [username, setUsername] = useState<string>(name);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string>("");

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (username.length < 4) {
      setError("Username should have atleast 4 characters");
      return;
    }
    setError(null);
    try {
      const isAvailable = await checkUsernameAvailability(e.target.value);
      if (isAvailable) {
        setSuccess("Username is available");
      } else {
        setError("Username is not available");
      }
    } catch (err) {
      console.log(err);
      setError("Server error, please try again later");
    }
  };

  return (
    <div>
      <Input
        className="rounded-2xl pl-10 dark:border-0 dark:bg-white"
        name="username"
        type="username"
        value={username}
        onChange={handleOnChange}
      />
      <div className="absolute bottom-0 left-0 top-0 ml-2 mt-2">
        <User />
      </div>
      <div className="ml-3 mt-3">
        {error ? (
          <div className="text-red-500"> {error} </div>
        ) : (
          <div className="text-green-500"> {success} </div>
        )}
      </div>
    </div>
  );
};

export default Username;
