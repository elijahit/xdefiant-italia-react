import './App.css';
import './scss/custom.scss';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/MainPage";

function App() {

  return (
    <>
      <Header isPage="home" />
      <Main />
      <Footer />
    </>
  )
}

export default App
