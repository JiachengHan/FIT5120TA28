import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Menu1 = () => {
  const { pathname } = useLocation();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };

  const hash_info = btoa("/pages-menu/informations");
  const hash_prev = btoa("/pages-menu/preventionpage");

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" style={{ textAlign: "center" }}>
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link to="/" className="d-block">
                <img src="/static/images/logo/logo_01.png" alt="logo" />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item dropdown mega-dropdown-md">
            <Link
              to="/"
              className={`nav-link ${isActive("/home") ? "active-menu" : ""}`}
            >
              Home
            </Link>
          </li>

          <li className="nav-item  dropdown">
            <Link
              to="/pages-menu/informations"
              className={`nav-link ${isActive("/home") ? "active-menu" : ""}`}
            >
              Data Insights
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              to="/pages-menu/preventionpage"
              className={`nav-link ${isActive("/home") ? "active-menu" : ""}`}
            >
              Prevention
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              to="/contact/riskassessment"
              className={`nav-link ${isActive("/home") ? "active-menu" : ""}`}
            >
              Risk Model
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              to="/portfolio/HospitalPage"
              className={`nav-link ${isActive("/home") ? "active-menu" : ""}`}
            >
              Hospital
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              to="/pages-menu/fallsprevention"
              className={`nav-link ${isActive("/home") ? "active-menu" : ""}`}
            >
              Falls Among Elderly
            </Link>
          </li>
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link to="/" className="btn-twentyOne fw-500 tran3s">
              Your Feedback
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default Menu1;
