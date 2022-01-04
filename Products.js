import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const componentDid = true;
  //   console.log(true);
  const ourData = async function () {
    setLoading(true);
    // console.log(loading)
    const response = await fetch("https://fakestoreapi.com/products");
    const mydata = await response.json();
    if (componentDid) {
      //   setData(await response.clone().json());
      //   // console.log(data)
      //   // console.log(response.clone())
      //   setFilter(await response.json());
      //   console.log(filter);
      setFilter(mydata);
      setData(mydata);
      // console.log(filter);
      // console.log(data);
      setLoading(false);
      // console.log(loading)
    }
  };

  useEffect(() => {
    ourData();
    // return ()=>{
    //      const componentDid=false
    //         console.log("componentDid should false")
    // }
  }, []);

  const Hello = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={200} />
        </div>

        <div className="col-md-3">
          <Skeleton height={250} />
        </div>
        <div className="col-md-3">
          <Skeleton height={250} />
        </div>
        <div className="col-md-3">
          <Skeleton height={250} />
        </div>
      </>
    );
  };

  //   console.log(data)
  const FilterData = (cat) => {
    let UpdatingDating = data.filter((x) => {
      //  console.log(cat)
      //  console.log(x.category)
      //  console.log(x.category===cat)
      return x.category === cat;
    });
    setFilter(UpdatingDating);
    // console.log(UpdatingDating);
  };

  const ShowingProducts = () => {
    return (
      <>
        <div className=" d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark m-1"
            onClick={() => setFilter(data)}
          >
            ALL
          </button>
          <button
            className="btn btn-outline-dark m-1"
            onClick={() => FilterData("men's clothing")}
          >
            Mens Clothing
          </button>
          <button
            className="btn btn-outline-dark m-1"
            onClick={() => FilterData("women's clothing")}
          >
            Womens CLothing
          </button>

          <button
            className="btn btn-outline-dark m-1"
            onClick={() => FilterData("jewelery")}
          >
            Jewelery
          </button>

          <button
            className="btn btn-outline-dark m-1"
            onClick={() => FilterData("electronics")}
          >
            Electronic
          </button>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 ">
            <div className="fw-bolder">
              <h1 className="text-center"> Latest Updates </h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            {loading ? <Hello /> : <ShowingProducts />}
          </div>
        </div>
        <div className="row">
          {filter.map((productData, index) => {
            return (
              <>
                <div className="col-md-3 p-3 shadow" key={index}>
                  <div className="card border-black m-1">
                    <img
                      src={productData.image}
                      className="card-img-top p-3"
                      height="250px"
                      alt={productData.title}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">
                        {productData.title.substr(0, 15)}...
                      </h5>
                      {/* <p class="card-text">
                        {productData.description}
                      </p> */}
                      <p className="card-text lead fw-bold">
                        {"$"}
                        {productData.price}
                      </p>
                      {/* {console.log(productData.id)} */}
                      <Link
                        to={`/product/ ${productData.id}`}
                        className="btn btn-outline-dark"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Products;
