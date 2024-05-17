"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  AlignJustify,
  Home,
  Library,
  Search,
  Sunrise,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { SignIn } from "./custom-ui/buttons/signInBtn";
import { SignOut } from "./custom-ui/buttons/signOutBtn";

import { DropdownMenuForLoggedIn } from "./loggedInUserMenu";
import SearchForm from "./home/searchForm";
import { Button } from "./ui/button";

const Header = () => {
  const session = useSession();

  return (
    <div className="mx-auto flex flex-row items-center justify-between pb-5 pt-5 font-medium">
      <div className="text-xl ">
        <Link href={"/"}>
          <h1>Anidey</h1>
        </Link>
      </div>

      <div className="hidden md:block">
        <SearchForm className="header" />
      </div>

      <div className="flex gap-10">
        {session.status === "authenticated" && (
          <div className="flex">
            <DropdownMenuForLoggedIn />
          </div>
        )}

        <Sheet key={"right"}>
          <SheetTrigger>
            <AlignJustify size={32} />
          </SheetTrigger>
          <SheetContent side={"right"}>
            <ScrollArea className={"h-[calc(100vh-150px)]"}>
              <nav>
                <ul>
                  {navElements.map((element) => (
                    <li className="pb-5" key={element.name}>
                      <SheetHeader>
                        <SheetClose asChild>
                          <Link href={element.link}>
                            <SheetTitle>
                              <span className="flex items-center gap-2 text-sm md:text-lg">
                                {element.icon} {element.name}
                              </span>
                            </SheetTitle>
                            <SheetDescription className="hidden pt-1 md:block">
                              {element.description}
                            </SheetDescription>
                          </Link>
                        </SheetClose>
                      </SheetHeader>
                      <Separator className="mt-2" />
                    </li>
                  ))}
                </ul>
              </nav>

              <ScrollBar />
            </ScrollArea>
            <SheetHeader className="absolute bottom-0 left-0 right-0 mx-10 bg-inherit bg-opacity-100 pb-8">
              <div className="flex flex-col gap-2">
                {session.status === "loading" ? "" : ""}
                {session.status === "authenticated" ? <SignOut /> : ""}
                {session.status === "unauthenticated" ? <SignIn /> : ""}
                <Button variant={"destructive"}>Report a bug (soon)</Button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;

const navElements = [
  {
    name: "Home",
    link: "/",
    description: "Home page of Anidey",
    icon: <Home size={20} />,
  },
  {
    name: "Explore",
    link: "/anime",
    description: "Explore our library",
    icon: <Library size={20} />,
  },
  {
    name: "Search",
    link: "/anime/search",
    description: "Search for an anime you like",
    icon: <Search size={20} />,
  },
  {
    name: "Top Airing Anime",
    link: "/anime",
    description: "Choose from the top animes of the season",
    icon: <TrendingUp size={20} />,
  },
  {
    name: "Recently Aired Episodes",
    link: "/anime",
    description: "Check out the recently aired episodes",
    icon: <Sunrise size={20} />,
  },
];
