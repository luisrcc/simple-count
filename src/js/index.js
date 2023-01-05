import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


let reloj = 10;
let h1 = 0;
let h2 = 0;
let m1 = 0;
let m2 = 0;
let s1 = 0;
let s2 = 0;
let encendida = false;

const Reset = () => {
 h1 = 0;
 h2 = 0;
 m1 = 0;
 m2 = 0;
 s1 = 0;
 s2 = 0;
encendida = false;
}

const Stop = () => {
  encendida = false;
}

const Start = () => {
  encendida = true;
}


setInterval(() => {

  if (encendida === true){
  
    s2 = s2 + 1
    if (s2 === 10) {
      s2 = 0;
      s1 = s1 + 1
    }
    if (s1 === 6) {
      s1 = 0
      m2 = m2 + 1
    }
    if (m2 === 10) {
      m2 = 0;
      m1 = m1 + 1
    }
    if (m1 === 6) {
      m1 = 0
      h2 = h2 + 1
    }
    if (h2 === 10) {
      h2 = 0;
      h1 = h1 + 1
    }
    if (h1 === 10) {
      h1 = 0;
      h2 = 0;
      m1 = 0;
      m2 = 0;
      s1 = 0;
      s2 = 0;
    }
  }
    


  ReactDOM.render(
    <>
      <App reloj={reloj} h1={h1} h2={h2} m1={m1} m2={m2} s2={s2} s1={s1} Start={Start} Stop={Stop} Reset={Reset} />
    </>,
    document.getElementById('root')
  );

}, 1000)