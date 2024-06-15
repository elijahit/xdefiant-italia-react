import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
