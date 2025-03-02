import Menu from "./Menu";

interface CartItem extends Menu {
  sweetness: number;
  quantity: number;
}

export default CartItem;
