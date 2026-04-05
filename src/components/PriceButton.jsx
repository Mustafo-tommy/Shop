import { useState } from "react";

const styles = `
  .btn-wrapper {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    font-family: 'DM Sans', sans-serif;
  }

  .price-btn {
    position: relative;
    padding: 14px 36px;
    border-radius: 999px;
    border: none;
    background: #f0edf7;
    color: #0f0a1a;
    font-family: inherit;
    font-size: 1.05rem;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.2s ease, color 0.2s ease;
    box-shadow: 0 2px 16px rgba(0,0,0,0.35);
    min-width: 148px;
    text-align: center;
    outline: none;
  }

  .price-btn:hover {
    transform: scale(1.04);
    box-shadow: 0 6px 28px rgba(0,0,0,0.45);
  }

  .price-btn:active {
    transform: scale(0.97);
  }

  .price-btn.added {
    background: #c8f5d8;
    color: #0a4022;
    pointer-events: none;
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
    transform: scale(0);
    animation: ripple-anim 0.5s linear;
    pointer-events: none;
  }

  @keyframes ripple-anim {
    to { transform: scale(4); opacity: 0; }
  }

  .cart-toast {
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(200, 245, 216, 0.12);
    border: 1px solid rgba(200, 245, 216, 0.3);
    color: #c8f5d8;
    padding: 9px 18px;
    border-radius: 999px;
    font-size: 0.88rem;
    font-weight: 500;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.25s ease, transform 0.25s ease;
    pointer-events: none;
    white-space: nowrap;
  }

  .cart-toast.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

function PriceButton() {
  const [state, setState] = useState("idle");
  const [showToast, setShowToast] = useState(false);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    if (state !== "idle") return;

    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();
    setRipples((r) => [...r, { id, x, y, size }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);

    setState("added");
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setTimeout(() => setState("idle"), 300);
    }, 2200);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="btn-wrapper">
        <button
          className={`price-btn ${state === "added" ? "added" : ""}`}
          onClick={handleClick}
        >
          {ripples.map((rp) => (
            <span
              key={rp.id}
              className="ripple"
              style={{ width: rp.size, height: rp.size, left: rp.x, top: rp.y }}
            />
          ))}
          {state === "added" ? "✓ Added" : "$180.00"}
        </button>

        <div className={`cart-toast ${showToast ? "visible" : ""}`}>
          ✓ Added to cart
        </div>
      </div>
    </>
  );
}

export default PriceButton;
