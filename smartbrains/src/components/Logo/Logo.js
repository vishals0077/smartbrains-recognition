import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
const Logo= ()=>
{
	return(
		<Tilt className="Tilt shadow-5" options={{ max : 25 }} style={{ background: 'linear-gradient(to right,rgb(19, 242, 239),rgb(235, 42, 206))', height: 150, width: 150, marginLeft: 40 , borderRadius: 10 ,display:'flex' }} >
		 <div className="Tilt-inner"> <img src={brain} alt=" "/> </div>
		</Tilt>
		);
}
export default Logo;