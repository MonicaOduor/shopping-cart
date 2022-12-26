import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isCartOpen: boolean;
};

export default function ShoppingCart({ isCartOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isCartOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div style={{ display: "block" }}>
            <Stack gap={1} className="ms-auto">
              <h4
                className="d-flex justify-content-center p-3"
                style={{ color: "#f43b00" }}
              >
                TOTAL:{" "}
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find(
                      (item) => item.id === cartItem.id
                    );
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </h4>
            </Stack>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
