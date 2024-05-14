import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import { Link } from "react-router-dom";
import Menu1 from "./Menu1";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-ten ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link to="/">
              <img src="/static/images/logo/logo_07.png" alt="logo" />
            </Link>
          </div>
          <div className="right-widget d-flex align-items-center order-lg-3">
            {/* <Link
              to="/login"
              className="login-btn-three rounded-circle tran3s me-3"
            >
              <i className="bi bi-person" />
            </Link> */}
            {/* <Link
              to="/"
              className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
            >
              Your Feedback
            </Link> */}
          </div>{" "}
          {/* /.right-widget */}
          <Menu1 />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;
