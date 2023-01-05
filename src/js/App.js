import Main from './component/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  return (
      <Main 
        reloj={props.reloj} h1={props.h1} h2={props.h2} m1={props.m1} m2={props.m2} s2={props.s2} s1={props.s1} Start={props.Start} 
        Stop={props.Stop} Reset={props.Reset}
      />
    
  );
}

export default App;