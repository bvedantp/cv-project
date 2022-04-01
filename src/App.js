/* eslint-disable no-restricted-globals */
import React from "react";
import MainHeader from "./components/MainHeader";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import MainDetails from "./components/MainDetails";
import Resume from "./components/Resume";

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function App() {
  const [mainState, setMainState] = React.useState({
    name: "Example N. Ame",
    title: "Software Developer",
    aboutMe: "I am blah blah blha. Yes it's blah blah blah. I am blah blah blha. Yes it's blah blah blah. I am blah blah blha. Yes it's blah blah blah. I am blah blah blha. Yes it's blah blah blah. ",
    education: "", //edu===finalstate
    experience: "",
    skills: "",
    email: "bverystrict@email.com",
    contact: "4563789675",
    linkedIn: "https//examplelink.com/profile",
    github: "https//gitlink.com/profile"
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
      }
      eduFinalState[indexOfState] = stat
      return eduFinalState
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
    return <Education key={item} uniqId={item} returnState={updateFinal}/>
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

function exportPdf() {

  let divDimensionInfo = document.querySelector("#divToPrint").getBoundingClientRect()
  let HTML_Width = divDimensionInfo.width
  let HTML_Height = divDimensionInfo.height
  let top_left_margin = 15;

  let PDF_Width = HTML_Width+(top_left_margin*2);
	let PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
	let canvas_image_width = HTML_Width;
  let canvas_image_height = HTML_Height;

  let totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;

  html2canvas(document.querySelector("#divToPrint")).then(canvas => {

    console.log(canvas.height+"  "+canvas.width);
    // document.body.appendChild(canvas);  // if you want see your screenshot in body.
     const imgData = canvas.toDataURL('image/png');
     const pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
     pdf.addImage(imgData, 'PNG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);

     for (let i = 1; i <= totalPDFPages; i++) { 
      pdf.addPage([PDF_Width, PDF_Height]);
      //console.log(i)
      pdf.addImage(imgData, 'PNG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
    }

     pdf.save("download.pdf"); 
 });
}

//console.log(mainState)

  return(
    <div>
      <form>
      <MainHeader nameInput={() => updateMainState(event)} nameState={mainState} titleInput={() => updateMainState(event)} />
      <AboutMe aboutInput={() => updateMainState(event)} aboutState={mainState} />
      {allEdu}
      <button type="button" onClick={addId}>Add Education</button>
      {allExp}
      <button type="button" onClick={addExpId}>Add Experience</button>
      <Skills returnSkillState={updateSkillFinal} />
      <MainDetails updateState={() => updateMainState(event)} />
      </form>
      <Resume toPDF={exportPdf} allState={mainState} />
    </div>
  )
}

export default App;
