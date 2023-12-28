export default ({ member, isFirst, isLast, handleClose, handleChange }) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <a
          href="#close"
          aria-label="Close"
          className="close"
          data-target="modal-member"
          onClick={() => {
            handleClose("closed");
          }}
        ></a>
        <hgroup>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <img
              style={{ width: "200px" }}
              src={`images/${member.slug}.svg`}
              alt={member.name}
            />
            <hgroup>
              <h1>{member.name}</h1>
              <p>{member.bio}</p>
            </hgroup>
            <hgroup>
              {!isFirst && (
                <a
                  className="outline"
                  href="#"
                  role="button"
                  onClick={() => {
                    handleChange(member.id - 1);
                  }}
                >
                  previous
                </a>
              )}
              {!isLast && (
                <a
                  className="outline"
                  href="#"
                  role="button"
                  onClick={() => {
                    handleChange(member.id + 1);
                  }}
                >
                  next
                </a>
              )}
            </hgroup>
          </div>
        </hgroup>
      </article>
    </dialog>
  );
};
