import { useState } from "react";
import "./HourSection.css";


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
            <div className="text-center fs-1 text-secondary"><i className="bi bi-clock-fill"></i></div>
            <hr className="border border-secondary border-2 opacity-75 w-25 ms-auto me-auto"></hr>
            <div className="row">
              <div className="text-center text-lg-end col-12 col-lg-6">
                <p className="fs-5 fw-bold m-0">LUN | 18:30 - 23:30</p>
                <p className="fs-5 fw-bold m-0">MAR | 18:30 - 23:30</p>
                <p className="fs-5 fw-bold m-0">MER | 18:30 - 23:30</p>
                <p className="fs-5 fw-bold m-0">GIO | 18:30 - 23:30</p>
                <p className="fs-5 fw-bold m-0">VEN | 18:30 - 23:30</p>
                <p className="fs-5 fw-bold m-0">SAB | 18:30 - 23:30</p>
                <p className="fs-5 fw-bold m-0">DOM | 18:30 - 23:30</p>
              </div>
              <div className="col-12 col-lg-6 d-flex align-items-center">
                <h2 className="ms-auto me-auto ms-lg-0 me-lg-0">I nostri orari</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HourSection;