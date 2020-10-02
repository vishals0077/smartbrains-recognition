import React from 'react';
const NavigationBar=({signout}) =>
{
	return(
		<nav style={{display:'flex' , justifyContent:'flex-end' ,margin:10}}>
		<p className='f3 link dim black underline pa3 pointer' onClick={signout}> SignOut </p>
		</nav>
		);
}
export default NavigationBar;