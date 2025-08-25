import Navbar from "@/components/Navbar";
import HeroModern from "@/components/HeroModern";
import Memberships from "@/components/Memberships";
import About from "@/components/About";
import Services from "@/components/Services";
import Countries from "@/components/Countries";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroModern />
        <Memberships />
        <About />
        <Services />
        <Countries />
        <Team />
        <Reviews />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;