// Higher Order Component Example
import { Component } from 'react'

const updatedComp = (OriginalComp) => {
    class NewComp extends Component {
        render() {
            return (
                <OriginalComp name="The user" />
            );
        }
    }

    return NewComp;
}

export default updatedComp;
