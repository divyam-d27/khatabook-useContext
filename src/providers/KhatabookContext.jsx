import { createContext, useState } from "react";

export const KhatabookContext = createContext();

export default function KhatabookProvider({ children }) {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: "Salary",
      amount: 100000,
      type: "credit",
    },
    {
      id: 2,
      text: "Rent",
      amount: 5000,
      type: "debit",
    },
    {
      id: 3,
      text: "Groceries",
      amount: 4500,
      type: "debit",
    },
    {
      id: 4,
      text: "Electricity Bill",
      amount: 3000,
      type: "debit",
    },
    {
      id: 5,
      text: "Stock",
      amount: 10000,
      type: "credit",
    },
    {
      id: 6,
      text: "Fuel",
      amount: 8000,
      type: "debit",
    },
    {
      id: 7,
      text: "Commission",
      amount: 8000,
      type: "credit",
    },
  ]);

  const [update, setUpdate] = useState({
    toUpdate: { id: "", text: "", amount: "", type: "" },
    isEdit: false,
  });

  // DELETE
  const deleteTransaction = (transaction) => {
    setTransactions(transactions.filter((t) => t.id !== transaction.id));
  };

  // CREATE
  const createTransaction = (text, amount, type) => {
    const newTrans = {
      id: crypto.randomUUID(),
      text,
      amount,
      type,
    };
    setTransactions([newTrans, ...transactions]);
  };

  // EDIT
  const editTransaction = (transToBeUpdated) => {
    setUpdate({
      toUpdate: transToBeUpdated,
      isEdit: true,
    });
  };

  // UPDATE
  const updateTransaction = (transObj) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === transObj.id ? transObj : transaction
      )
    );

    // resetting edit/update state
    setUpdate({
      toUpdate: { id: "", text: "", amount: "", type: "" },
      isEdit: false,
    });
  };
  return (
    <KhatabookContext.Provider
      value={{
        transactions,
        deleteTransaction,
        editTransaction,
        createTransaction,
        update,
        updateTransaction,
      }}
    >
      {children}
    </KhatabookContext.Provider>
  );
}
