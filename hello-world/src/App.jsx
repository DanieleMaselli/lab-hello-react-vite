// src/App.jsx
import './App.css';
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import logo from './assets/ironhack-logo-xs.png'
import menu from './assets/menu-top-xs.png'



function App() {
  const hello = 'Hello There';
  return (
    <div>
      <header className='cntMain'> 
        <nav className='navBar'> 
          <img src= {logo} alt=""/>   
          <img src= {menu} alt=""/>  
        </nav>   
        <h1 className='header'>Say Hello to <br></br> ReactJS</h1>     
        <p className='paragraph'>You will learn how to use<br></br> the most popular frontend library,<br></br>and become a super Ninja developer.</p>
        <div className='buttonCtn'>
         <button>Awesome!</button>
        </div> 
      </header>
        
      <div className='imgContainer'>
        <div className='icon1'>
          <img src= {icon1} alt="" />
          <h2>Declarative</h2>
          <p>Hello</p>
        </div> 
        <div className='icon1'>
          <img src= {icon2} alt="" />
          <h2>Components</h2>
          <p>Hello</p>
        </div>  
        <div className='icon1'>
          <img src= {icon3} alt="" />
          <h2>Single-Way</h2>
          <p>Hello</p>
        </div>  
        <div className='icon1'>
          <img src= {icon4} alt="" />
          <h2>JSX</h2>
          <p>Hello</p>
        </div>   

        
      </div>
    </div>
 
  );

}


export default App;


