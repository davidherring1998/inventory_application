import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getProduct, reset } from "../features/product/productSlice";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

import { MdOutlineInventory } from "react-icons/md";
import { TbMoodEmpty } from "react-icons/tb";

export default function Inventory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getProduct());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <ProductCard />
    </>
  );
}
