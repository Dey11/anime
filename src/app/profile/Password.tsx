"use client";

import { Input } from "@/components/ui/input";
import { Key } from "lucide-react";
import { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (password.length < 5) {
      setError("Password should be of atleast 5 characters.");
      return;
    }
    setError(null);
  };

  return (
    <div>
      <Input
        className="rounded-2xl pl-10 dark:border-0 dark:bg-white"
        name="username"
        type="password"
        onChange={handleOnChange}
      />
      <div className="absolute bottom-0 left-0 top-0 ml-2 mt-2">
        <Key />
      </div>
      <div className="ml-3 mt-3">
        {error ? <div className="text-red-500"> {error} </div> : ""}
      </div>
    </div>
  );
};

export default Password;
