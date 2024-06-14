import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/MainPage";

function App() {
  document.title = "XDefiant Italia - Home"

  return (
    <>
      <Header isPage="home" />
      <Main />
      <Footer />
    </>
  )
}

export default App
