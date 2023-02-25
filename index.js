import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './logo.svg'
import reportWebVitals from './reportWebVitals';


function Header (){
  return(
    <>
    <header>
      <nav>
        <img src={logo}></img>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About </a></li>
          <li><a href='#'>Contact Us </a></li>
          <li><a href='#'> Profile </a></li>
        </ul>
      </nav>
    </header>
    </>
  )
 }
function Heading(){
  return(
  <>
  <h1>Reason I am exited to learn React</h1>
  </>
  )
}
 function Text(){
  return(
    <>
    <section>
      <ol>
        <li>
          It's a popular libreary , so that I"ll be able to fit in with the cool kids !
        </li>
        <li>
          I'm more likely to get a job as a developer if i know React 
        </li>
      </ol>
    </section>
    <footer>
      <p>"© 2023 Ziroll development. All rights reserved.

</p>
    </footer>
    </>
  )
 }

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <><Header/><Heading/><Text/></>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
