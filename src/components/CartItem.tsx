type CartItemProps = {
  id: number;
  quantity: number;
  price: any;
};

import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) {
    return null;
  }

  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="d-flex align-items-center p-3"
      style={{ border: "1px solid #f43b00" }}
    >
      <img
        src={item.imgUrl}
        alt={item.name}
        width={100}
        height={100}
        style={{ objectFit: "cover" }}
        className="img-fluid shopping-img"
      />
      <Stack>
        <h5>{item.name}</h5>
        <small>
          {quantity} x {formatCurrency(item.price)}
        </small>
        <button
          onClick={() => removeFromCart(id)}
          className="btn btn-outline rounded-0"
        >
          Remove
        </button>
      </Stack>
    </Stack>
  );
}
