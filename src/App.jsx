import React from "react";

import "./App.scss";

//svg imports
import logo from "../public/logo.svg";

function App() {
	
	return (
		<div className="App">
			<nav className="nav">
				<img src={logo} alt="logo" className="nav__logo" />
				<div className="nav__items">
					<span className="text-regular nav__items__text">test1</span>
					<span className="text-regular nav__items__text">test2</span>
					<span className="text-regular nav__items__text">test3</span>
					<span className="text-regular nav__items__text">test4</span>
				</div>
			</nav>
			<section className="intro">
				<div className="intro__title">
					<h2 className="intro__title_subtitle">
						THE ULTIMATE GUIDE TO
					</h2>
					<h1 className="intro__title__title typed-out">
						rgb_
					</h1>
				</div>
			</section>
			<section className="rgb-vs">
				<div className="rgb-vs__content">
					<h2 className="rgb-vs__h2">
						RGB vs. ARGB: The Difference
					</h2>
					<span className="text-regular rgb-vs__content__text">
					The acronym RGB stands for Red, Green and Blue, the three primary colors that can be combined to make up almost any color. 
					While ARGB stands for Addressable Red, Green and Blue. Though this naming is slightly confusing; since both RGB and ARGB are technnically addressable.

					ARGB actually signifies Individually Addressable LEDs
					</span>
					<div className="rgb-vs__content__visual">
						
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
