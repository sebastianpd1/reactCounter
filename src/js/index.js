//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
let counter = 0;

//render your react application
setInterval(() => {
	const one = Math.floor(counter / 1000);
	const two = Math.floor(counter / 100);
	const three = Math.floor(counter / 10);
	const four = Math.floor(counter / 1);
	counter++;
	ReactDOM.render(
		<Home digit1={one} digit2={two} digit3={three} digit4={four} />,
		document.querySelector("#app")
	);
}, 1000);
