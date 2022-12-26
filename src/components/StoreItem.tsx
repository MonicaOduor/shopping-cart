import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 0;
  return (
    <Card className="rounded-0 h-100" style={{ border: "1px solid #f43b00" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        className="img-fluid card-img"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title
          className="d-flex justify-content-between align-items-baseline mb-4"
          style={{ fontFamily: "Staatliches", color: "#f43b00" }}
        >
          <span>{name}</span>
          <span> {formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button className="btn btn-outline rounded-0 w-100">
              Add to cart
            </button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <button className="btn btn-outline rounded-0">-</button>
                <span>{quantity}</span>
                <button className="btn btn-outline rounded-0">+</button>
              </div>
              <button className="btn btn-sm btn-outline rounded-0">Remove</button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
