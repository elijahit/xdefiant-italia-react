import { useState } from "react";
import "./DiscordSection.css";
import StaffCard from "./StaffCard";
import discordLogo from "/src/assets/discord-logo.webp";

function StaffSection() {

  const [divOpacity, setDivOpacity] = useState("opacity-no");

  function runObserver() {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      setDivOpacity("opacity-no opacity-timing");
      intersectionObserver.unobserve(document.querySelector("#observer-staff"))
    });
    setTimeout(() => {
      intersectionObserver.observe(document.querySelector("#observer-staff"));
    }, 200);
  }

  return (
    <>
      <div onLoad={runObserver()} id="observer-staff" className="bg-personality p-4 mb-5">
        <div className={"container mb-5 " + divOpacity}>
          <h2 className="text-center mb-4 text-white">La nostra community su Discord</h2>
          <div className="col-12 d-flex flex-column align-items-center">
            <a href="https://discord.com/servers/xdefiant-italia-1124809941744619602">
              <img src={discordLogo} width="300" alt="Logo di Discord" className="" />
            </a>
            <p className="text-white">Unisciti alla nostra community su Discord e scopri un mondo di appassionati di XDefiant! Sulla nostra piattaforma. Trova giocatori con cui confrontarti e giocare insieme</p>
          </div>
        </div>
      </div>
    </>
  );

};

export default StaffSection;