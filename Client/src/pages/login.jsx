import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/login.css";

export default function login() {
  return (
    <>
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-btn">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
