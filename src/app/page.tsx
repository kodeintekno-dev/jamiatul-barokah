import Navbar from "@/components/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Program from "./component/Program";
import Footer from "./component/Footer";
import News from "./component/news";
import SambutanSection from "./component/SambutanSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SambutanSection />
      <Program />
      <News />
      <Footer />
    </>
  );
}
