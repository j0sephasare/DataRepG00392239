import React from "react";

export class Home extends React.Component {
    render() {
        //main homepage introducing webpage
        return (
            <div>
                <h1>Welcome To My Games Library </h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}