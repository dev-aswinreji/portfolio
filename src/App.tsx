import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Skills from "./pages/skills/skills";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
