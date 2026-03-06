import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionItemData {
  value: string;
  question: string;
  answer: string;
}

interface CustomAccordionItemProps {
  question: string;
  answer: string;
  value: string;
}

interface AccordionCompProps {
  data: AccordionItemData[];
}

function CustomAccordionItem({ question, answer, value }: CustomAccordionItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="justify-items-start">
        {question}
      </AccordionTrigger>
      <AccordionContent className="font-light">{answer}</AccordionContent>
    </AccordionItem>
  );
}

export function AccordionComp({ data }: AccordionCompProps) {
  return (
    <Accordion type="multiple" className="w-full">
      {data.map((item) => (
        <CustomAccordionItem key={item.value} {...item} />
      ))}
    </Accordion>
  );
}
