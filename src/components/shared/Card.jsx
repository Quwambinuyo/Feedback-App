import React from "react";

function Card({ children, reverse }) {
  return (
    <div
      // return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

// Card.defaultProps = {
//   reverse: true,
// };

// Card.PropTypes = {
//   children: PropTypes.node.isRequired,
//   reverse: PropTypes.bool,
// };
export default Card;
