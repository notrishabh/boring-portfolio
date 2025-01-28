"use client";

import emailjs from "emailjs-com";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const ContactForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.log("Invalid env keys");
      return;
    }
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      },
    );
    e.target.reset();
  };
  return (
    <section>
      <Header />
      <div className="mt-4 bg-mainbg rounded-lg p-2 text-gray-300">
        <form onSubmit={handleOnSubmit} className="py-8 px-4">
          <h1 className="text-2xl font-semibold">Get in touch</h1>
          <h2 className="text-sm">Got an idea or role for me? Reach out now</h2>
          <div className="mt-4">
            <div className="flex gap-2 mb-2">
              <Input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Name"
                className="bg-medbg"
                required
              />

              <Input
                type="email"
                id="from_email"
                name="from_email"
                placeholder="Email Address"
                className="bg-medbg"
                required
              />
            </div>

            <div>
              <Textarea
                name="message"
                rows={8}
                cols={30}
                placeholder="Message"
                className="bg-medbg"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-secondbg text-white font-semibold mt-2 hover:bg-medbg"
            >
              Submit
            </Button>
          </div>
        </form>
        <Footer />
      </div>
    </section>
  );
};

export default ContactForm;
