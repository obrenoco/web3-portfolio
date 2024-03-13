import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Quote } from "./components/Quote";
import { Markee } from "../../components/Markee";
import { Intro } from "./components/Intro";

export const Main = () => (
  <main className="bg-gray-900 text-white overflow-hidden">
    <Header />
    <Intro />
    <Markee />
    <Services />
    <Quote />
    <Projects />
    <Contact />
    <Footer />
  </main>
);
