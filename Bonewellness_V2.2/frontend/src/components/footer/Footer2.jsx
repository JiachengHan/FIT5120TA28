import { Link } from "react-router-dom";

const columns = [
  {
    title: "Links",
    links: [
      {
        label: "Mahara",
        href: "https://mahara.infotech.monash.edu/view/view.php?id=80465",
      },
      { label: "Feedback", href: "/" },
      // { label: "Home", url: "/" },
      // { label: "Pricing", url: "/" },
      // { label: "About us", url: "/" },
      // { label: "Service", url: "/" },
      // { label: "Blog", url: "/" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Data Insights", href: "/pages-menu/informations" },
      { label: "Prevention", href: "/pages-menu/preventionpage" },
      { label: "Risk Model", href: "/" },
      { label: "Find Hospital", href: "/portfolio/HospitalPage" },
      { label: "Falls Among Elderly", href: "/pages-menu/fallsprevention" },
      // { label: "Item Support", url: "/" },
      // { label: "Forum", url: "/" },
      // { label: "Report Abuse", url: "/" },
      // { label: "Live", url: "/" },
    ],
  },
  {
    title: "Address",
    links: [
      { label: "Monash University", url: "/" },
      // { label: "Cloud hosting", url: "/" },
      // { label: "WordPress hosting", url: "/" },
      // { label: "VPS hosting", url: "/" },
      // { label: "Dedicated hosting", url: "/" },
    ],
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
