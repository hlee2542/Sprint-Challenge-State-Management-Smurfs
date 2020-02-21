import React from "react";

const Member = (props) => {
    return (
        <div>
            <h4>{props.smurf.name}</h4>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    );
};

export default Member;