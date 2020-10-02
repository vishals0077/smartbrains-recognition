import React from 'react';

class Register extends React.Component
{
  constructor (props)
  {
    super(props);
    this.state = {
      signupemail: '',
      signupname:'',
      signuppassword:''

    }
  }

  onButtonClick=()=>
  {
   fetch("https://immense-hamlet-47321.herokuapp.com/api/register", {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body : JSON.stringify({
       email: this.state.signupemail,
       name: this.state.signupname,
       password: this.state.signuppassword
     })
   }).then(response=> response.json()).then(user=> {
      if(user)
      {

        this.props.loaduser(user);
        this.props.signupclick2();
      }
        
      
    })

    
  }
  changename=(event)=>
  {
    this.setState({signupname:event.target.value})
  }
  changeemail=(event)=>
  {
    this.setState({signupemail:event.target.value})
  }
  changepassword=(event)=>
  {
    this.setState({signuppassword:event.target.value})
  }
  render()
  {
    return(
    <article className="br2 ba shadow-5 dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
    <main className="pa4 black-80">
  <form className="measure center">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
       <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.changeemail} type="email" name="email-address"  id="email-address" />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.changename} type="text" name="name"  id="name" />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.changepassword} type="password" name="password"  id="password" />
      </div>
     
    </fieldset>
    <div className="mv3">
      <p onClick={this.onButtonClick} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Sign Up </p>
    </div>
    
  </form>
</main>
</article>
    );
  }
	
}
export default Register;