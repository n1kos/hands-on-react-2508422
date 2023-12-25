import { useState, useEffect } from "react";

export default () => {
  const [cast, setCast] = useState([]);

  async function fetchCast() {
    const response = await fetch("cast.json");
    const data = await response.json();
    setCast(data);
  }

  useEffect(() => {
    fetchCast();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      {cast.map((member) => (
        <a key={member.id} data-tooltip={member.name}>
          <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
        </a>
      ))}
    </div>
  );
};
