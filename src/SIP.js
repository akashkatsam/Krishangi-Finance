import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const SIP = () => {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(12);

  const months = years * 12;
  const monthlyRate = rate / 12 / 100;

  let futureValue = 0;
  for (let i = 1; i <= months; i++) {
    futureValue = (futureValue + monthly) * (1 + monthlyRate);
  }

  const investedAmount = monthly * months;
  const estimatedReturns = futureValue - investedAmount;

  const data = {
    labels: ['Invested Amount', 'Est. Returns'],
    datasets: [
      {
        data: [investedAmount, estimatedReturns],
        backgroundColor: ['#0f2549', '#dc5611'],
      },
    ],
  };

  return (
    <div className="container calcuator  rounded bg-white">
      <div className="row">
        {/* Left Side */}
        <div className="col-md-6">
          <h4 className="mb-4">SIP Returns Estimator</h4>
          <div className="mb-3">
            <label className="form-label">Enter Amount (₹)</label>
            <input
              type="number"
              className="form-control"
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Select Duration: {years} Years</label>
            <input
              type="range"
              className="form-range"
              min="1"
              max="30"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Expected Rate of Return: {rate}%</label>
            <input
              type="range"
              className="form-range"
              min="8"
              max="30"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
                      <h5 className="titlecal">The total value of your investment after <strong>{years} Years</strong> will be</h5>
                      <h2 className="mb-4">₹ {futureValue.toLocaleString()}</h2>

          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-6 align-self-center text-center">
          <div className="mb-4">
          </div>

          <Doughnut data={data} />

  
          <div className="text-start rightcal px-4">
            <p><span className="text-warning fw-bold">Invested Amount:</span> ₹ {investedAmount.toLocaleString()}</p>
            <p><span className="text-primary fw-bold">Est. Returns:</span> ₹ {estimatedReturns.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIP;
