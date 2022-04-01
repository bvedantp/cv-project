import React from "react";

export default function MainHeader(props) {

    return (
        <div>
            <input type="text" name="name" onChange={props.nameInput} value={props.nameState.name} placeholder="Name" />
            <input type="text" name="title" onChange={props.titleInput} value={props.nameState.title} placeholder="Title" />
        </div>
    )
}