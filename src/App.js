/* eslint-disable no-restricted-globals */
import React from "react";
import MainHeader from "./components/MainHeader";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import MainDetails from "./components/MainDetails";
import Resume from "./components/Resume";

function App() {
  const [mainState, setMainState] = React.useState({
    name: "",
    title: "",
    aboutMe: "",
    education: "", //edu===finalstate
    experience: "",
    skills: "",
    email: "",
    contact: "",
    linkedIn: "",
    github: ""
  })

  function updateMainState(event) {
    setMainState(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
   //console.log(mainState)
  }

//EDU START ////////////////////////////////////////////////////

  const [idState, setIdState] = React.useState([1])
  const [eduFinalState, setEduFinalState] = React.useState([])
  
   function updateFinal(stat, identificationNo) {

   // console.log(identificationNo) //MAJOR BUG IF SAVE PRESSED WHEN ALL fiels empty, SOLUTION: MAKE SAVE BUTTON GREY, ONLY ACTIVATE WHEN ALL FIELS FILLED
    let indexOfState = eduFinalState.findIndex(eduObject => {
      return identificationNo === eduObject.id
    })

    setEduFinalState(prevState => {
      if(indexOfState == -1) {
        return [...prevState, stat]
      } else {
        eduFinalState[indexOfState] = stat
        return eduFinalState
      } 
    })

    setMainState(prevMainState => {
      return {
        ...prevMainState,
        education: eduFinalState
      }
    })
    //console.log(mainState)
   }

  function addId() {
    setIdState(prevId => {
      return [
        ...prevId,
        prevId.length+1
      ]
    })
  }

  let allEdu = idState.map(item => {
    return <Education key={item} uniqId={item} returnState={updateFinal} />
  })

//EDU END /////////////////////////////////////////////////////////////

//EXP START ///////////////////////////////////////////////////////////

const [idExpState, setIdExpState] = React.useState([1])
const [expFinalState, setExpFinalState] = React.useState([])

 function updateExpFinal(stat, identificationNo) {

 // console.log(identificationNo) //MAJOR BUG IF SAVE PRESSED WHEN ALL fiels empty, SOLUTION: MAKE SAVE BUTTON GREY, ONLY ACTIVATE WHEN ALL FIELS FILLED
  let indexOfState = expFinalState.findIndex(expObject => {
    return identificationNo === expObject.id
  })

  setExpFinalState(prevState => {
    if(indexOfState == -1) {
      return [...prevState, stat]
    } else {
      expFinalState[indexOfState] = stat
      return expFinalState
    } 
  })

  setMainState(prevMainState => {
    return {
      ...prevMainState,
      experience: expFinalState
    }
  })
  //console.log(mainState)
 }

function addExpId() {
  setIdExpState(prevId => {
    return [
      ...prevId,
      prevId.length+1
    ]
  })
}

let allExp = idExpState.map(item => {
  return <Experience key={item} uniqId={item} returnState={updateExpFinal} />
})

//EXP END /////////////////////////////////////////////////////////////

function updateSkillFinal(datum){
  setMainState(prevMainState => {
    return {
      ...prevMainState,
      skills: datum
    }
  })
}

//console.log(mainState)

  return(
    <div>
      <MainHeader nameInput={() => updateMainState(event)} nameState={mainState} titleInput={() => updateMainState(event)} />
      <AboutMe aboutInput={() => updateMainState(event)} aboutState={mainState} />
      {allEdu}
      <button type="button" onClick={addId}>Add Education</button>
      {allExp}
      <button type="button" onClick={addExpId}>Add Experience</button>
      <Skills returnSkillState={updateSkillFinal} />
      <MainDetails updateState={() => updateMainState(event)} />

      <Resume allState={mainState} />
    </div>
  )
}

export default App;
