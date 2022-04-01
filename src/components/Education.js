/* eslint-disable no-restricted-globals */
import React from "react"

export default function Education(props) {
    const [formValid, setFormValid] = React.useState(true)
    const [eduState, setEduState] = React.useState({
        id: '',
        schoolName: '',
        boardStream: '',
        branchClass: '',
        location: '',
        dateOfschool: '',
        percentageMarks: ''
    })

    function inputEduState(event) {
        setEduState(prevEdu => {
            return {
                ...prevEdu,
                id: props.uniqId, 
                [event.target.name]: event.target.value
            }
        })
        setFormValid(false)
        //console.log(eduState)
    }

    function callbackParent() {
        props.returnState(eduState, props.uniqId)
    }
    
    return (
        <div>
            <input type="text" name="schoolName" onChange={() => inputEduState(event)} placeholder="School Name" />
            <input type="text" name="boardStream" onChange={() => inputEduState(event)} placeholder="Board/Stream" />
            <input type="text" name="branchClass" onChange={() => inputEduState(event)} placeholder="Branch/Class" />
            <input type="text" name="location" onChange={() => inputEduState(event)} placeholder="Address" />
            <input type="date" name="dateOfschool" onChange={() => inputEduState(event)} />
            <input type="number" name="percentageMarks" onChange={() => inputEduState(event)} placeholder="Percentage" />
            <button type="button" onClick={callbackParent} disabled={formValid} >Save</button>
        </div>
    )
}