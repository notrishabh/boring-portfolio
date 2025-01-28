import Footer from "@/components/footer";
import Header from "@/components/header";
import WorkTogether from "@/components/worktogether";
import Image from "next/image";

export default function About() {
  return (
    <section>
      <Header />
      <section className="mt-4 bg-mainbg rounded-lg p-2 text-gray-300">
        <div className="p-4 space-y-4">
          <h1 className="text-2xl font-semibold">Hi, I&apos;m Rishabh</h1>
          <p className="leading-relaxed">
            I am a software engineer with over 3 years of experience, currently
            based in Pune, India. Passionate about crafting modern user
            experiences that truly make an impact, I strive to deliver
            cutting-edge applications that enhance web usability. I enjoy
            tackling challenges that push me to think critically and innovate.
          </p>
          <div className="flex justify-center">
            <Image
              src="/full-dp.jpg"
              width={0}
              height={0}
              sizes={"100vw"}
              className="rounded-lg w-96 aspect-square ring-8 ring-mainborder"
              alt="Rishabh Chauhan"
            />
          </div>
          <div className="pt-4 space-y-4">
            <h1 className="text-2xl font-semibold">More About me</h1>
            <p>
              Rishabh holds a backelor&apos;s degree in Technology from Guru
              Gobind Singh Indraprastha University, Delhi and has a relentless
              drive for staying up-to-date with the latest technologies.
            </p>
            <p>
              When not coding, you can find me playing video games or exploring
              bakeries around the town. Rishabh firmly believes in maintaining a
              healthy work life balance, making sure to take breaks and
              reenergize his creativity.
            </p>
          </div>
        </div>
        <WorkTogether />
        <Footer />
      </section>
    </section>
  );
}
