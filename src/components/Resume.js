import React from "react";
import styled from "styled-components";


const MainDiv = styled.div`
font-family: Arial, Helvetica, sans-serif;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(128, 128, 128, 0.315);
margin: 20px;
padding: 12px;
`;

const Button = styled.button`
padding: 6px 13px;
border-radius: 8px;
border: 2px solid white;
background-color: red;
color: whitesmoke;
`;

const Hero = styled.div`
display: flex;
flex-direction: column;
padding: 12px;
margin: 12px;
gap: 8px;
justify-content: center;
`
const Name = styled.h2`
align-self: center;
font-size: 4em;
border: 2px solid black;
`

const Title = styled.h4`
align-self: center;
font-size: 1em;
margin: -70px 20px 30px 0px;
`

const TopPart = styled.section`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
gap: 20px;
max-height: 700px;
`

const AboutMe = styled.p`
flex-wrap: wrap;
max-width: 30vw;
`

const AboutHeading = styled.h4`
    font-size: larger;
    margin-bottom: 8px;
`



const SkillList = styled.section`
display: flex;
flex-direction: column;
max-width: 30vw;
justify-content: center;
align-items: flex-start;
border: 3px solid black;
padding: 16px;
`

const AllSkills = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    padding: 0;
    list-style-type: none;
    margin-top: 15px;
`

const EduDiv = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const EduHeading = styled.h4`
    font-size: larger;
    margin-bottom: 8px;
`

const Education = styled.ul`
    color: blue;
`

export default function Resume(props){
    let EduRender
    let ExpRender
    let SkillRender
    if (typeof(props.allState.education) == 'object') {
        EduRender = props.allState.education.map(item => {
            return (<Education key={props.allState.education.indexOf(item)} >
                <li>{item.schoolName}</li>
                <li>{item.boardStream}</li>
                <li>{item.branchClass}</li>
                <li>{item.location}</li>
                <li>{item.dateOfschool}</li>
                <li>{item.percentageMarks}</li>
            </Education>)
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
            return (
                <li key={props.allState.skills.indexOf(item)} >{item}</li>
            )
        })    
    }
 
    return(
        <MainDiv>
            <Button type="button" onClick={props.toPDF} >To PDF</Button>
            <Hero id="divToPrint">
                <Name>{props.allState.name}</Name>
                <Title>{props.allState.title}</Title>
                <TopPart>
                    <AboutMe>
                        <AboutHeading>About Me</AboutHeading>
                        {props.allState.aboutMe}</AboutMe>
                    <SkillList>
                        <h4 style={{margin:0}}>Skills</h4>
                        <AllSkills>
                            {SkillRender}
                        </AllSkills>
                        
                    </SkillList>
                </TopPart>
                <EduDiv>
                    <EduHeading>Education</EduHeading>
                    {EduRender}
                </EduDiv>
                
                {ExpRender}

                <p>{props.allState.contact} <br/> {props.allState.email} <br/> {props.allState.linkedIn}
                    <br/> {props.allState.github} </p>
            </Hero>
        </MainDiv>
    )
}