import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Earth Explorer",
    popular: 0,
    price: 12,
    description:
      "Perfect for beginners! Start your cosmic journey with essential trading tools and community access. Ideal for those taking their first steps into the intergalactic Web3 universe.",
    buttonText: "Start Your Journey",
    benefitList: [
      "Basic cosmic trading tools",
      "Access to Earth community",
      "Universal wallet integration",
      "24/7 Earth support",
      "Basic market analytics",
      "Limited token rewards",
      "Community chat access",
    ],
  },
  {
    title: "Galaxy Pioneer",
    popular: 1,
    price: 0,
    description:
      "Earn 100 Alien Tokens by spreading the cosmic word across all social platforms!",
    buttonText: "Start Earning Tokens",
    benefitList: [
      "100 Alien Tokens for social media reposts",
      "Share on Twitter, LinkedIn, Facebook, Instagram",
      "Post on TikTok, YouTube, Reddit, Discord",
      "Tag @alienprotocol for verification",
      "Instant token rewards to your wallet",
      "Unlimited earning potential",
      "Join the viral cosmic movement",
    ],
  },
  {
    title: "Galactic Partner",
    popular: 0,
    price: 0,
    description:
      "Become a founding partner and receive 5% of all issued tokens plus full governance rights in the Alien Protocol intergalactic society.",
    buttonText: "Become a Partner",
    benefitList: [
      "5% of all issued Alien tokens",
      "Full governance rights in Alien Protocol Team",
      "Voting power in all major decisions",
      "Revenue sharing from ecosystem growth",
      "Exclusive partner benefits & privileges",
      "Direct access to core development team",
      "Co-ownership of intergalactic infrastructure",
      "Priority in future token distributions",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Join the Alien Protocol Ecosystem
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        From earning tokens through social sharing to becoming a founding partner with 5% token allocation 
        and full governance rights. Choose your level of involvement in our intergalactic society!
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  <Link href="https://alien-5cef4.web.app" target="_blank">
                    {buttonText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
