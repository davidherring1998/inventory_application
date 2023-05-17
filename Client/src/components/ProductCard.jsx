import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../features/product/productSlice";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "./Spinner";
import { TbMoodEmpty } from "react-icons/tb";
import { MdOutlineInventory } from "react-icons/md";
import "../css/inventory.css";

function ProductCard(product) {
  const dispatch = useDispatch();
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="inventory-header header">
        <h1>
          Inventory <MdOutlineInventory />
        </h1>
      </div>
      {products.length > 0 ? (
        <div className="container">
          {products.map((product) => (
            <>
              <Card className="text-center product-card">
                <Card.Header className="card-header">
                  {product.name.toUpperCase()}
                </Card.Header>
                <Card.Body className="card-body">
                  <Card.Text>
                    <span className="bold">Category: </span>
                    {product.category} <br />
                  </Card.Text>
                  <Card.Text>
                    <span className="bold">Description: </span>
                    {product.description} <br />
                  </Card.Text>
                  <Card.Text>
                    <span className="bold">Quantity: </span> {product.quantity}
                  </Card.Text>
                  <Card.Text>
                    <span className="bold">Location: </span>
                    {product.storageLocation}
                  </Card.Text>
                  <Card.Text>
                    <span className="bold">Color: </span>
                    {product.color}
                  </Card.Text>
                  <Card.Text>
                    <span className="bold">Weight: </span> {product.weight}
                  </Card.Text>
                  <Card.Text>
                    <span className="bold">Notes: </span> {product.notes}
                  </Card.Text>
                  <Card.Text>
                    <span className="bold">Subcategory: </span>
                    {product.subcategory} <br />
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(deleteProduct(product._id))}
                  >
                    Delete
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {new Date(product.createdAt).toLocaleDateString("en-US")}
                </Card.Footer>
              </Card>
            </>
          ))}
        </div>
      ) : (
        <h1 className="inventory-header header">
          Inventory is Empty <TbMoodEmpty />
        </h1>
      )}
    </>
  );
}

export default ProductCard;
