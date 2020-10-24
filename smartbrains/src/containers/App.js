import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import './App.css';
import Particles from 'react-particles-js';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import '../components/FaceRecognition/FaceRecognition.css';

const app= new Clarifai.App({
  apiKey: '47ae45ff0c354d6db546f62bdb4d7038'
})
class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      input:'',  
      route: 'signin',
      id:'124',
    name:'',
    email: '',
    
    entries:'',
    joined: ''
    }
    

  }
  
 componentDidMount()
 {
   
        fetch("https://immense-hamlet-47321.herokuapp.com/api/").then(response=> console.log(response.json()));
 }



  
  onchange=async function(event)
  {
     
      await this.setState({input: event.target.value});
      
  }
   func3=()=>
   {
     this.setState({route: 'signup'});

   }
   loaduser=(data)=>
  {
    this.setState({
       name:data.name,
      email: data.email,
      
      entries:data.entries,
      joined: data.joined
    })
  }
  signInClick=()=>
  {
    
    this.setState({route: 'home'});

   
  }
  signInClick2=()=>
  {
    
    this.setState({route: 'signin'});
 
  }
  signInClick3=()=>
  {
    
    this.setState({route: 'signup'});
    
  }
  onclickreset= ()=>
        {
          this.signInClick();
          document.querySelectorAll('.bounding-box').forEach(function(a){
          a.remove()
          })
          document.getElementById("inputImage").setAttribute('src',"");
          document.getElementById("photolink").value="";
          this.setState({route: 'home'});
        }
  onclickbutton=()=>
  {
    
    
      app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input).then(
    response=> {
       //console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
       const image= document.getElementById("inputImage");
        const width= Number(image.width);
        const height = Number(image.height);
       for(var response2 of response.outputs[0].data.regions)
       {
         const clarifaiFace= response2.region_info.bounding_box;
         var newBox={
           leftcol: clarifaiFace.left_col * width,
          rightcol: width - (clarifaiFace.right_col * width),
          toprow: clarifaiFace.top_row * height,
          bottomrow: height - (clarifaiFace.bottom_row * height)
         }
        //console.log(response2.data.concepts[0].name, response2.data.concepts[20].name);
       
        
         
         var newdiv= document.createElement("div");
         newdiv.setAttribute("class", "bounding-box");         
         const put=String("top:"+newBox.toprow+"px; bottom:"+ newBox.bottomrow+"px; left:"+ newBox.leftcol+"px; right:"+newBox.rightcol+"px");
        
         newdiv.setAttribute("style",put);
         var info = "<span>"+response2.data.concepts[0].name+" "+response2.data.concepts[20].name[0].toUpperCase()+"</span>";

          newdiv.innerHTML = info;
        document.getElementById("parentdiv").appendChild(newdiv);
        document.getElementById("resetbutton").style.display = "block";

       }
     
       
        
       
        
      
      //this.settingstate(accessing.box, newBox);
       
       

          },
    function(err) {
      // there was an error
      console.log(err);
    }
  );
  }
  
  render(){
  return (
    <div className="App">
    <Particles 
              params={{
            		particles: {
            			
            			number:
            			{
            				value: 300,
            				density: {
            					enable: true,
            					value_area:800
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                position: 'fixed',
                top:0,
                bottom:0,
                left:0,
                right:0,
                zIndex:-1
              }}
            />
           

{  (this.state.route === 'home')
      ?
       <div>
        <NavigationBar signout={this.signInClick2}/>
     <Logo />
     <ImageLinkForm onchangetext={(e) => {this.onchange(e)}}  onclicking={this.onclickbutton} onclickingreset={this.onclickreset}/>
     <FaceRecognition sendimage={this.state.input}  />
     </div>
      :
     (
       (this.state.route === 'signin')
       ?
       <SignIn  signinclick={this.signInClick} signupclick={this.func3} homeclick={this.signInClick2}/>
       :
        <Register  loaduser={this.loaduser} signupclick2={this.signInClick} />
     
     )

   }

    </div>
  );
}
}

export default App;
