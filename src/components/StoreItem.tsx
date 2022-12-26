import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  return (
    <Card className="rounded-0" style={{ border: "1px solid #f43b00" }}>
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
      </Card.Body>
    </Card>
  );
}
