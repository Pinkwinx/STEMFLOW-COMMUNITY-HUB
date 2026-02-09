import { useState, useEffect } from "react";
import "./ExpandableCards.css";

const cards = [
  {
    title: "Summertime Sadness",
    description: "Lana Del Rey",
    image: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    content:
      "Lana Del Rey is known for cinematic, melancholic music exploring love, fame, and nostalgia."
  },
  {
    title: "For Whom The Bell Tolls",
    description: "Metallica",
    image: "https://assets.aceternity.com/demos/metallica.jpeg",
    content:
      "Metallica is a legendary metal band with aggressive sound and deep themes."
  }
];

export default function ExpandableCards() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Overlay */}
      {active && <div className="overlay" onClick={() => setActive(null)} />}

      {/* Expanded Card */}
      {active && (
        <div className="modal">
          <div className="modal-card">
            <button className="close" onClick={() => setActive(null)}>✕</button>
            <img src={active.image} alt={active.title} />
            <h2>{active.title}</h2>
            <p className="desc">{active.description}</p>
            <p>{active.content}</p>
          </div>
        </div>
      )}

      {/* Card Grid */}
      <div className="grid">
        {cards.map((card, i) => (
          <div key={i} className="card" onClick={() => setActive(card)}>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
