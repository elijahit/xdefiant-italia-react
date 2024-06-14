import { useState } from "react";
import "./PartnerSection.css";


function HourSection() {
  const [divOpacity, setDivOpacity] = useState("container mb-5 opacity-no");
  // function test () {
  //   setDivOpacity("container mb-5 opacity-no opacity-timing");
  // }
function runObserver() {
  const intersectionObserver = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0) return;
    setDivOpacity("container mb-5 opacity-no opacity-timing");
    intersectionObserver.unobserve(document.querySelector("#observer-hours"))
  });
  setTimeout(() => {
    intersectionObserver.observe(document.querySelector("#observer-hours"));
  }, 200);
}
  return (
    <>
      <div onLoad={runObserver()} id="observer-hours" className={divOpacity}>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">I nostri partner ufficiali</h2>
            <p className="text-center fs-4">Ancora nessun partner si è unito a noi, che aspetti? Aiuta XDefiant Italia a crescere</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default HourSection;