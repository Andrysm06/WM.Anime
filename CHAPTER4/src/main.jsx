import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import fetchWithAsyncAwait from "./FetchWithAsyncAwait.jsx";
import "./index.css";
import MovieSearch from "./SearchMovie.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieSearch />
  </React.StrictMode>
);
