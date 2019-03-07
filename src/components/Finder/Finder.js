import React from 'react';
import './Finder.css';

const Finder = ({ imageUrl, box }) => {
	return (
		<div className="center ma ">
			<div className="absolute mt2 center">
				<img id="inputimage" className="w-55 pa1" alt="" src={imageUrl} width="350px" height="100%" />

				<ul className="w-45 white f4 pa3 non">
					<li>
						{box.guess1} {box.value1}
					</li>
					<li>
						{box.guess2} {box.value2}
					</li>
					<li>
						{box.guess3} {box.value3}
					</li>
					<li>
						{box.guess4} {box.value4}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Finder;
