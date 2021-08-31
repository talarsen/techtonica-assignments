import React, {useState, useEffect} from "react";
import './App.css';

//take first question and render it on the screen
function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setCurrentQuestion] = useState(0)

//make an HTTP request using useEffect.
  useEffect(() => {
  //make a simple GET request using the Fetch API to our backend and then have our data returned as JSON.
    fetch("/api")
      .then((res) => res.json())
    //Once we have the data returned to us, we will get the message property (to grab our greeting that we sent from the server) and then put it in a state variable called data.
      .then((json) => setQuestions(json)); 
      //tell useEffect when it has to call the function again
      //[] is a second parameter
    }, []) ;

 const renderQuestions = () => {
   for(let i = 0; i < questions.length; i++) {
     //console.log(questions[i].title)
    //take the first question and display it 
    //need a var to tell me what question I am on
    //involve state setData
    //if(questions[])
   }
 }
//need to pass in question
 
 
 renderQuestions()
 
//using a conditional in our JSX to say that if our data is not there yet, show the text "Loading...".
  return (
    <div className="App">
    {(questions[index]) &&
      <SingleQuestion question={questions[index]} />
    }
        {<p>{!questions ? "Loading..." : null}</p>}
 
    </div>
  );
}

export default App;
const SingleQuestion = ({question}) => {
  return(
   <div className='question-section'>
     <div className='question-count'>
       <span>Question: {index +1 }</span>/{questions.length}
     </div>
     
     <div className='question-text'>{question.title}</div>
   </div>
 )
}