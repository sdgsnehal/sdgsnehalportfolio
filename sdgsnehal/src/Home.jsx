import DrawerAppBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <div>
      <DrawerAppBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
