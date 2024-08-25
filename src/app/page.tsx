import { Landing } from "@/components/developerComponents/landing/Landing";
import { Contact } from "@/components/developerComponents/contact/Contact";
import { Footer } from "@/components/mainLayout/footer/Footer";
import { Experience } from "@/components/developerComponents/experience/Experience";
import { Projects } from "@/components/developerComponents/projects/Projects";

export default function Home() {
  return (
    <main className="">
      <Landing />
      <Experience />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </main>
  );
}
