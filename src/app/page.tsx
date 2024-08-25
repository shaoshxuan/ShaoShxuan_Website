import { Contact } from "@/components/developerComponents/contact/Contact";
import { Landing } from "@/components/developerComponents/landing/Landing";
import { Footer } from "@/components/mainLayout/footer/Footer";

export default function Home() {
  return (
    <main className="">
      <Landing />
      <Contact />
      <Footer />
    </main>
  );
}
