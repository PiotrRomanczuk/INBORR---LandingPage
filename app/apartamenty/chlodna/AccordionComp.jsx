import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function CustomAccordionItem({ question, answer, value }) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  );
}

export function AccordionComp({ data }) {
  return (
    <Accordion type="multiple" className="w-full">
      {data.map((item) => (
        <CustomAccordionItem key={item.value} {...item} />
      ))}
    </Accordion>
  );
}
