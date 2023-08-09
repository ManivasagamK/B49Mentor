import React, { useState } from "react";

function Task() {
  // var[defaultValue,setdefaultValue ] =useState("Add to cart") ;
  // var[defaultValue1,setdefaultValue1 ] =useState("Add to cart") ;
  // var[defaultValue2,setdefaultValue2 ] =useState("Add to cart") ;
  // var[defaultValue3,setdefaultValue3 ] =useState("Add to cart") ;
  // var[defaultValue4,setdefaultValue4 ] =useState("Add to cart") ;
  // var[defaultValue5,setdefaultValue5 ] =useState("Add to cart") ;
  const [isClicked, setIsClicked] = useState(true);
  const [isClicked1, setIsClicked1] = useState(true);
  const [isClicked2, setIsClicked2] = useState(true);
  const [isClicked3, setIsClicked3] = useState(true);
  const [isClicked4, setIsClicked4] = useState(true);
  const [isClicked5, setIsClicked5] = useState(true);

  // if (count ==0){
  //     const [isClicked, setIsClicked] = useState(true);
  //     const [isClicked1, setIsClicked1] = useState(true);
  //     const [isClicked2, setIsClicked2] = useState(true);
  //     const [isClicked3, setIsClicked3] = useState(true);
  //     const [isClicked4, setIsClicked4] = useState(true);
  //     const [isClicked5, setIsClicked5] = useState(true);}

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setIsClicked(false);
    //setdefaultValue("Remove from cart") ;
  };
  const handleClick1 = () => {
    setCount(count + 1);
    setIsClicked1(false);
    //setdefaultValue1("Remove from cart") ;
  };
  const handleClick2 = () => {
    setCount(count + 1);
    setIsClicked2(false);
    //setdefaultValue2("Remove from cart") ;
  };
  const handleClick3 = () => {
    setCount(count + 1);
    // setdefaultValue3("Remove from cart") ;
    setIsClicked3(false);
  };
  const handleClick4 = () => {
    setCount(count + 1);
    setIsClicked4(false);
    //setdefaultValue4("Remove from cart") ;
  };
  const handleClick5 = () => {
    setCount(count + 1);
    setIsClicked5(false);
    //setdefaultValue5("Remove from cart") ;
  };
  const handleRemove = () => {
    setCount(count - 1);
    if (count == 0) {
      setIsClicked(true);
      setIsClicked1(true);
      setIsClicked2(true);
      setIsClicked3(true);
      setIsClicked4(true);
      setIsClicked5(true);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span
                  className="badge bg-dark text-white ms-1 rounded-pill"
                  min="0">
                  {count}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <heading> */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>

      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Product image--> */}
              <img
                className="card-img-top"
                src="https://www.boots.ie/resource/image/2540956/estore_sp_small/325/325/2816afd018c8acda50d8290ce1739265/SE/2020-09-elizabeth-arden-bt-build14.jpg"
                alt="..."
              />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Fancy Product</h5>
                  {/* <!-- Product price--> */}
                  $40.00 - $80.00
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">
                    View options
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Product image--> */}
              <img
                className="card-img-top"
                src="https://th.bing.com/th/id/OIP.2EEg8d71ccRblcMRMQL88QAAAA?pid=ImgDet&rs=1"
                alt="..."
              />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Special item</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                  </div>
                  <span className="text-muted text-decoration-line-through">
                    $20.00
                  </span>
                  "$18.00"
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {/* <a className="btn btn-outline-dark mt-auto" href="#" onClick={() => handleClick()}>{defaultValue}</a></div> */}
                  {isClicked ? (
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => handleClick()}>
                      Add to cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => handleRemove()}>
                      Remove from cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Product image--> */}
              <img
                className="card-img-top"
                src="https://www.americanracingnetwork.com/wp-content/uploads/2012/12/dungey-bike-2013-sxf.jpg"
                alt="..."
              />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Sales item</h5>
                  <span className="text-muted text-decoration-line-through">
                    $50.00
                  </span>
                  "$25.00"
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {/* <a className="btn btn-outline-dark mt-auto" href="#" onClick={() => handleClick5()}>{defaultValue5}</a></div> */}
                  {isClicked1 ? (
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => handleClick1()}>
                      Add to cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => handleRemove()}>
                      Remove from cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Product image--> */}
              <img
                className="card-img-top"
                src="https://th.bing.com/th/id/OIP.x6yvj5irTHlsS09kXEKa-QHaE8?pid=ImgDet&rs=1"
                alt="..."
              />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Popular item</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                  </div>
                  "$40.00"
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {/* <a className="btn btn-outline-dark mt-auto" href="#" onClick={() => handleClick4()}>{defaultValue4}</a></div> */}
                  {isClicked2 ? (
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => handleClick2()}>
                      Add to cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => handleRemove()}>
                      Remove from cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Product image--> */}
              <img
                className="card-img-top"
                src="https://www.americanracingnetwork.com/wp-content/uploads/2012/12/dungey-bike-2013-sxf.jpg"
                alt="..."
              />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Sales item</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                  </div>
                  <span className="text-muted text-decoration-line-through">
                    $50.00
                  </span>
                  "$25.00"
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  {/* <a className="btn btn-outline-dark mt-auto" href="#" onClick={() => handleClick1()}>{defaultValue1}</a></div> */}
                  {isClicked3 ? (
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="#"
                      onClick={() => handleClick3()}>
                      Add to cart
                    </a>
                  ) : (
                    <a
                      className="btn btn-outline-dark mt-auto"
                      href="#"
                      onClick={() => handleRemove()}>
                      Remove from cart
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Product image--> */}
              <img
                className="card-img-top"
                src="https://www.boots.ie/resource/image/2540956/estore_sp_small/325/325/2816afd018c8acda50d8290ce1739265/SE/2020-09-elizabeth-arden-bt-build14.jpg"
                alt="..."
              />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Fancy Product</h5>
                  {/* <!-- Product price--> */}
                  $40.00 - $80.00
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">
                    View options
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Product image--> */}
              <img
                className="card-img-top"
                src="https://th.bing.com/th/id/OIP.2EEg8d71ccRblcMRMQL88QAAAA?pid=ImgDet&rs=1"
                alt="..."
              />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Special item</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                    <span>
                      <i>&#11088;</i>
                    </span>
                  </div>
                  <span className="text-muted text-decoration-line-through">
                    $20.00
                  </span>
                  "$18.00"
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {/* <a className="btn btn-outline-dark mt-auto" href="#" onClick={() => handleClick2()}>{defaultValue2}</a></div> */}
                  {isClicked4 ? (
                    <a
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => handleClick4()}>
                      Add to cart
                    </a>
                  ) : (
                    <a
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => handleRemove()}>
                      Remove from cart
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Product image--> */}
              <img
                className="card-img-top"
                src="https://th.bing.com/th/id/OIP.x6yvj5irTHlsS09kXEKa-QHaE8?pid=ImgDet&rs=1"
                alt="..."
              />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Popular item</h5>
                  {/* <div className="d-flex justify-content-center small text-warning mb-2">
                                       
                                        
                                    </div> */}
                  "$40.00"
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {/* <button className="btn btn-outline-dark mt-auto" onClick={() => handleClick3()} href="#">{defaultValue3}</button> */}
                  {isClicked5 ? (
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => handleClick5()}>
                      Add to cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => handleRemove()}>
                      Remove from cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
