import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainContext from "./context/MainContext";
import LoginPage from "./pages/LoginPage";

import io from "socket.io-client";
import AppPage from "./pages/AppPage";
const socket = io.connect("http://localhost:4000");

function App() {
  const [user, setUser] = useState(null);
  const [movie, setMovie] = useState([]);
  const [seats, setSeats] = useState([]);
  const [money, setMoney] = useState(100);

  useEffect(() => {
    socket.on("movie", (data) => setMovie(data));
    socket.on("seats", (data) => setSeats(data));
    socket.on("messages", (data) => {
      console.log(data);
      setMoney(data);
    });
  }, []);

  return (
    <div className="App">
      <MainContext.Provider
        value={{ socket, user, setUser, seats, movie, money, setMoney }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/app" element={<AppPage />} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;
