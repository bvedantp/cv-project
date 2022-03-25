import React from "react";

export default function MainDetails(props) {

    return(
        <div>
            <input type="email" name="email" onChange={props.updateState} />
            <input type="tel" name="contact" onChange={props.updateState} />
            <input type="url" name="linkedIn" onChange={props.updateState} />
            <input type="url" name="github" onChange={props.updateState} />
        </div>
    )
}