import React from "react";
// import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Cart() {
  const GeTTingData = useSelector((state) => state.HandleCart);
  const history=useHistory()
  // console.log(GeTTingData);
  // console.log(id)

  const Backward=()=>{
      history.push('/products')
  }
  return (
    <div className="card mb-3">
      {GeTTingData.length >= 1 ? (
        GeTTingData.map((OurCartData) => {
          return (
            <div className="row no-gutters mt-3">
              <div className="col-md-4" key={OurCartData.id}>
                <img
                  src={OurCartData?.image}
                  alt={OurCartData.title}
                  className="img-fluid container "
                />
                <h5 className="card-title container m-3">
                  {OurCartData.title}
                </h5>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text bg-success p-1 text-white">
                    <h6 className="text-dark fw-bold">Description:</h6>{" "}
                    {OurCartData.description}
                  </p>
                  <p className="card-text bg-dark p-1 text-white fw-bolder w-25">
                    Price: {"$"}
                    {OurCartData.price}
                  </p>
                  <p className="card-text bg-info p-1 text-black fw-bolder w-50">
                    qty: {OurCartData.qty}
                  </p>
                  <p className="bg-danger text-white w-75 p-1">
                    Rating: {OurCartData?.rating?.rate}
                  </p>
                  <p className="bg-warning text-dark w-100 p-1">
                    Count: {OurCartData?.rating?.count}
                  </p>

                  <Link to="/place">
                    {" "}
                    <button className="btn btn-outline-danger">
                      Place Your Order
                    </button>
                  </Link>
                    <button className="btn btn-outline-dark m-1" onClick={Backward}>Go To Products</button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h3 className="text-center m-3 p-5">Card is Empty</h3>
      )}
    </div>
  );
}

export default Cart;
