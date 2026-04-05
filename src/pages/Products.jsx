import CardNav from "../components/CardNav";
import PriceButton from "../components/PriceButton";

function Products() {
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

  const cardImgStyle = { position: "relative" };
  const btnStyle = {
    position: "absolute",
    bottom: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
  };

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

      <div className="container">
        <div className="content">
          <div className="card">
            <div style={cardImgStyle}>
              <img
                className="img"
                src="https://asset.imagine.art/processed/dfd49d3b-202b-4442-b762-a2be20db6919"
                alt=""
              />
              <div style={btnStyle}>
                <PriceButton />
              </div>
            </div>
            <h1 className="text">Nike Air Max Plus «Triple Black»</h1>
          </div>

          <div className="card-left">
            <div style={cardImgStyle}>
              <img
                className="img"
                src="https://asset.imagine.art/processed/ffa52af7-566f-4c38-95eb-ccd708eb3ce8"
                alt=""
              />
              <div style={btnStyle}>
                <PriceButton />
              </div>
            </div>
            <h1 className="text">Nike Air Max Plus «Triple Black»</h1>
          </div>
        </div>

        <div className="content-ru">
          <div className="card">
            <div style={cardImgStyle}>
              <img
                className="img"
                src="https://asset.imagine.art/processed/a7d92c67-3f21-4fa5-84db-d2312fdf4f10"
                alt=""
              />
              <div style={btnStyle}>
                <PriceButton />
              </div>
            </div>
            <h1 className="text">Nike Air Max Plus «Triple Black»</h1>
          </div>

          <div className="card-left">
            <div style={cardImgStyle}>
              <img
                className="img"
                src="https://asset.imagine.art/processed/92f49737-2f3f-410e-aee7-1c0770308c38"
                alt=""
              />
              <div style={btnStyle}>
                <PriceButton />
              </div>
            </div>
            <h1 className="text">Nike Air Max Plus «Triple Black»</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
