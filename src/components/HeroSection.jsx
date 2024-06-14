import { useState } from "react";
import "./HeroSection.css";

function HeroSection() {
  const [divOpacity, setDivOpacity] = useState("opacity-no");

  function runObserver() {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      setDivOpacity("opacity-no opacity-timing");
      intersectionObserver.unobserve(document.querySelector("#observer-hero"))
    });
    setTimeout(() => {
      intersectionObserver.observe(document.querySelector("#observer-hero"));
    }, 200);
  }

  return (
    <div onLoad={runObserver()} id="observer-hero" className="container-fluid first-section mb-5">
      <div className="container">
        <div className="row h-100">
          
        </div>
      </div>
    </div>
  );
}

export default HeroSection;