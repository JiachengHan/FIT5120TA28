import { Link } from "react-router-dom";
const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Links",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        // { label: "Home", href: "/" },
        {
          label: "Mahara",
          href: "https://mahara.infotech.monash.edu/view/view.php?id=80465",
        },
        { label: "Feedback", href: "/" },
        // { label: "Careers", href: "#" },
        // { label: "Features", href: "#" },
        // { label: "Blog", href: "/blog-v2." },
      ],
    },
    {
      id: 2,
      title: "Services",
      column: "col-lg-3 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "Data Insights", href: "/pages-menu/informations" },
        { label: "Prevention", href: "/pages-menu/preventionpage" },
        { label: "Risk Model", href: "/" },
        { label: "Find Hospital", href: "/portfolio/HospitalPage" },
        { label: "Falls Among Elderly", href: "/pages-menu/fallsprevention" },
        // { label: "Others", href: "/service-details" },
        // { label: "Health Insurance", href: "/service-details" },
      ],
    },
  ];

  // const socialIcons = [
  //   {
  //     iconClass: "fab fa-facebook-f",
  //     link: "#",
  //   },
  //   {
  //     iconClass: "fab fa-twitter",
  //     link: "#",
  //   },
  //   {
  //     iconClass: "fab fa-linkedin-in",
  //     link: "#",
  //   },
  // ];

  return (
    <>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title text-white fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title text-white fw-500">Address</h5>
        <p className="text-white opacity-75 mb-35">
          Monash University <br />
          Wellington Rd, Clayton, VIC 3800
        </p>
        <ul className="d-flex social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default Footer;
