import React from "react";
import { useState } from "react";
const ReservationsBottom = ({
  seats,
  setSeatIndex,
  seatIndex,
  money,
  setMoney,
}) => {
  const buyTicket = () => {
    let moneyLeft = money - seats.price;
    return (moneyLeft = setMoney());
  };
  const getSeatClass = (num) => {
    return seatIndex === num ? "seat border" : "seat";
  };
  return (
    <div className="">
      <div className="">
        <div className="seats">
          {seats.map((x, i) => (
            <div
              key={i}
              className={getSeatClass(i)}
              onClick={() => setSeatIndex(i)}
            >
              <div>
                <h2>{x.seat}</h2>
                <h2>{x.price}$</h2>
              </div>

              <div className="">{x.reserved}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="buy">
        <button on onClick={buyTicket}>
          Buy tickets
        </button>
      </div>
    </div>
  );
};

export default ReservationsBottom;
