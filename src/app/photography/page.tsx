import { Landing } from "@/components/photographerComponents/landing/Landing";
import { Contact } from "@/components/photographerComponents/contact/Contact";
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
