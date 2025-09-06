"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Intergalactic</Badge>
            </span>
            <span> Building the Future of Web3! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Ready to explore the
              <span className="text-transparent px-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text">
                Cosmic Universe?
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Join our intergalactic community of Web3 pioneers! 
            Connect with visionaries, developers, and cosmic explorers who believe in the future of decentralized finance. 
            Together we can build the universe! 🚀
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button asChild className="w-5/6 md:w-1/3 text-lg md:text-xl font-bold group/arrow bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 text-white border-0 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 py-4 px-8 rounded-xl neon-glow">
              <Link href="https://alien-5cef4.web.app" target="_blank">
                Get Alien Tokens
                <ArrowRight className="size-6 ml-3 group-hover/arrow:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button asChild className="w-5/6 md:w-1/3 text-lg md:text-xl font-bold group/arrow bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:via-blue-400 hover:to-indigo-500 text-white border-0 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 py-4 px-8 rounded-xl neon-glow">
              <Link href="https://t.me/AlienTokenWorkspace" target="_blank">
                Messenger
                <ArrowRight className="size-6 ml-3 group-hover/arrow:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src={
              theme === "light"
                ? "/hero-image-light.png"
                : "/hero-image-dark.png"
            }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
