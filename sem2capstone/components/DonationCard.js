import React from "react";
import "./DonationCard.css";
function DonationCard() {
  return (
    <div className="DonationCard">
      <img
        src="https://image.savethechildren.org/three-friends-tanya-shathi-and-jhumur-ch11043036.jpg/x0165u0t4ad10d31d576186ml3rwr24r.jpg"
        alt="childrenImage"
        width="100%"
      />
      <div className="DonationCardDescription">
        <p className="Connect">Connect with Charities that Matter to You</p>
        <p className="Discover">
          Discover verified causes, donate securely, and track your impact.
        </p>
      </div>
      <div className="DonationAmountCard">
        <div className="DonationAmounts">
          <button>$100</button>
          <button>$250</button>
          <button>$500</button>
        </div>
        <div className="UserInformation">
          <button>Custom Amount</button>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea />
          <button className="completeDonation">Complete Donation</button>
        </div>
      </div>
    </div>
  );
}

export default DonationCard;
