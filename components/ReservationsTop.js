import React from "react";

const ReservationsTop = ({ movie, setMovieIndex, movieIndex }) => {
  const getClass = (num) => {
    return movieIndex === num ? "a border" : "a";
  };
  return (
    <div className="movie">
      {movie.map((x, i) => (
        <div key={i} className={getClass(i)} onClick={() => setMovieIndex(i)}>
          <img src={x.image} alt="a" />
          <h2>{x.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ReservationsTop;
