import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const SIP = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000); // ₹10,000 per month
  const [annualRate, setAnnualRate] = useState(12); // Annual interest rate in %
  const [investmentPeriod, setInvestmentPeriod] = useState(10); // Investment period in years

  const months = investmentPeriod * 12;
  const monthlyRate = annualRate / 12 / 100;

  // SIP Future Value formula
  const futureValue = monthlyInvestment *
                      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
                      (1 + monthlyRate);

  const totalInvested = monthlyInvestment * months;
  const estimatedReturns = futureValue - totalInvested;

  const chartData = {
    labels: ['Invested Amount', 'Estimated Returns'],
    datasets: [{
      data: [totalInvested, estimatedReturns],
      backgroundColor: ['#0f2549', '#dc5611'],
      hoverOffset: 8,
    }],
  };

  return (
    <div className="container calcuator rounded">
      <div className="row">
        {/* Input Section */}
        <div className="col-md-6">
          <h4 className="mb-4"><span className="orange">SIP </span>Calculator</h4>

          <div className="mb-3">
            <label className="form-label">Monthly Investment (₹)</label>
            <input
              type="number"
              className="form-control"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Expected Annual Return: {annualRate}%</label>
            <input
              type="range"
              className="form-range slider"
              min="1"
              max="30"
              step="0.1"
              value={annualRate}
              onChange={(e) => setAnnualRate(Number(e.target.value))}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Investment Duration: {investmentPeriod} Years</label>
            <input
              type="range"
              className="form-range slider"
              min="1"
              max="30"
              value={investmentPeriod}
              onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
            />
          </div>

          <h5 className="mb-2">Estimated Maturity Value</h5>
          <h2 className="text-primary fw-bold mb-3"><span className='orange'>₹ {futureValue.toFixed(0).toLocaleString()}</span></h2>
          <p><strong>Total Investment:</strong> ₹ {totalInvested.toLocaleString()}</p>
        </div>

        {/* Chart Section */}
        <div className="col-md-6 text-center">
          <Doughnut data={chartData} />

          <div className="mt-4 text-start px-4">
            <p><strong>Invested Amount:</strong> ₹ {totalInvested.toLocaleString()}</p>
            <p><strong>Estimated Returns:</strong> ₹ {estimatedReturns.toFixed(0).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIP;
