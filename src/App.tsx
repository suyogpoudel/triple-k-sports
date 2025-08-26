import Collaborations from "./components/Collaborations";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Wonders from "./components/Wonders";

const App = () => {
  return (
    <div>
      <Navbar />

      <section>
        <Home />
      </section>

      <section id="featured">
        <Featured />
      </section>

      <section id="collaborations">
        <Collaborations />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="wonders">
        <Wonders />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
