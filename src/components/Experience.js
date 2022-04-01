/* eslint-disable no-restricted-globals */
import React from "react";

export default function Experience(props) {
    const [formValid, setFormValid] = React.useState(true)
    const [experienceState, setExperienceState] = React.useState({
        id: '',
        employerName: '',
        workDesc: '',
        startDate: '',
        endDate: ''
    })

    function inputExpState(event) {
        setExperienceState(prevExp => {
            return {
                ...prevExp,
                id: props.uniqId, 
                [event.target.name]: event.target.value
            }
        })
        //console.log(eduState)
        setFormValid(false)
    }

    function callbackParent() {
        props.returnState(experienceState, props.uniqId)
    }

    return (
        <div>
            <input type="text" name="employerName" onChange={() => inputExpState(event)} placeholder="Employer" />
            <input type="text" name="workDesc" onChange={() => inputExpState(event)} placeholder="Responsibilities" />
            <input type="date" name="startDate" onChange={() => inputExpState(event)} />
            <input type="date" name="endDate" onChange={() => inputExpState(event)} />
            <button type="button" onClick={callbackParent} disabled={formValid} >Save</button>
        </div>
    )
}