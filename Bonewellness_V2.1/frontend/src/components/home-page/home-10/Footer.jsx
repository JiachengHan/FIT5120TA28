import { Link } from "react-router-dom";
import Social from "./Social";

const Footer = () => {
  const footerLinks = [
    {
      title: "Links",
      links: [
        {
          label: "Mahara",
          href: "https://mahara.infotech.monash.edu/view/view.php?id=80465",
        },
        { label: "Feedback", href: "/" },
        // { label: "Home", href: "/" },
        // { label: "Pricing", href: "/pages-menu/pricing" },
        // { label: "About us", href: "/pages-menu/about-us-v1" },
        // { label: "Service", href: "/pages-menu/service-v1" },
        // { label: "Blog", href: "/blog/blog-v1" },
      ],
      classes: "col-lg-2 col-sm-4 ms-auto mb-30",
    },
    {
      title: "Services",
      links: [
        { label: "Find Hospital", href: "/" },
        { label: "Risk Model", href: "/" },
        { label: "Data Insights", href: "/pages-menu/informations" },
        { label: "Prevention", href: "/pages-menu/preventionpage" },
        // { label: "FAQ", href: "/pages-menu/faq" },
        // { label: "Blog", href: "/blog/blog-v1" },
        // { label: "Contact Us", href: "/contact" },
        // { label: "Support", href: "/contact" },
      ],
      classes: "col-lg-3 col-sm-4 mb-30",
    },
  ];

  return (
    <div className="row">
      <div className="col-xl-3 col-lg-2 footer-intro mb-40">
        <div className="logo">
          <Link to="/">
            <img src="/static/images/logo/logo_01.png" alt="" width={95} />
          </Link>
        </div>
        <img
          src="/static/images/shape/shape_24.svg"
          alt="shape"
          className="mt-60 d-none d-lg-block"
        />
      </div>
      {/* End .col-xl-3 */}

      {footerLinks.map((link, index) => (
        <div key={index} className={link.classes}>
          <h5 className="footer-title tx-dark fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.links.map((linkItem, index) => (
              <li key={index}>
                <Link to={linkItem.href}>{linkItem.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* End menu data */}

      <div className="col-xl-3 col-sm-4 mb-30">
        <h5 className="footer-title tx-dark fw-500">Address</h5>
        <p className="fs-17">
          Monash University <br />
          Wellington Rd, Clayton, VIC 3800
        </p>
      </div>
    </div>
  );
};

export default Footer;
