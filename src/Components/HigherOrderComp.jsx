// Higher Order Component Example
import React from 'react'

const updatedComp = OriginalComp => {
    class NewComp extends React.Component {
        render() {
            return (
                <OriginalComp name="The user" />
            );
        }
    }

    return NewComp;
}

export default updatedComp;
