import React from "react";

class ClassComp extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    This is a Class Component.
                </h2>
                <p>
                    Class Components must have a render() method and th render() should return some HTML!
                </p>
            </div>
        );
    }
}

export class ClassComp2 extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    This is a another Class Component (ClassComp2).
                </h2>
                <p>
                    ClassComp2 uses named export instead of the default export!
                </p>
            </div>
        );
    }
}

export default ClassComp;