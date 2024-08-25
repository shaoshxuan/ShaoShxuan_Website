import { Footer } from "@/components/mainLayout/footer/Footer";
import { Contact } from "@/components/photographerComponents/contact/Contact";
import { Landing } from "@/components/photographerComponents/landing/Landing";

export default function Home() {
  return (
    <main className="">
      <Landing />
      <Contact />
      <Footer />
    </main>
  );
}
