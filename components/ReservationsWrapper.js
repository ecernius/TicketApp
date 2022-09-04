import React, { useContext, useState } from "react";
import ReservationsTop from "./ReservationsTop";
import ReservationsBottom from "./ReservationsBottom";
import MainContext from "../context/MainContext";

const ReservationsWrapper = () => {
  const { movie, user, money, seats } = useContext(MainContext);

  const [movieIndex, setMovieIndex] = useState(0);
  const [seatIndex, setSeatIndex] = useState(0);

  return (
    <div className="wrapper">
      <div className="userInfo">
        <h1>{user.username}</h1>

        <h1 className="money">Money Left:{money}$</h1>
      </div>

      <ReservationsTop
        movie={movie}
        movieIndex={movieIndex}
        setMovieIndex={setMovieIndex}
      />
      <ReservationsBottom
        seats={seats}
        user={user}
        seatIndex={seatIndex}
        setSeatIndex={setSeatIndex}
      />
    </div>
  );
};

export default ReservationsWrapper;
