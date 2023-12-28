import Button from "./Button";

export default ({ cast, onChoice }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
        gap: `1rem`,
        marginBottom: "1rem",
      }}
    >
      {cast.map((member) => (
        <span key={member.id}>
          <a
            onClick={() => {
              onChoice(member);
            }}
            data-tooltip={member.name}
          >
            <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
          </a>
          <Button member={member} onChoice={onChoice}/>
        </span>
      ))}
    </div>
  );
};
