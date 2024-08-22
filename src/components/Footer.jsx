import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-green-700 p-6">
      <div className="container mx-auto text-center text-white">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-xl hover:text-gray-300"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-xl hover:text-gray-300"
            />
          </a>
          <a href="mailto:info@klinik.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-xl hover:text-gray-300"
            />
          </a>
          <a href="tel:+1234567890">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-xl hover:text-gray-300"
            />
          </a>
        </div>

        <div className="text-sm">&copy; 2024 Klinik. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
