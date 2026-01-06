import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { addItem } from "../utils/cartSlice";

const Cart=()=>{

    const dispatch=useDispatch();


    const handleClearCart =()=>{
        dispatch(removeItem());
    };
    const itemCarts=useSelector((store)=>store.cart.items);
    return (
        <div className="text-center">Cart
        <div>
          {itemCarts}
       
        <button className="p-2 m-2 bg-black" onClick={handleClearCart}>Clear Cart</button>

        </div>
        </div>
    )
};

export default Cart;