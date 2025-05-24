import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 w-full">
      <div className="max-w-6xl mx-auto text-center">

        {/* Legal Info */}
        <p className="text-[10px] font-light mb-2">
          ©2025 | CINQ by Raghava (Project RERA No.: P02400009341) Promoted by Authorised Channel Partner
        </p>

        {/* Disclaimer */}
        <p className="text-[10px] text-gray-400 leading-relaxed mb-2">
          Disclaimer: The content mentioned on this website is for information purposes only, prices mentioned are subject to change without notice & properties mentioned are subject to availability. Images are for representation purposes only. This is not the official website. This website belongs to the authorised sales partner. We may also send updates to the mobile number/email ID registered with us.
        </p>

        {/* Digital Partner */}
        <p className="text-[10px] text-gray-400 mb-2">
          Digital Marketing Partner: Aureal Consulting.
        </p>

        {/* Footer Links */}
        <div className="mt-4 space-x-4">
          <Link to="/privacy-policy" className="text-[10px] text-white hover:underline">
          Privacy Policy
           </Link>
          <Link to="/terms-conditions" className="text-[10px] text-white hover:underline">
          Terms & Conditions
        </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
