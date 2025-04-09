import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import phone from './phone.png';
import user from './USER.png';
import secure from './secure.png';
import panel from './panel.png';
import time from './time.png';
import ios from './ios.png';
import play from './play.png';
import video from './updatephone.mp4';

gsap.registerPlugin(ScrollTrigger);

const Phone = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = sectionRef.current.querySelectorAll(".fade-up");

    sections.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none"
          }
        }
      );
    });
  }, []);

  return (
    <section id="phoneui" ref={sectionRef}>
      <div className="container-fluid">
        <div className="row align-items-center text-center text-md-start">
          {/* LEFT COLUMN */}
          <div className="col-md-4 order-2 order-md-1 fade-up">
            <div className="mb-4">
              <img src={user} alt="User Interface" className="img-fluid iconimage mb-2" />
              <h4>User-Friendly Interface</h4>
              <p>Each bite delivers energy, making it a guilt-free choice for daily snacking. Balance your diet without sacrificing flavour.</p>
            </div>
            <div>
              <img src={secure} alt="Notifications" className="img-fluid iconimage mb-2" />
              <h4>Real-Time Notifications</h4>
              <p>Enjoy less LDL (bad cholesterol) for a snack that tastes good and does good for your cholesterol levels.</p>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="col-md-4 order-1 order-md-2 d-flex justify-content-center mb-4 mb-md-0 flex-column align-items-center">
            <img src={phone} alt="Phone UI" className="img-fluid apkimage mb-3" />
            <video
              width="100%"
              autoPlay
              muted
              loop
              playsInline
              className="rounded"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-4 order-3 text-md-end fade-up">
            <div className="mb-4">
              <img src={time} alt="Secure Transactions" className="img-fluid iconimage mb-2" />
              <h4>Secure Transactions</h4>
              <p>Each bite delivers energy, making it a guilt-free choice for daily snacking.</p>
            </div>
            <div>
              <img src={panel} alt="Dashboard" className="img-fluid iconimage mb-2" />
              <h4>Personalized Dashboard</h4>
              <p>Enjoy less LDL (bad cholesterol) for a snack that tastes good and does good.</p>
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="androdbtn d-flex justify-content-center gap-3 mt-4 fade-up">
          <img src={ios} alt="iOS" className="img-fluid" style={{ maxWidth: "150px" }} />
          <img src={play} alt="Play Store" className="img-fluid" style={{ maxWidth: "150px" }} />
        </div>
      </div>
    </section>
  );
};

export default Phone;
