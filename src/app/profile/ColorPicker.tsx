"use client";

import { useState } from "react";
import { HexColorPicker } from "react-colorful";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";

export function ColorPicker({
  name,
  image,
  bannerColor,
}: {
  name: string;
  image: string;
  bannerColor: string;
}) {
  const [color, setColor] = useState(bannerColor ? bannerColor : "#000000");

  function onClick() {
    localStorage.setItem("bannerColor", color);
  }

  return (
    <div className="flex flex-col">
      <div className="relative">
        <div
          className={"h-[130px] p-1 md:h-[150px]"}
          style={{ backgroundColor: color }}
        ></div>

        <div className="absolute left-5 top-3/4 h-20 w-20 overflow-hidden rounded-full border-2 border-red-300 md:top-2/4 md:h-32 md:w-32">
          <Image src={image} alt={name} objectFit="cover" fill={true} />
        </div>
      </div>

      <div className="ml-auto mr-5 mt-5 justify-end">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="secondary" className="rounded-2xl" size={"sm"}>
              Change Banner color
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Banner color</DrawerTitle>
                <DrawerDescription>
                  Choose a color for your banner.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="mb-3 mt-3 flex w-full justify-center">
                  <HexColorPicker color={color} onChange={setColor} />
                </div>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button onClick={onClick}>Submit</Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
