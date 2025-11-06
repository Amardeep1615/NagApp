import { useState } from "react";
import { TicketContext } from "./TicketContext";

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  const raiseTicket = (ticket) => setTickets([...tickets, ticket]);

  return (
    <TicketContext.Provider value={{ tickets, raiseTicket }}>
      {children}
    </TicketContext.Provider>
  );
};
