import React from "react";
import "./CardContainer.css";

function Card({ children }) {
	return <div className="containerGrid">{children}</div>;
}

export default Card;
