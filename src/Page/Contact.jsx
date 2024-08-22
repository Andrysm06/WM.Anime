import Navbar from "../components/Navbar";
import BgContact from "../../public/Image/bgcontact.mp4";
const contact = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={BgContact}
        autoPlay
        loop
        muted
      />

      <div className="absolute inset-0"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>
    </div>
  );
};
export default contact;
