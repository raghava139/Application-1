import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMyItem } from "./Redux/Actions/Act";
// import { useParams } from 'react-router-dom'
function Product() {
  const { id } = useParams();
  // console.log(id);
  // const id=match.params.id
  // console.log(id)
  // console.log(props)
  // console.log(id)

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(id)
  const getThedata = async () => {
    setLoading(true);
    const responseData = await fetch(`https://fakestoreapi.com/products/${id}`);
    const myData = await responseData.json();
    // console.log(myData);
    setProduct(myData);
    setLoading(false);
  };
  // console.log(product)

  const dispatch = useDispatch();
  const AddingTheProduct = (product) => {
    dispatch(addMyItem(product));
  };
  useEffect(() => {
    getThedata();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={500} />
        </div>
        <div className="col-md-6">
          <Skeleton height={30} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={30} />
        </div>
      </>
    );
  };
  const SIngleProduct = () => {
    return (
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-fluid"
            src={product.image}
            height="50px"
            width="75%"
            alt={product.title}
          />
        </div>
        <div className="col-md-6 col-sm-1 me-auto p-5">
          <h4>Category:{product.category}</h4>
          <strong>ModelNumber: </strong> <p>{product.title}</p>
          <p>
            Rating: {product?.rating?.rate}
            <i className="bi bi-star"></i>
          </p>
          <h3 className="fw-bold">
            Price:{`$`}
            {product?.price}
          </h3>
          <strong>Description:</strong>{" "}
          <p className="lead">{product.description}</p>
          {/* {console.log(product.id)} */}
          <button
            className="btn btn-outline-dark m-3"
            onClick={() => AddingTheProduct(product)}
          >
            Add to Cart
          </button>
          <Link to={`/cart/ ${product.id}`} className="btn btn-dark">
            Go to Cart
          </Link>
        </div>
      </div>
    );
  };
  return <div>{loading ? <Loading /> : <SIngleProduct />}</div>;
}

export default Product;
