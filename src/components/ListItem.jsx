import { useContext } from "react";
import { KhatabookContext } from "../providers/KhatabookContext";

const ListItem = ({ transaction }) => {
  const { deleteTransaction, editTransaction } = useContext(KhatabookContext);

  return (
    <li
      className={`list-group-item d-flex flex-row justify-content-between align-items-center border-${
        transaction.type === "credit" ? "success" : "danger"
      } p-2 border-1 my-2 rounded-2 shadow-sm`}
    >
      <p
        className={`mb-0 d-flex align-items-center justify-content-center gap-3 text-${
          transaction.type === "credit" ? "success" : "danger"
        }`}
      >
        <span className="h5 mb-0">{transaction.text}:</span>
        <span className="h4 mb-0">{transaction.amount}</span>
      </p>
      <div className="">
        <button
          className="btn btn-outline-warning mx-2"
          // editTransaction ==>> sets the transaction that will be updated
          onClick={() => editTransaction(transaction)}
        >
          Edit
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => deleteTransaction(transaction)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListItem;
