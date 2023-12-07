import { useContext } from "react";
import { TransactionContext } from "../context/transaction_context";

export const useTransaction = () =>{
    return useContext(TransactionContext)
}