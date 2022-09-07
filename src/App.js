import { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import FunctionalComp from './Components/FunctionalComp';
// import ClassComp, { ClassComp2 } from './Components/ClassComp';
// import Click from './Components/Click';
// import Hower from './Components/Hower';
// import ParentComp from './Components/ParentComp';
// import ClassProps from './Components/ClassProps';
// import FunctionalProps from './Components/FunctionalProps';
// import StateExampleComp from './Components/StateExampleComp';
import EventsExampleComp from './Components/EventsExampleComp'

class App extends Component {
  styles = {
    heading: {
      fontStyle: 'bold',
      color: 'teal'
    }
  };

  render() {
    return (
      <div>
        <h1 className='App' style={this.styles.heading}>Hello World! Welcome to React JS.</h1>
        {/* <h2>The following are two different type of Components in React - </h2> */}
        {/* <FunctionalComp />
        <ClassComp />
        <ClassComp2 /> */}
        {/* <Click />
        <Hower />
        <ParentComp /> */}

        {/* <ClassProps name="User 1" place="Web">
          This will be rendered inside the ClassProp component using <code>this.props.children</code>
        </ClassProps>
        <ClassProps name="User 2" />
        <ClassProps name="User 3">
          This button is rendered using <code>this.props.children</code> inside ClassProps <button>Click</button>
        </ClassProps>
        <FunctionalProps name="User 4" place="API" /> */}

        {/* <StateExampleComp /> */}

        <EventsExampleComp />
      </div>
    );
  }
}

// function App() {
//   return (

//   );
// }

export default App;
