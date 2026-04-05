import CardNav from "../components/CardNav";

function Contact() {
  const items = [
    {
      label: "About",
      to: "/about",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Products",
      to: "/products",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      to: "/contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
      ],
    },
  ];

  return (
    <div>
      <CardNav
        logoAlt="Company Logo"
        items={items}
        baseColor="transparent"
        menuColor="#fff"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        theme="dark"
      />
    </div>
  );
}

export default Contact;
