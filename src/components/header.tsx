import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" mx-auto flex flex-row justify-between py-8 items-center font-medium items-center">
      <div className="text-xl ">
        <Link href={"/"}>
          <h1>Anidey</h1>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-10 text-lg ">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/anime/search"}>
            <li>Explore</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
