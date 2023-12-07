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

// Example usage
const accordionData = [
  {
    value: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    question: "Is it styled?",
    answer:
      "Yes. It comes with default styles that match the other components' aesthetic.",
  },
  {
    value: "item-3",
    question: "Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];
