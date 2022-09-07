import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

class StateExampleComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            subscriptionStatus: false,
            message: "Subscribe to our channel",
            subscribeButtonText: "Subscribe",
            notifications: false
        }
    }

    styles = {
        heading: {
            fontStyle: 'italic',
            color: 'purple'
        }
    };

    subscribe = () => {
        if (!this.state.subscriptionStatus) {
            this.setState({ 
                subscriptionStatus: true,
                message: "Subscribe to our channel",
                subscribeButtonText: "Subscribe",
                notifications: false
             });
        } else {
            this.setState({
                subscriptionStatus: false,
                message: "Thanks for subscribing to our channel! Click on the notifications bell to get notifications",
                subscribeButtonText: "Subscribed",
                notifications: false
            });
        }
    };

    setNotifications = () => {
        this.setState({
            message: "Thanks for enabling the notifications!",
            notifications: true
        });
    };

    render() {
        return (
            <div className='App'>
                <h3 style={this.styles.heading}>
                    {this.state.message}
                </h3>

                <button onClick={this.subscribe}>
                    {this.state.subscribeButtonText}
                </button>

                <button onClick={this.setNotifications}>
                    <FontAwesomeIcon icon={ this.state.notifications ? solid('bell') : regular('bell')} />
                </button>
            </div>
        )
    }
}

export default StateExampleComp
