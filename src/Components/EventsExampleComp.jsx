import React, { Component } from 'react'

export class EventsExampleComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }

        this.updateName = this.updateName.bind(this);
    }

    updateName = function (event) {
        alert(this.state.name);
        this.setState({
            name: event.target.value
        });
    }

    componentDidUpdate = () => {
        console.log("componentDidUpdate");
    }

    click = (name, date) => {
        alert(`I was clicked by ${name} at ${date.toDateString()}!`);
    }

    render() {
        return (
            <div>
                <h3>EventsExampleComponent</h3>
                <p>
                    This component explains
                    <ol>
                        <li>Use of events</li>
                        <li>Binding <pre>this</pre> in two ways</li>
                        <ol>
                            <li>
                                Binding <pre>this</pre> to a regular function from inside the class component's constructor
                            </li>
                            <li>Binding <pre>this</pre> to a regular function directly from the event call from an element. <br />
                                <pre>
                                    <input type="text" name="name" id="name" onInput={ this.updateName.bind(this) } />
                                </pre>
                            </li>
                            <li>
                                If using arrow function to define a function, no need to bind <pre>this</pre>, as it will be pre-bind.
                            </li>
                        </ol>
                    </ol>
                </p>

                <input type="text" name="name" id="name" onInput={ this.updateName } />

                <p>
                    Your name is: { this.state.name }
                </p>

                <button onClick={ this.click.bind(this, "Kapil", new Date()) }>Click Me!</button>
            </div>
        )
    }
}

export default EventsExampleComp
