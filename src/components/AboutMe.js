import React from "react";

export default function AboutMe(props) {
    return (
        <textarea name="aboutMe" onChange={props.aboutInput} value={props.aboutState.aboutMe} placeholder="Describe yourself" />
    )
}