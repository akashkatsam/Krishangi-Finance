import React from "react";
import CountUp from "react-countup";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from './krishangiicon.png'
const About = () => {
  return (
  <>
  
  <section id="aboutstats">
        <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
         <div className="counterleft">
         <h2> <img src={icon} className="img-fluid" />  <span>Krishangi</span> Finance</h2>
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
          <button className="btn btn-theme">Read More &nbsp;
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0.999999C14 0.447714 13.5523 -8.61581e-07 13 -1.11446e-06L4 -3.13672e-07C3.44772 -6.50847e-07 3 0.447715 3 0.999999C3 1.55228 3.44772 2 4 2L12 2L12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10L14 0.999999ZM1.70711 13.7071L13.7071 1.70711L12.2929 0.292893L0.292893 12.2929L1.70711 13.7071Z" fill="white"/>
</svg>
</button>
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
    
    
    
   </>
  );
};

export default About;
