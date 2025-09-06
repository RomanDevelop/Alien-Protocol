import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Rocket",
    title: "Cosmic Identity",
    description:
      "Alien Protocol isn't just a token, it's a gateway to the stars and beyond.",
  },
  {
    icon: "Globe",
    title: "Universal Access",
    description:
      "No borders, no limits, no restrictions — anyone can join from anywhere in the universe.",
  },
  {
    icon: "Users",
    title: "Decentralized Power",
    description:
      "The community drives the mission, decisions, and growth of our intergalactic ecosystem.",
  },
  {
    icon: "TrendingUp",
    title: "Scalable Ecosystem",
    description:
      "From token sales to DAO governance, everything in one place, designed to expand infinitely.",
  },
  {
    icon: "Star",
    title: "Future-Oriented",
    description:
      "Designed for the intergalactic age of finance and beyond, built for tomorrow's pioneers.",
  },
  {
    icon: "Zap",
    title: "Lightning Fast",
    description:
      "Instant transactions, real-time governance, and seamless user experience across galaxies.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Your Gateway to the Cosmos of Finance
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Beyond Borders. Beyond Planets. Beyond Web3. 
        From Earth to the Stars — Powered by Alien Protocol.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
