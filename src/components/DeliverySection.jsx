import { useState } from "react";
import "./DeliverySection.css";
import pizzaDeliveryImage from "/src/assets/pizzadelivery.png";

function DeliverySection() {
  const [divOpacity, setDivOpacity] = useState("opacity-no");
  const [divOpacityLeft, setDivOpacityLeft] = useState("opacity-no-left");
  const [divOpacityRight, setDivOpacityRight] = useState("opacity-no-right");


  function runObserver() {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      setDivOpacity("opacity-no opacity-timing");
      setDivOpacityLeft("opacity-no-left opacity-timing-left");
      setDivOpacityRight("opacity-no-right opacity-timing-right");
      intersectionObserver.unobserve(document.querySelector("#observer-delivery"))
    });
    setTimeout(() => {
      intersectionObserver.observe(document.querySelector("#observer-delivery"));
    }, 200);
  }

  return (
    <>
      <div onLoad={runObserver()} id="observer-delivery" className="container mb-5">
        <div className={"delivery-style mb-4 "+ divOpacityLeft}>
          <h2 className="fs-1 fw-bold m-0 p-0 text-center text-lg-start mb-1 mb-lg-0">STAY HOME</h2>
          <p className="fs-2 fw-bold p-0 m-0 text-center text-lg-start">WE DELIVERY</p>
        </div>
        <div className="row">
          <div className={"col-12 col-lg-6 "+ divOpacity}>
            <p className="fs-5">
              <span className="fw-bold fs-4">I</span>l vostro tempo è prezioso, e lo comprendiamo. Con il nostro servizio di consegna, garantiamo tempi rapidi e puntuali, in modo da poter godere della vostra pizza appena sfornata nel momento in cui ne avete più voglia.
            </p>
            <p className="fs-5"><span className="fw-bold">Assaporate il Gusto a Casa Vostra</span>: Le Consegne dalla Nostra Pizzeria</p>
          </div>
          <div className={"col-12 col-lg-6 d-flex flex-column align-items-center " + divOpacityRight}>
            <img src={pizzaDeliveryImage} width="200" className="img-fluid" alt="" />
            <p className="fw-bold fs-3"><i className="bi bi-telephone-fill"></i> 000 000 0000</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliverySection;