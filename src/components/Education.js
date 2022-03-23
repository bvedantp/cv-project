/* eslint-disable no-restricted-globals */
import React from "react"

export default function Education(props) {
    const [eduState, setEduState] = React.useState({
        id: '',
        schoolName: '',
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
        //console.log(eduState)
    }

    function callbackParent() {
        props.returnState(eduState, props.uniqId)
    }

    return (
        <div>
            <input type="text" name="schoolName" onChange={() => inputEduState(event)} />
            <input type="text" name="location" onChange={() => inputEduState(event)} />
            <input type="date" name="dateOfschool" onChange={() => inputEduState(event)} />
            <input type="number" name="percentageMarks" onChange={() => inputEduState(event)} />
            <button type="button" onClick={callbackParent} >Save</button>
        </div>
    )
}