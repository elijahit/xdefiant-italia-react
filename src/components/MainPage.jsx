import "./MainPage.css";
import HeroSection from "./HeroSection";
import PartnerSection from "./PartnerSection";
import DiscordSection from "./DiscordSection";
import DeliverySection from "./DeliverySection";

function Main() {
  return (
    <main>
      <HeroSection />
      <DeliverySection />
      <DiscordSection />
      <PartnerSection />
    </main>
  );
}

export default Main;