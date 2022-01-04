import React from "react";

function Footer() {
  return (
    <div className="">
      <footer className="text-center text-lg-start bg-light text-muted sticky-bottom">
        <section className="p-2">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem"></i>ABOUT US
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat non, illo nostrum vitae numquam officiis eaque
                  adipisci sapiente iusto aspernatur!
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#" className="text-decoration-none text-reset">
                    Men's Clothing
                  </a>
                </p>
                <p>
                  <a href="#" className="text-decoration-none text-reset">
                    Women's Clothing
                  </a>
                </p>
                <p>
                  <a href="#" className="text-decoration-none text-reset">
                    Jewelery
                  </a>
                </p>
                <p>
                  <a href="#" className="text-decoration-none text-reset">
                    Electronic
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="bi bi-house p-2"></i>
                  Hyderabad Madhapur,India
                </p>
                <p>
                  <i className="bi bi-envelope p-2"></i>
                  y.raghavendra@gmail.com
                </p>
                <p>
                  <i className="bi bi-telephone p-2"></i>+91 9676324174
                </p>
                <p>
                  <i className="bi bi-telephone p-2"></i>+91 8142908896
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
