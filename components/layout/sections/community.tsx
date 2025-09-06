import DiscordIcon from "@/components/icons/discord-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <DiscordIcon />
                <div>
                  Ready to explore the
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text">
                    Cosmic Universe?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Join our intergalactic community of Web3 pioneers! Connect with visionaries, developers, 
              and cosmic explorers who believe in the future of decentralized finance. Together we can build the universe! 🚀
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a href="https://alien-5cef4.web.app" target="_blank">
                  Get Alien Tokens
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
