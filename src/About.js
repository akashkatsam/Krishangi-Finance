import React from "react";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <section id="aboutstats">
        <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
         <div className="counterleft">
         <h2>Krishangi Finance</h2>
          <p>
            Krishangi Finance is a financial solutions firm dedicated to helping
            individuals and businesses achieve long-term financial security. We
            specialize in wealth management, investment planning, and risk
            protection, tailored strategies that align with your goal.
          </p>
          <p>
            Our expertise ensures smart decision-making, optimized investment,
            and a secure future.
          </p>
          <button className="btn btn-theme">Read More →</button>
         </div>
        </div>
        <div className="col-md-6 align-self-center">
          <div className="row text-center">
            <div className="col-6">
             <div className="counter">
             <h3>
                <CountUp start={0} end={20} duration={3} />+
              </h3>
              <p>Years Experience</p>
             </div>
            </div>
            <div className="col-6">
            <div className="counter">

              <h3>
                <CountUp start={0} end={500} duration={3} />Cr+
              </h3>
              <p>Wealth Managed</p>
            </div>
            </div>
           
          </div>


<div className="counterseparator"></div>
          <div className="row text-center">

          <div className="col-6">
            <div className="counter">

              <h3>
                <CountUp start={0} end={100} duration={3} />+
              </h3>
              <p>HNIs and Professionals</p>
            </div>
            </div>
            <div className="col-6">
            <div className="counter">

              <h3>
                <CountUp start={0} end={5000} duration={3} />+
              </h3>
              <p>Retail Investors</p>
            </div>
            </div>

            </div>
        </div>
      </div>
    </div>

    </section>
  );
};

export default About;
