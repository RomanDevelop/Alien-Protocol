import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Cosmic Trading",
    description:
      "Trade tokens across galaxies with instant, secure, and borderless transactions.",
    pro: 0,
  },
  {
    title: "Intergalactic Governance",
    description:
      "Participate in DAO decisions that shape the future of our cosmic community.",
    pro: 0,
  },
  {
    title: "Universal Wallet",
    description: "One wallet to rule them all — access your assets from anywhere in the universe.",
    pro: 0,
  },
  {
    title: "Stellar Analytics",
    description: "Advanced insights into cosmic market trends, community growth, and token performance.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Explore the Universe of Possibilities
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Alien Protocol provides all the tools you need to navigate the cosmos of Web3, 
        connect with intergalactic communities, and build the future of decentralized finance.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
