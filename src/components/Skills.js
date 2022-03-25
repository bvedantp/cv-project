/* eslint-disable no-restricted-globals */
import React from "react";

export default function Skills(props) {
    const [counterState, setCountState] = React.useState([1])
    const [skillState, setSkillState] = React.useState([""])

    let allFields = counterState.map(item => {
        return(
            <input type="text" key={item} id={item-1} onChange={()=>updateState(event)} /> //onChange set array[i]=whateveristyped
        )
    })

    function addField(){
        setCountState(prevCount => {
            return [...prevCount, prevCount.length+1]
        })

        setSkillState(prevSkill => {
            return [...prevSkill, ""]
        })
    }

    function updateState(event){
        setSkillState(prevSkill => {
            prevSkill[event.target.id] = event.target.value
            return prevSkill
            
        })
       // console.log(skillState)
       props.returnSkillState(skillState)
    }

    return(
        <div>
            {allFields}
            <button type="button" onClick={addField}>Add Skill</button>
        </div>
    )
}