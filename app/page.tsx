import CopyEmailButton from "@/components/copyemail";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import WorkTogether from "@/components/worktogether";
import { ArrowRight, ChevronRight, Circle, CirclePlus } from "lucide-react";
import Link from "next/link";
import projects from "../projects.json";

export default function Home() {
  return (
    <section>
      <Header />
      <section className="mt-4 bg-mainbg rounded-lg p-2 text-gray-300">
        <div className="flex justify-between items-center p-4">
          <div>
            <h1 className="text-xl font-semibold">I&apos;m Rishabh Chauhan</h1>
            <p className="text-sm mt-2">Software Engineer from Delhi, IN.</p>
            <p className="text-sm">Currently working at Deloitte.</p>
            <div className="flex gap-4 mt-4">
              <Button
                asChild
                size="sm"
                className="p-2 text-xs font-semibold bg-secondbg text-white rounded-md hover:bg-medbg"
              >
                <Link href="/contact">
                  <CirclePlus />
                  Hire Me
                </Link>
              </Button>
              <CopyEmailButton />
            </div>
          </div>
          <Avatar className="w-32 h-32 ring-2">
            <AvatarImage src="dp.png" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
        </div>
        <div className="mt-8 rounded-lg bg-medbg p-4">
          <div className="flex justify-between items-center">
            <h1 className="flex gap-2 items-baseline">
              <Circle className="w-2 h-2" />
              Projects
            </h1>
            <Button
              asChild
              size="sm"
              className="p-2 text-xs font-semibold bg-secondbg text-white rounded-md hover:bg-mainbg"
            >
              <Link href="https://github.com/notrishabh" target="_blank">
                View All
                <ArrowRight />
              </Link>
            </Button>
          </div>
          {projects.map((project, i) => (
            <Link
              key={i}
              className="bg-secondbg p-4 rounded-lg mt-4 flex justify-between items-center"
              href={project.url}
              target="_blank"
            >
              <div className="flex gap-6">
                <Avatar className="ring-4 ring-medbg">
                  <AvatarImage src={project.imagesrc} />
                  <AvatarFallback>{project.imagefallback}</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-lg font-semibold">{project.name}</h1>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </div>
              <ChevronRight className="text-gray-500" />
            </Link>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-medbg p-4">
          <h1 className="flex gap-2 items-baseline">
            <Circle className="w-2 h-2" />
            Experience
          </h1>
          <div className="bg-secondbg p-4 rounded-lg mt-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-6">
                <Avatar className="ring-4 ring-medbg">
                  <AvatarImage src="deloitte.jpg" />
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-lg font-semibold">Deloitte</h1>
                  <p className="text-sm text-gray-400">
                    Software Engineer - II
                  </p>
                </div>
              </div>
              <div className="text-sm text-right">
                <p>Jan 2022 - Present</p>
                <p>Pune, IN</p>
              </div>
            </div>
            <ul className="mt-4 text-sm list-disc ml-4">
              <li>
                Partnered with industry leaders like Google, Western Union, and
                Veralto.
              </li>
              <li>
                Directed a team of five engineers to deliver feature-rich web
                applications showcased at Google Cloud Next 23 and CES 2024.
              </li>
              <li>Optimized applications serving over 1 million users.</li>
            </ul>
          </div>
          <div className="bg-secondbg p-4 rounded-lg mt-2">
            <div className="flex justify-between items-start">
              <div className="flex gap-6">
                <Avatar className="ring-4 ring-medbg">
                  <AvatarImage src="ggsipu.jpg" />
                  <AvatarFallback>GG</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-lg font-semibold">GGSIPU</h1>
                  <p className="text-sm text-gray-400">
                    Bachelor of Technology, IT
                  </p>
                </div>
              </div>
              <div className="text-sm text-right">
                <p>Aug 2018 - Jul 2022</p>
                <p>Delhi, IN</p>
              </div>
            </div>
            <ul className="mt-4 text-sm list-disc ml-4">
              <li>Graduated with a CGPA of 8.97</li>
              <li>
                Collaborated on the development of a MERN-based student
                attendance tracking system for the university.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-medbg p-4">
          <h1 className="flex gap-2 items-baseline">
            <Circle className="w-2 h-2" />
            Skills
          </h1>
          <div className="p-4">
            <h1 className="text-lg font-semibold">
              Technologies I am familiar with
            </h1>
            <div className="flex gap-4 mt-4 flex-wrap">
              <Avatar className="ring-4 ring-medbg">
                <AvatarImage src="tech/react.jpg" />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
              <Avatar className="ring-4 ring-medbg">
                <AvatarImage src="tech/ts.jpg" />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <Avatar className="ring-4 ring-medbg">
                <AvatarImage src="tech/js.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <Avatar className="ring-4 ring-medbg">
                <AvatarImage src="tech/sass.jpg" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <Avatar className="ring-4 ring-medbg">
                <AvatarImage src="tech/go.jpg" />
                <AvatarFallback>GO</AvatarFallback>
              </Avatar>
              <Avatar className="ring-4 ring-medbg">
                <AvatarImage src="tech/node.jpg" />
                <AvatarFallback>NOD</AvatarFallback>
              </Avatar>
              <Avatar className="ring-4 ring-medbg">
                <AvatarImage src="tech/sql.png" />
                <AvatarFallback>SQ</AvatarFallback>
              </Avatar>
              <Avatar className="ring-4 ring-medbg">
                <AvatarImage src="tech/flutter.jpg" />
                <AvatarFallback>FL</AvatarFallback>
              </Avatar>
              <Avatar className="ring-4 ring-medbg">
                <AvatarImage src="tech/aws.jpg" />
                <AvatarFallback>AWS</AvatarFallback>
              </Avatar>
              <Avatar className="ring-4 ring-medbg">
                <AvatarImage src="tech/docker.jpg" />
                <AvatarFallback>DO</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <WorkTogether />
        <Footer />
      </section>
    </section>
  );
}
