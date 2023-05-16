import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSlice, reset } from "../features/auth/authSlice";

import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/login.css";
import { RiLoginCircleFill } from "react-icons/ri";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <div className="header">
        <h1>
          Login <RiLoginCircleFill />
        </h1>
      </div>
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
