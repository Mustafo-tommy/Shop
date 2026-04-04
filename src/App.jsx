import { Outlet } from "react-router-dom";
import CardNav from "./components/CardNav";
import logo from "./assets/react.svg";
import FloatingLines from "./components/FloatingLines";

const App = () => {
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
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="transparent"
        menuColor="#fff"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        theme="dark"
      />

      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      <main style={{ padding: "2rem", color: "#fff" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
