import "./MainPage.css";
import HeroSection from "../components/HeroSection";
import PartnerSection from "../components/PartnerSection";
import DiscordSection from "../components/DiscordSection";
import DeliverySection from "../components/DeliverySection";
import {Helmet} from "react-helmet";

function Main() {
  return (
    <main>
      <Helmet>
        <title>XDefiant Italia - Home</title>
      </Helmet>
      <HeroSection />
      <DeliverySection />
      <DiscordSection />
      <PartnerSection />
    </main>
  );
}

export default Main;