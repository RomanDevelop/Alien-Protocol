import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Globe",
    title: "Intergalactic Community",
    description:
      "Join a movement that transcends Earth and unites visionaries across the cosmos.",
  },
  {
    icon: "Users",
    title: "Decentralized Governance",
    description:
      "Every member has a voice, every decision shapes the future of our universe.",
  },
  {
    icon: "TrendingUp",
    title: "Infinite Growth",
    description:
      "From presale to DAO, Alien Protocol is designed to expand like the universe itself.",
  },
  {
    icon: "Rocket",
    title: "Cosmic Identity",
    description:
      "Alien Protocol isn't just a token, it's a gateway to the stars and beyond.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Building the Intergalactic Future of Web3
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Alien Protocol is a next-generation intergalactic platform designed to connect communities, 
            empower decentralized governance, and fuel the growth of innovative Web3 ecosystems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
