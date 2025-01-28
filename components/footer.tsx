import { Circle, Github, Heart, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <section>
      <div className="bg-medbg p-4 flex items-center justify-between rounded-lg">
        <h1 className="flex gap-2 items-baseline">
          <Circle className="w-2 h-2" />
          Follow me
        </h1>
        <div className="flex gap-4">
          <Button
            asChild
            className="p-2 w-full bg-mainbg text-white hover:bg-secondbg rounded-full"
          >
            <Link href="https://github.com/notrishabh" target="_blank">
              <Github />
            </Link>
          </Button>
          <Button
            asChild
            className="p-2 w-full bg-mainbg text-white hover:bg-secondbg rounded-full"
          >
            <Link href="https://www.linkedin.com/in/rishabh107" target="_blank">
              <Linkedin />
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-2 bg-medbg flex justify-center items-center p-8 rounded-lg text-xs gap-1">
        Made by Rishabh with <Heart className="w-3 h-3 mb-1" />
      </div>
    </section>
  );
}
