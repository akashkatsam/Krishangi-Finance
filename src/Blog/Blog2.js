import React from 'react';
import blogImage from './banner2.jpg'; // Replace with your image path
import Header from '../Header';
import Footer from '../Footer';
import icon from '../krishangiicon.png';

const Blog2 = () => {
  return (
    <>
      <Header />

      <div id='form-ui'>
        <div className="blogsection">
          <img src={blogImage} className="card-img-top" alt="Diversified Portfolio" />
          <div className="blogdetails">
            <h1 className="blog-title"><img src={icon} className='img-fluid abstracticon' /> How to Build a Diversified Portfolio That Matches Your Financial Goals</h1>
            <p className="text-muted">Published on April 10, 2025</p>

            <p className="blogpara">
              In investing, there’s a golden rule: don’t put all your eggs in one basket. That’s the essence of diversification—a strategy that spreads investments across different asset classes to reduce risk and improve your chances of achieving financial goals. But diversification isn’t just about owning many assets—it’s about owning the right mix based on your objectives.
            </p>

            <h4>Start with Your Financial Goals</h4>
            <p>
              Every portfolio should begin with clear goals. These can be categorized as:
              <ul>
                <li>Short-term (0–3 years): Travel, emergency fund, gadget purchases</li>
                <li>Medium-term (3–5 years): Buying a vehicle, home renovation</li>
                <li>Long-term (5+ years): Retirement, children’s education, wealth creation</li>
              </ul>
              Understanding your goals helps define the time horizon and risk appetite for each investment.
            </p>

            <h4>Understand Asset Classes</h4>
            <p>
              To build a diversified portfolio, you need to understand the different asset classes available:
              <ul>
                <li><strong>Equity:</strong> Suitable for long-term growth. High returns, but higher risk.</li>
                <li><strong>Debt:</strong> More stable than equity. Ideal for short to medium-term goals.</li>
                <li><strong>Gold:</strong> A trusted asset for protecting wealth from inflation and volatility.</li>
                <li><strong>Real Estate:</strong> Physical assets that provide long-term value and passive income.</li>
                <li><strong>Cash & Equivalents:</strong> Liquid assets like savings accounts, FDs, and liquid funds for immediate needs.</li>
              </ul>
            </p>

            <h4>Match Investments with Goals</h4>
            <p>
              Ensure your investments are suited to the time frame of every goal.
            </p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Goal Type</th>
                  <th>Recommended Instruments</th>
                  <th>Risk Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Short-term</td>
                  <td>Liquid Funds, Fixed Deposits</td>
                  <td>Low</td>
                </tr>
                <tr>
                  <td>Medium-term</td>
                  <td>Debt Funds, Hybrid Funds</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>Long-term</td>
                  <td>Equity Mutual Funds, PPF, NPS</td>
                  <td>Moderate to High</td>
                </tr>
              </tbody>
            </table>

            <h4>Rebalance Periodically</h4>
            <p>
              Market fluctuations can shift your asset allocation. For example, a rising equity market might make your portfolio more aggressive than intended. Review your portfolio every 6–12 months to bring it back in line with your original plan.
            </p>

            <h4>Avoid Over-Diversification</h4>
            <p>
              While spreading risk is wise, too many investments can become hard to manage and dilute returns. Aim for a well-structured portfolio with focused exposure across asset classes and investment types.
            </p>

            <h4>Conclusion</h4>
            <p>
              A diversified portfolio aligned with your financial goals acts as a cushion during market volatility and a ladder toward long-term wealth creation. The key lies in knowing your goals, choosing the right mix of assets, and regularly reviewing your investments. With a thoughtful strategy, diversification becomes a powerful ally in your financial journey.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog2;
