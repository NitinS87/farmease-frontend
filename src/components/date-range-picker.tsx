"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getDictionary } from "@/lib/get-dictionary";

export function DatePickerWithRange({
  className,
  vehicle_details,
  price,
}: React.HTMLAttributes<HTMLDivElement> & {
  vehicle_details: Awaited<
    ReturnType<typeof getDictionary>
  >["vehicles_details"];
  price: number;
}) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 1),
  });

  // Calculate number of days between the selected dates
  const numberOfDays =
    date && date.to && date.from
      ? Math.round(
          (date.to.getTime() - date.from.getTime()) / (1000 * 60 * 60 * 24)
        )
      : 0;

  // console.log(numberOfDays);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>{vehicle_details.select_dates}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
      {/* Book Now */}
      <Button variant={"default"} className="w-[300px]">
        {vehicle_details.book} - ₹{numberOfDays * price || "Select Dates"}
      </Button>
    </div>
  );
}
