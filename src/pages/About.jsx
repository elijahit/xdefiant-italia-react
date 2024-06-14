import "./About.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  document.title = "Pizzeria - Chi Siamo"
  return (
    <>
      <Header isPage="about"/>
      <p>test menu</p>
      <Footer />
    </>
  );
};

export default About;