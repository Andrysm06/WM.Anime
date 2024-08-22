import Navbar from "../components/Navbar";
import BgAbout from "../../public/Image/about.mp4";
const about = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={BgAbout}
        autoPlay
        loop
        muted
      />

      <div className="absolute inset-0 "></div>

      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>
    </div>
  );
};
export default about;
