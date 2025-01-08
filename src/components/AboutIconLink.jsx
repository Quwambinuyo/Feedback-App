import React from "react";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to={{ pathname: "/about" }}>
        <FaQuestion size={20} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
