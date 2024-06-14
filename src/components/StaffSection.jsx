import { useState } from "react";
import "./StaffSection.css";
import StaffCard from "./StaffCard";
import defaultAvatarImg from "/src/assets/avatar.jpg";

function StaffSection() {

  const StaffList = [
    {
      name: "Nome Cognome",
      position: "Posizione",
      experience: "Esperienza",
      imgUrl: defaultAvatarImg,
    },
    {
      name: "Nome Cognome",
      position: "Posizione",
      experience: "Esperienza",
      imgUrl: defaultAvatarImg,
    },
    {
      name: "Nome Cognome",
      position: "Posizione",
      experience: "Esperienza",
      imgUrl: defaultAvatarImg,
    },
    {
      name: "Nome Cognome",
      position: "Posizione",
      experience: "Esperienza",
      imgUrl: defaultAvatarImg,
    }
  ];

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
      <div onLoad={runObserver()} id="observer-staff" className="bg-personality p-4">
        <div className={"container mb-5 " + divOpacity}>
          <h2 className="text-center mb-4 text-white">Il nostro staff</h2>
          <div className="row">
            <div className="ms-auto col-12 d-flex flex-column flex-lg-row flex-wrap gap-5 justify-content-center align-items-center text-white">
              {StaffList.map((list) => {
                return (
                  <div className="staff-animation" key={Math.random()}>
                    <StaffCard staffName={list.name} staffPosition={list.position} staffExperience={list.experience} staffIMG={list.imgUrl} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default StaffSection;