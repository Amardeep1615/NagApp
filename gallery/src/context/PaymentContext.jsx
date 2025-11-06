import { useState } from "react";
import { PaymentContext } from "./PaymentContextInstance";

export const PaymentProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (txn) => setTransactions([...transactions, txn]);

  return (
    <PaymentContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </PaymentContext.Provider>
  );
};
