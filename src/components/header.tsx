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
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import clsx from "clsx";

const Header = () => {
  const isLoggedIn = false;

  return (
    <div className=" mx-auto flex flex-row justify-between pt-8 pb-4 items-center font-medium">
      <div className="text-xl ">
        <Link href={"/"}>
          <h1>Anidey</h1>
        </Link>
      </div>

      <Sheet key={"right"}>
        <SheetTrigger>
          <AlignJustify size={32} />
        </SheetTrigger>
        <SheetContent side={"right"}>
          <ScrollArea
            className={clsx(
              "h-[calc(100vh-170px)]",
              isLoggedIn && "h-[calc(100vh-(_)px)]",
              "pt-5 pb-10 md:pl-6"
            )}
          >
            <nav>
              <ul>
                {navElements.map((element) => (
                  <li className="pb-5" key={element.name}>
                    <SheetHeader>
                      <SheetClose asChild>
                        <Link href={element.link}>
                          <SheetTitle>{element.name}</SheetTitle>
                          <SheetDescription className="pt-1">
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
          <SheetHeader className="absolute bg-opacity-100 bg-inherit bottom-0 left-0 right-0 mx-10 pb-8">
            <Separator className="mb-5 bg-white" />
            <div className="flex flex-col gap-2">
              <Button className="flex-1">Login</Button>
              <h4 className="text-center">or</h4>
              <Button className="flex-1">Sign Up</Button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;

const navElements = [
  {
    name: "Home",
    link: "/",
    description: "Home page of Anidey",
  },
  {
    name: "Explore",
    link: "/anime",
    description: "Explore our library",
  },
  {
    name: "Search",
    link: "/anime/search",
    description: "Search for an anime you like",
  },
  {
    name: "Top Airing Anime",
    link: "/anime",
    description: "Choose from the top animes of the season",
  },
  {
    name: "Recently Aired Episodes",
    link: "/anime",
    description: "Check out the recently aired episodes",
  },
];
