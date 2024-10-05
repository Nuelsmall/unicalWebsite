import Campus from "./components/Campus/Campus";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Program from "./components/programs/Program";
import Testimonail from "./components/testimonial/Testimonail";
import Title from "./components/title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title='Our Program' subTitle='What we offer'/>
        <Program />
        <About />
        <Title title='Gallery' subTitle='Campus Photos'/>
        <Campus />
        <Title title='Testimonials' subTitle='What are students says'/>
        <Testimonail />
        <Title title='Contact Us' subTitle='Get in Touch'/>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
