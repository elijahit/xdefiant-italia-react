import "./MainPage.css";
import HeroSection from "./HeroSection";
import HourSection from "./HourSection";
import StaffSection from "./StaffSection";
import DeliverySection from "./DeliverySection";

function Main() {
  return (
    <main>
      <HeroSection />
      <DeliverySection />
      <StaffSection />
      <HourSection />
    </main>
  );
}

export default Main;