import React from 'react';
import './Footer.css'; // Make sure to import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto"> {/* Center the column */}
            <p>
              ShareLog is a comprehensive suite of research, analysis, and trading tools designed to assist traders and investors in making their own decisions. We do not provide recommendations
              regarding specific securities to buy or sell, and we do not offer trading or investing advice. Trading carries significant risk and may not be suitable for every investor. There is a possibility
              of losing all or more than the initial investment.
            </p>
            <br></br>
            <p>
              Testimonials appearing on this website may not be representative of other clients or customers and are not a guarantee of future performance or success.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright" >©2024 ShareLog. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
