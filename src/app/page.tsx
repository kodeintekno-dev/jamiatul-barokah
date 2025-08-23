import Navbar from "@/components/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Program from "./component/Program";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Program />
    </>
  );
}
