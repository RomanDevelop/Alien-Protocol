import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is ALIEN DAO?",
    answer: "ALIEN DAO is a decentralized complaint and governance platform that empowers people worldwide to raise issues, vote, and achieve change through blockchain technology.",
    value: "item-1",
  },
  {
    question: "How can I participate in ALIEN Protocol?",
    answer: "Connect your MetaMask wallet, acquire ALIEN tokens, and instantly start submitting complaints or voting in the DAO. No technical knowledge required.",
    value: "item-2",
  },
  {
    question: "Is my data safe on ALIEN Protocol?",
    answer: "Yes. All data is stored on Polygon blockchain and IPFS, fully encrypted and immutable. Your privacy and security are our top priorities.",
    value: "item-3",
  },
  {
    question: "How does the voting system work?",
    answer: "ALIEN token holders can vote on proposals and complaints. Each token represents one vote, ensuring fair and democratic decision-making.",
    value: "item-4",
  },
  {
    question: "What makes ALIEN different from other DAOs?",
    answer: "ALIEN focuses specifically on complaint resolution and justice. We combine blockchain transparency with community governance to address real-world issues.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
