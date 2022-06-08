import React from "react";

export default function FunctionalProps(props) {
    return (
        <div>
            <h3>This is a Functional Component using props</h3>
            <h3>Hello {props.name}, welcome to the Functional Props tutorial!</h3>
        </div>
    );
}