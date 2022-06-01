import React, { Component } from 'react'
import updatedComp from './HigherOrderComp'

export class Hower extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    updateHower = () => {
        this.setState({ count: this.state.count + 1 });
    }
    

  render() {
    const { count } = this.state;
    
    return (
        <div>
        <button onMouseEnter={this.updateHower}>
            { this.props.name } howered { count } time.
        </button>
    </div>
    )
  }
}

export default updatedComp(Hower);
