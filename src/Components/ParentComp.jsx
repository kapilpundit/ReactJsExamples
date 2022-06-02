import React, { Component } from 'react'
import RegularComp from './RegularComp';
import PureComp from './PureComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Simplilearn"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Simplilearn"
            });
        }, 2000);
    }


    render() {
        console.log("Parent component render()");
        return (
            <div>
                I am the Parent Component!
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
