import { SimpleNavbar } from "@/components/layout/Navbar";
import Hero from "@/components/section/Hero";
import Available from "@/components/section/Available";
import Recently from "@/components/section/Recently";
import Cta from "@/components/section/Cta";
import Footer from "@/components/section/Footer";
export default function Home() {
  return (
    <div className="">
      <SimpleNavbar />
      <Hero />
      <Available />
      <Recently />
      <Cta />
      <Footer />
    </div>
  );
}
