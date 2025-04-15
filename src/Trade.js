import React, { useEffect } from "react";

export default function Trade() {
  useEffect(() => {
    const container = document.getElementById("tradingview-ticker");

    // Prevent multiple script loads
    if (container.children.length > 0) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "BSE:SENSEX", description: "Sensex" },
        { proName: "BSE:RELIANCE", description: "Reliance" },
        { proName: "BSE:TCS", description: "TCS" },
        { proName: "BSE:INFY", description: "Infosys" },
        { proName: "BSE:HDFCBANK", description: "HDFC Bank" },
        { proName: "BSE:ICICIBANK", description: "ICICI Bank" },
        { proName: "BSE:ITC", description: "ITC" },
        { proName: "BSE:LT", description: "L&T" },
        { proName: "BSE:SBIN", description: "SBI" },
        { proName: "BSE:BHARTIARTL", description: "Airtel" },
        { proName: "BSE:MARUTI", description: "Maruti" },
        { proName: "BSE:HINDUNILVR", description: "HUL" },
        { proName: "BSE:ASIANPAINT", description: "Asian Paints" },
      ],
      colorTheme: "light",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "in"
    });

    container.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ width: "100%", height: "40px" }}>
      <div id="tradingview-ticker"></div>
    </div>
  );
}
