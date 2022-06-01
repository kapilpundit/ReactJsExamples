// import logo from './logo.svg';
import './App.css';
import FunctionalComp from './Components/FunctionalComp';
import ClassComp, { ClassComp2 } from './Components/ClassComp';
import Click from './Components/Click';
import Hower from './Components/Hower';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div>
      <h1>Hello World! Welcome to React JS.</h1>
      <h2>The following are two different type of Components in React - </h2>
      <FunctionalComp />
      <ClassComp />
      <ClassComp2 />
      <Click />
      <Hower />
      <ParentComp />
    </div>
  );
}

export default App;
