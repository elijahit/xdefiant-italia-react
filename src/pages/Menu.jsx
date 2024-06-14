import "./Menu.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

function Menu() {
  document.title = "Pizzeria - Menù"
  return (
    <>
      <Header isPage="menu"/>
      <p>test menu</p>
      <Footer />
    </>
  );
};

export default Menu;