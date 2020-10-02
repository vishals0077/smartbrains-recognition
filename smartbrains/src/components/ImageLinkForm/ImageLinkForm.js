import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm= ({onchangetext, onclicking,onclickingreset}) =>
{
	return ( 
<div>
		<p className='f3'> 
	This magic will detect faces from your photos
	</p>
	<div className="patternBack shadow-5 w-70 center " style={{height:200 ,marginBottom:100}}>
	<input id="photolink" type="text" className="f4 pa2 w-50 " style={{marginTop:100}} onChange={onchangetext}/> 
	<button className=" grow f4 link ph3 pv2 df white bg-light-purple" style={{borderRadius: 10}} onClick={onclicking}>Detect </button>
	</div>
	<button id="resetbutton" onClick= {onclickingreset}>RESET</button>
	</div>
	);
}

export default ImageLinkForm;