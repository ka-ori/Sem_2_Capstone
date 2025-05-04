import React from "react";
import "./DonationCard.css";
function DonationBanner() {
  return (
    <div className="DonationCard">
      <img
        src="https://image.savethechildren.org/three-friends-tanya-shathi-and-jhumur-ch11043036.jpg/x0165u0t4ad10d31d576186ml3rwr24r.jpg"
        alt="childrenImage"
        width="100%"
      />
      <div className="DonationCardDescription">
        <p className="Connect">Making a Difference Together</p>
        <p className="Discover">
        We connect passionate donors with impactful causes, creating lasting positive change in communities worldwide.
        </p>
      </div>
    </div>
  );
}

export default DonationBanner;
