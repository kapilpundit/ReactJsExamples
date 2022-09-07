import React, { Component } from 'react'

class ClassProps extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       componentName: "ClassProps"
    }
  }

  render() {
    return (
      <div>
        <h3>
          Hi {this.props.name} from {this.props.place}, welcome to the Class Props tutorial!
        </h3>
        <p>Example state property in ClassProp Component: {this.state.componentName}</p>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default ClassProps
