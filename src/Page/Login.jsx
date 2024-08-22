import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BgLogin from "../../public/Image/bglogin.mp4";
import Navbar from "../components/Navbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" && password === "") {
      setMessage("Berhasil login");
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/Beranda");
      }, 3000);
    } else {
      setMessage("Username atau password salah");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={BgLogin}
        autoPlay
        loop
        muted
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      <div className="relative z-10 bg-white bg-opacity-5 ring-1  ring-white backdrop-filter backdrop-blur-md p-8 rounded-lg shadow-lg max-w-sm w-full">
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-white mt-4">Login</h1>
          </div>

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="mt-1 p-1 bg-transparent border-b-2 border-gray-300 w-full focus:outline-none focus:ring-0 focus:border-emerald-300 text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 p-1 bg-transparent border-b-2 border-gray-300 w-full focus:outline-none focus:ring-0 focus:border-emerald-300 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-200"
              >
                Remember me
              </label>
            </div>

            <div>
              <a href="#" className="text-sm text-white hover:text-emerald-300">
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-medium transition duration-300 ${
              loading
                ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                : "bg-white text-black hover:bg-emerald-300"
            }`}
          >
            {loading ? "Loading..." : "Login"}
          </button>
          <div className="text-center mb-6">
            <h3 className="font-semibold text-white text-xs mt-4">
              Don't have an account?{" "}
              <a
                className="text-gray-300 text-sm hover:text-emerald-300 transition-colors duration-200"
                href="#"
              >
                Register
              </a>
            </h3>
          </div>
          {message && (
            <div
              className={`mt-4 p-2 text-center rounded-lg text-sm ${
                message === "Berhasil login"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
