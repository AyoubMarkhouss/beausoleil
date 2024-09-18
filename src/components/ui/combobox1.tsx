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
    value: "Casablanca",
    label: "Casablanca",
  },
  {
    value: "Rabat",
    label: "Rabat",
  },
  {
    value: "Marrakech",
    label: "Marrakech",
  },
  {
    value: "Agadir",
    label: "Agadir",
  },
  {
    value: "Essaouira",
    label: "Essaouira",
  },

  {
    value: "Tanger",
    label: "Tanger",
  },
  {
    value: "Fes",
    label: "Fes",
  },
];

export function ComboboxDemo1() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="flex w-full justify-evenly"
        >
          {value ? (
            <MdOutlinePlace size={23} className="fill-bigtitle" />
          ) : (
            <MdOutlinePlace size={23} color="gray" />
          )}

          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Your location"}
          {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" className="w-[270px] bg-white p-0">
        <Command>
          <CommandInput placeholder="Search places.." />
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
                      "mr-2 h-4 w-4 stroke-bigtitle",
                      value === framework.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <MdOutlinePlace size={23} className="fill-bigtitle mr-3" />
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
