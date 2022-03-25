import React from "react";

export default function Resume(props){
    let EduRender
    let ExpRender
    let SkillRender
    if (typeof(props.allState.education) == 'object') {
        EduRender = props.allState.education.map(item => {
            return (<ul key={props.allState.education.indexOf(item)} >
                <li>{item.schoolName}</li>
                <li>{item.location}</li>
                <li>{item.dateOfschool}</li>
                <li>{item.percentageMarks}</li>
            </ul>)
        })    
    }
    if (typeof(props.allState.experience) == 'object') {
        ExpRender = props.allState.experience.map(item => {
            return (<ul key={props.allState.experience.indexOf(item)}>
                <li>{item.employerName}</li>
                <li>{item.workDesc}</li>
                <li>{item.startDate}</li>
                <li>{item.endDate}</li>
            </ul>)
        })    
    } 
    if (typeof(props.allState.skills) == 'object') {
        SkillRender = props.allState.skills.map(item => {
            return (<ul key={props.allState.skills.indexOf(item)}>
                <li>{item}</li>
            </ul>)
        })    
    }

    return(
        <div>
            <h2>{props.allState.name}</h2>
            <h4>{props.allState.title}</h4>
            <p>{props.allState.aboutMe}</p>

            {EduRender}
            {ExpRender}
            {SkillRender}

            <p>{props.allState.contact} <br/> {props.allState.email} <br/> {props.allState.linkedIn}
                <br/> {props.allState.github} </p>
        </div>
    )
}