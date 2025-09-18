import { useState } from "react";
import Ticket from "./Ticket.jsx";
import { GenrateNum, TotalSum } from "./GenrateNum.js";


export default function Lottery({ n=3, Condition }) {
  let [ticket, setTicket] = useState([]);
  let isWinning = Condition(ticket);

  let buyTicket = () => {
    setTicket(GenrateNum(n));
  };

  return (
    <div>
      <h1>Lottery</h1>
      <Ticket ticketArray={ticket} />
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3>{isWinning && "You Won!!"}</h3>
    </div>
  );
}
