import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Filterscheckbox } from "./Filterscheckbox";

export function Filters() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Departure time</AccordionTrigger>
        <AccordionContent>
          <Filterscheckbox />
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="item-2">
        <AccordionTrigger>Departure time</AccordionTrigger>
        <AccordionContent>
          <Filterscheckbox />
        </AccordionContent>
      </AccordionItem> */}
    </Accordion>
  );
}
