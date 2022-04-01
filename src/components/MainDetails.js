import React from "react";

export default function MainDetails(props) {

    return(
        <div>
            <input type="email" name="email" onChange={props.updateState} placeholder="Email" />
            <input type="tel" name="contact" onChange={props.updateState} placeholder="Contact No." />
            <input type="url" name="linkedIn" onChange={props.updateState} placeholder="LinkedIn" />
            <input type="url" name="github" onChange={props.updateState} placeholder="GitHub" />
        </div>
    )
}