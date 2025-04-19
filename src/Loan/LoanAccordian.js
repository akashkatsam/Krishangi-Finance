import React, { useState } from "react";



const LoanAccordian = () => {

  return (
    <section id="accordionservice">
    <div className="container">
      <h3>Our Loan Offerings</h3>
      <p className="paraaccordian">At Krishangi Finance, we offer a wide range of secured and unsecured loan options to meet
     <br></br> diverse financial needs:</p>
      

      

      <div className="contentcard">
        <h4>1.  Home Loans
        </h4>
        <p>Affordable financing to buy, build, or renovate your dream home.
Flexible tenure options and low interest rates.
</p>



        

      </div><div className="contentcard">
        <h4>2.  Business Loans

        </h4>
        <p>Funding solutions for business expansion, working capital, and asset purchases.
Customized loans for SMEs and large enterprises.
        </p>
      </div>


      <div className="contentcard">
        <h4> 3.  Personal Loans

        </h4>
        <p>Instant funds for medical expenses, travel, weddings, or emergencies.
        Unsecured loans with flexible repayment plans.

        </p>
      </div>



      <div className="contentcard">
        <h4>4. Loan Against Property
        </h4>
        <p>Unlock the value of your property to secure high-value funding. Lower interest rates compared to unsecured loans.



        </p>
      </div>

      
      <div className="contentcard">
        <h4>5. Vehicle Loans

        </h4>
        <p>Financing options for new and used cars, bikes, and commercial vehicles.

        Competitive EMIs and easy repayment terms.


        </p>
      </div>
    </div>
 

      
    </section>
  );
};

export default LoanAccordian;
