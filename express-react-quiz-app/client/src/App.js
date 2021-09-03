import React, {useState, useEffect} from "react";
import './App.css';
//cleaner code to define all components outside of the App function. Just remember to pass in the props from App

const SingleQuestion = ({question, questions, index, setUserChoice}) => {

  //set new variable called choices to undefined OR an empty array
  //question={question[index]is the same as question.choices, questions is the old the total Questions, index is the current item. The choices array will be inserted into the empty array

  const choices = questions?.[index]?.choices || []
 
  // console.log(choices)
  return(
    <>
      <div className='question-section'>
        <div className='question-count'>
        {/* display question 1, question index and how many total questions */}
          <span>Question: {index +1 }</span>/{questions.length}
        </div>
        
        {/* display the question text question?  takes care of react error thinking question is undefined is undefined and allows for question.title to be accessed */}
        <div className='question-text'>{question?.title}</div>
      </div>
      
      {/* map wants to map an array, the drilling down is defined above in choices or put this in line( question?.[index]?.choices || [] ).map( With the button I am passing state */}
        <div className='answer-section'>
            {choices.map((choice) =>  {
              return (
                <button onClick={()=> {setUserChoice(choice)} }> {choice} </button>
              )
            }
					)}
				</div>

        {/* handleGuess( “dog”, “cat”)
        handleGuess(userGuess, question.correct) */}
        
    </>
  )
}


//take first question and render it on the screen
function App() {
  const [questions, setQuestions] = useState([])
  const [index, setCurrentQuestion] = useState(0)
  // const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  //declare var that holds the state of the users choice
const [userChoice, setUserChoice]= useState("");
  // so we can see all guesses ever... 
  // const [allGuesses, setAllGuesses] = useState( [ ] )

	//callback function goes here and keeps track of the score
  // setScore is what we use to keep track the score
  //setScore will need to be passed a prop to singleQuestion
  // if userGuess is  equal to correct then update setScore
//setUserChoice 
  const handleScore = () => {

  const correct =questions?.[index]?.correct || "" 
    // if userGuess is  equal to correct then update setScore
    if(userChoice === correct){
    setScore(score + 1)
    console.log("this is reaching handleScore")
    }
  }
  //make an HTTP request using useEffect.Use effect should be the last thing you see before the return
    useEffect(() => {
    //make a simple GET request using the Fetch API to our backend and then have our data returned as JSON.
      fetch("/totalquestions")
        .then((res) => res.json())
      //it was an empty array until right here
        .then((json) => setQuestions(json)); 
        //tell useEffect when it has to call the function again
        //[] is a second parameter
        //empty array is a unique case, when "these things change" the empty comes into play
      }, []) ;
  //every time state changes it rerenders the component
      console.log(userChoice, score)
    return (
      <div className="App">
        {/* {questions.map((item, ind) => {
        console.log(item, 'item is one of the objects in questions');
        console.log(ind, 'this is the index in the map');
        console.log(questions[ind], 'is the same as ', item) 
        return <SingleQuestion questions={questions} question={item} index={ind} />;
      })} */}
          
       
          <SingleQuestion question={questions[index]} questions={questions} index={index}  setUserChoice={setUserChoice} />
         

          <button className="previous"disabled={index === index } onClick={()=>{setCurrentQuestion(index -1)} } > Previous </button>

          <button className="next"disabled={index === 9} onClick={()=>{  handleScore(); setCurrentQuestion(index +1)} } > Next </button>
          
          
          {/* using a conditional..if questions are not loading display "Loading" message to user otherwise null it doesn't apply */}
        {<p>{!questions ? "Loading..." : null}</p>}
      
      </div>
    );
        }
export default App;

