import CardNav from "./components/CardNav";
import logo from "./assets/react.svg";
import FloatingLines from "./components/FloatingLines";

const App = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
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
        baseColor="transparent" // ← было #fff
        menuColor="#fff" // текст делаем белым
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        theme="dark" // ← было light
      />

      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={5}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>
    </div>
  );
};

export default App;
