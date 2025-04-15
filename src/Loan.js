import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000); // ₹5L
  const [interestRate, setInterestRate] = useState(8);  // % p.a
  const [loanTenure, setLoanTenure] = useState(5);      // in years

  const monthlyRate = interestRate / 12 / 100;
  const months = loanTenure * 12;

  // EMI Calculation
  const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) /
              (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - loanAmount;

  const chartData = {
    labels: ['Principal Amount', 'Total Interest'],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ['#0f2549', '#dc5611'],
        hoverOffset: 10,
      },
    ],
  };

  return (
    <div className="container calcuator rounded">
      <div className="row">
        {/* Input Section */}
        <div className="col-md-6">
          <h4 className="mb-4"><span className="orange">Loan </span>EMI Calculator</h4>

          <div className="mb-3">
            <label className="form-label">Loan Amount (₹)</label>
            <input
              type="number"
              className="form-control"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Interest Rate: {interestRate}%</label>
            <input
              type="range"
              className="form-range slider"
              min="5"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Loan Tenure: {loanTenure} Years</label>
            <input
              type="range"
              className="form-range slider"
              min="1"
              max="30"
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
            />
          </div>

          <h5 className="mb-2">Your Monthly EMI</h5>
          <h2 className="text-primary fw-bold mb-3"><span className='orange'>₹ {emi.toFixed(0).toLocaleString()}</span></h2>
          <p><strong>Total Payment:</strong> ₹ {totalPayment.toFixed(0).toLocaleString()}</p>
        </div>

        {/* Result Section */}
        <div className="col-md-6 text-center">
          <Doughnut data={chartData} />

          <div className="mt-4 text-start px-4">
            <p><strong>Loan Amount:</strong> ₹ {loanAmount.toLocaleString()}</p>
            <p><strong>Total Interest:</strong> ₹ {totalInterest.toFixed(0).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
