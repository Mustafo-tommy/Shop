import { useNavigate } from "react-router-dom";

const featured = [
  {
    name: "Nike Air Max Plus «Triple Black»",
    price: "$180.00",
    img: "https://asset.imagine.art/processed/dfd49d3b-202b-4442-b762-a2be20db6919",
  },
  {
    name: "Nike Air Max Plus «Triple Black»",
    price: "$180.00",
    img: "https://asset.imagine.art/processed/ffa52af7-566f-4c38-95eb-ccd708eb3ce8",
  },
  {
    name: "Nike Air Max Plus «Triple Black»",
    price: "$180.00",
    img: "https://asset.imagine.art/processed/a7d92c67-3f21-4fa5-84db-d2312fdf4f10",
  },
];

function About() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "100px 60px 60px", color: "#fff" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          marginBottom: "12px",
          textAlign: "center",
        }}
      >
        Featured
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "rgba(255,255,255,0.5)",
          marginBottom: "48px",
          fontSize: "1.1rem",
        }}
      >
        Лучшие товары этого сезона
      </p>

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {featured.map((item, i) => (
          <div
            key={i}
            style={{
              flex: "1",
              minWidth: "280px",
              maxWidth: "400px",
              borderRadius: "20px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
            onClick={() => navigate("/products")}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div style={{ padding: "16px 20px 20px" }}>
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                {item.name}
              </h2>
              <span
                style={{
                  background: "#f0edf7",
                  color: "#0f0a1a",
                  padding: "6px 18px",
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
