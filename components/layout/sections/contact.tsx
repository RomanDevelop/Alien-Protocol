"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Alien Protocol Inquiry",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email-simple', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        // Fallback to mailto if API fails
        const { firstName, lastName, email, subject, message } = values;
        const mailToLink = `mailto:alien.token.workspace@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailToLink;
        setSubmitStatus('success');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Fallback to mailto if API fails
      const { firstName, lastName, email, subject, message } = values;
      const mailToLink = `mailto:alien.token.workspace@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailToLink;
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contact
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold">Join the Cosmic Community</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Ready to explore the intergalactic future of Web3? Connect with our team 
            and join thousands of cosmic pioneers across the universe.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 mb-1">
                <Building2 />
                <div className="font-bold">Find us</div>
              </div>

              <div>Cosmic HQ – Intergalactic</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Phone />
                <div className="font-bold">Call us</div>
              </div>

              <div>+1 (555) 234-8899</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Mail />
                <div className="font-bold">Mail US</div>
              </div>

              <div>alien.token.workspace@gmail.com</div>
            </div>

            <div>
              <div className="flex gap-2">
                <Clock />
                <div className="font-bold">Visit us</div>
              </div>

              <div>
                <div>24/7 - Always Online</div>
                <div>Intergalactic Community</div>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:!flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Alien Protocol Inquiry"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Tell us about your interest in Alien Protocol..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-4">
                  <Button 
                    type="submit" 
                    className="mt-4 w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  
                  {submitStatus === 'success' && (
                    <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
                      Message sent successfully! Your email client should open with a pre-filled message to alien.token.workspace@gmail.com
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                      Failed to send message. Please try again or contact us directly.
                    </div>
                  )}
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Or get Alien Tokens directly:
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="https://alien-5cef4.web.app" target="_blank">
                        Get Alien Tokens
                      </Link>
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
