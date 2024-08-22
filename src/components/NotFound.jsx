import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BgLogin from "../../public/Image/bglogin.mp4";
import Navbar from "./Navbar";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-gray-900 text-white  overflow-hidden">
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={BgLogin}
        autoPlay
        loop
        muted
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center p-4  rounded-lg">
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          size="6x"
          className="text-yellow-500 animate-bounce mb-4"
        />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">
          Halaman yang Anda cari mungkin telah dihapus, ada namanya diubah, atau
          untuk sementara tidak tersedia.
        </p>
        <Link
          to="/"
          className="text-white text-lg bg-gray-400 hover:bg-gray-600 py-2 px-4 rounded-lg "
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
