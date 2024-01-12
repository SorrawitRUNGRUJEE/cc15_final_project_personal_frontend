import { createContext } from "react";
import axios from "../config/axios";
import { useState, useEffect } from "react";
import { useAuth } from "../hook/use_auth";
import { INCREMENT, DECREMENT } from "../constant/multiplier";
export const TransactionContext = createContext();
export default function TransactionContextProvider({ children }) {
  const { user } = useAuth();
  const [basketContent, setBasketContent] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [order, setOrder] = useState({});
  const [paymentSlip, setPaymentSlip] = useState(null);

  useEffect(() => {
    axios.get("/store/basket").then((res) => {
      setBasketContent((prev) => {
        const userBasket = res.data.result.filter((el) => el.userId == user.id);
        for (let i of userBasket) {
          i.multiplier = 1;
        }
        return userBasket;
      });
    });
    axios.get("/store/order").then((res) => {
    setOrder( prev=>{
        const order = res.data.order
        const order_item = res.data.order_item

        let newData = {...prev}
        newData.order = order
        newData.product = order_item
        return newData
        
        
    })


    });

    hdl_total_price();
  }, []);

  useEffect(() => {
    hdl_total_price();
  }, [basketContent]);

  const hdl_multiplier = (id, operation) => {
    if (operation == INCREMENT) {
      setBasketContent((prev) => {
        let update = [...prev];
        for (let i of update) {
          if (i.product.id == id) {
            i.multiplier += 1;
          }
        }
        return update;
      });
    }
    if (operation == DECREMENT) {
      setBasketContent((prev) => {
        let update = [...prev];
        for (let i of update) {
          if (i.product.id == id) {
            if (i.multiplier == 1) return update;
            i.multiplier -= 1;
          }
        }

        return update;
      });
    }
  };

  const hdl_total_price = () => {
    let total = 0;
    for (let i of basketContent) {
      let pricePerProduct = i.multiplier * i.product.price;
      total += pricePerProduct;
    }

    setTotalPrice(total);
  };

  const hdl_single_basket_delete = (id) => {
    if (confirm("Do you want to remove this product ?") == true) {
      axios.delete(`/store/basket/${id}`).then((res) => {
        setBasketContent((prev) => {
          let oldData = [...prev];
          let newData = oldData.filter((el) => el.id != res.data.result.id);
          return newData;
        });
      });
    }
  };

  const hdl_all_basket_delete =   (id) => {
    if (confirm("Do you want to remove all product ?") == true) {
      axios.delete("/store/basket").then((then) => {
        setBasketContent([]);
      });
    }
  };
  const hdl_order =  async () => {
    if (confirm("proceed to confirm payment ?") == true) {
      let data = {};
      for (let i = 0; i < basketContent.length; i++) {
        data[i] = basketContent[i];
      }
      data.totalPrice = totalPrice;
      

      await axios.post("/store/order", {data} ).then((res) => {
        setOrder( prev=>{
            const order = res.data.order
            const order_item = res.data.order_item
            let newData = {...prev}
            newData.order = order
            newData.product = order_item
            return newData
            
        })
        axios.delete("/store/basket");
      }).catch(err=>{
        throw err
      });
    }
  };

  const hdl_submit_payment = () =>{
    if(!paymentSlip) return alert("please attach payment slip")
    const formData = new FormData
    formData.append("paymentSlip",paymentSlip)
    axios.post('/store/payment',formData).then(res => alert("payment received"))

  }



  return (
    <TransactionContext.Provider
      value={{
        basketContent,
        hdl_multiplier,
        totalPrice,
        hdl_single_basket_delete,
        hdl_all_basket_delete,
        hdl_order,
        order,
        paymentSlip,
        setPaymentSlip,
        hdl_submit_payment
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
