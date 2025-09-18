import TicketNum from "./ticketNum";

export default function Ticket({ ticketArray }) {

  return (
    <div className="ticket">
      <h4>Ticket</h4>
      {ticketArray.map((tic, index) => (
        <TicketNum num={tic} key={index} />
      ))}
    </div>
  );
}
