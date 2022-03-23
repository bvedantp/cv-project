/* eslint-disable no-restricted-globals */
import React from "react";
import MainHeader from "./components/MainHeader";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [mainState, setMainState] = React.useState({
    name: "",
    title: "",
    aboutMe: "",
    education: "" //edu===finalstate
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
//create new ID state


//EXP END /////////////////////////////////////////////////////////////






console.log(mainState)

  return(
    <div>
      <MainHeader nameInput={() => updateMainState(event)} nameState={mainState} titleInput={() => updateMainState(event)} />
      <AboutMe aboutInput={() => updateMainState(event)} aboutState={mainState} />
      {allEdu}
      <button type="button" onClick={addId}>Add Education</button>
      {/*<Experience />
      <Skills />
      <MainDetails /> */}
    </div>
  )
}

export default App;
