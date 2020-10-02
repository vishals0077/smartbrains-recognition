import React from 'react';
import './FaceRecognition.css';
const FaceRecognition=({sendimage})=>
{
	return(
		<div className="center ma">
		<div id="parentdiv" className="relative  mt2" style={{"width":"30%", "left":"35%"}}>
		<img id="inputImage" src={sendimage} style={{height: 500, width: "100%"}} alt=" "/>
		
		</div>
		</div>
		);
}

export default FaceRecognition;