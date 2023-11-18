import { useContext } from "react";
import { StoreContext } from "../context/storefront_context";

export const useStore = () =>{
    return useContext
    (StoreContext)
}