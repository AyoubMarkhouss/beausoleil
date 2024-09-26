"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdOutlinePlace } from "react-icons/md";

const frameworks = [
  {
    value: "French",
    label: "French",
  },
  {
    value: "English",
    label: "English",
  },
  {
    value: "Chinese",
    label: "Chinese",
  },
];

export function Languages() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="cabinet flex transform cursor-pointer items-center gap-x-3 text-xl transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Language"}
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" className="w-[160px] bg-white p-0">
        <Command>
          {/* <CommandInput placeholder="Search places.." /> */}
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  className="cursor-pointer border-b py-4"
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      " stroke-bigtitle",
                      value === framework.value ? "opacity-100" : "opacity-0",
                    )}
                  />

                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
