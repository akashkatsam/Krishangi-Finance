import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import phone from './phone.png'
import user from './USER.png'
import secure from './secure.png'
import panel from './panel.png'
import time from './time.png'
import ios from './ios.png'
import play from './play.png'
import video from './updatephone.mp4'
const Phone = () => {
  return (
    <section id="phoneui">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-4 text-md-end mb-4">
            <div className="mb-c-30">
              <img src={user} className="img-fluid iconimage" />
              <h4>User-Friendly Interface</h4>
              <p>Each bite delivers energy, making it a guilt-free
                choice for daily snacking. Balance your diet without
                sacrificing flavour.</p>
            </div>
            <div>
              <img src={secure} className="img-fluid iconimage" />
              <h4>Real-Time Notifications</h4>
              <p>Enjoy less LDL (bad cholesterol) for a snack that
                tastes good and does good for your cholesterol
                levels.</p>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center">
            <img src={phone} className="img-fluid apkimage" />
            <video width="100%"  autoPlay
                   muted
                   loop
                   playsInline>
                   <source src={video} type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
                 
          </div>

          <div className="col-md-4 text-md-end mb-4">
            <div className="mb-c-30">
              <img src={time} className="img-fluid iconimage" />
              <h4>Secure Transactions
              </h4>
              <p>Each bite delivers energy, making it a guilt-free choice for daily snackingoice for daily snacking.
              </p>
            </div>
            <div>
              <img src={panel} className="img-fluid iconimage" />
              <h4>Personalized Dashboard
              </h4>
              <p>Enjoy less LDL (bad cholesterol) for a snack that tastes good and does good.
              </p>
            </div>
          </div>
        </div>

        <div className="androdbtn">
          <img src={ios} className="img-fluid" />
          <img src={play} className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Phone;
