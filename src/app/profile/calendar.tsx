"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Cake } from "lucide-react";

const CalendarComponent = () => {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="relative w-full justify-start rounded-2xl pl-10">
            <Cake className="absolute left-0 mb-1 ml-2" />
            <span>
              {date ? (
                <span>{date.toString().split(" ").slice(0, 3).join(" ")}</span>
              ) : (
                <span className="text-left">Pick a date</span>
              )}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={new Date()}
            onSelect={(date) => {
              //   console.log(date);
              setDate(date);
            }}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CalendarComponent;
