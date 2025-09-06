import { Separator } from "@/components/ui/separator";
import { Rocket } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Rocket className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />

              <h3 className="text-2xl">Alien Protocol</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link href="https://github.com/RomanDevelop/alien-workspace" className="opacity-60 hover:opacity-100">
                Github
              </Link>
            </div>

            <div>
              <Link href="https://x.com/alien_protocol" className="opacity-60 hover:opacity-100">
                Twitter
              </Link>
            </div>

            <div>
              <Link href="https://www.linkedin.com/company/seamens-club-ai-hub/?viewAsMember=true" className="opacity-60 hover:opacity-100">
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Platforms</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Web App
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Mobile App
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                API
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Community</h3>
            <div>
              <Link href="https://discord.gg/alien-protocol" className="opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>

            <div>
              <Link href="https://t.me/alien_protocol" className="opacity-60 hover:opacity-100">
                Telegram
              </Link>
            </div>

            <div>
              <Link href="https://reddit.com/r/alien_protocol" className="opacity-60 hover:opacity-100">
                Reddit
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2025 Alien Protocol. All rights reserved.
            <Link
              target="_blank"
              href="https://github.com/alien-protocol"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Built with ❤️ for the cosmos
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
