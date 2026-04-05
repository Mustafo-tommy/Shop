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
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#0f0a1a",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={false}
          parallax={false}
        />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <main style={{ color: "#fff" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default App;
