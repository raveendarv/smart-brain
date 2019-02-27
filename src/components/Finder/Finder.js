import React from 'react';
import './Finder.css';

const Finder = ({ imageUrl, box }) => {
	return (
		<div className="center ma ">
			<div className="absolute mt2 center">
				<img id="inputimage" className="w-50 pa1" alt="" src={imageUrl} width="500px" heigh="auto" />

				<ul className="w-50 white f4 pa3 non">
					<li>{box.guess1}</li>
					<li>{box.guess2}</li>
					<li>{box.guess3}</li>
					<li>{box.guess4}</li>
				</ul>
			</div>
		</div>
	);
};

export default Finder;
