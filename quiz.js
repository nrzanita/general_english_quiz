const questions = [
    {
        question: "Can I park here?",
        answers:[
           
            {text:"Sorry ,I did that", correct: false},
            {text:"It's the same place.", correct: false},
            {text:"Only for half an hour.", correct: true},
        ]
    },
    {
        question: "What colour will you paint the children's bedroom?",
        answers:[
            
            {text:"I hope it was right.", correct: false},
            {text:"We can't decide.", correct: true},
            {text:"It wasn't very difficult.", correct: false},
         
        ] 
    },
    {
        question: "I can't understand this email.",
        answers:[

            {text:"I suppose you can.", correct: false},
            {text:"Would you like some help?", correct: true},
            {text:"Don't you know?", correct: false},
            
         
        ]
    },
    
    {
        question: "I'd like two tickets for tomorrow night.",
        answers:[

            {text:"I'll just check for you.", correct: true},
            {text:"Afternoon and evening.", correct: false},
            {text:"How much did you pay?", correct: false},
          
        ]
    },
    {
        question: "Shall we go to the gym now?",
        answers:[
            
            {text:"It's very good.", correct: false},
            {text:"Not at all.", correct: false},
            {text:"I'm too tired.", correct: true},
        ]
    },
    {
        question: "His eyes were ...... bad that he couldn't read the number plate of the car in front.",
        answers:[
            {text:"so", correct: true},
            {text:"too", correct: false},
            {text:"very", correct: false},
          
        ]
    },
    {
        question: "The company needs to decide ...... and for all what its position is on this point.",
        answers:[
            
            {text:"first", correct: false},
            {text:"once", correct: true},
            {text:"here", correct: false},
          
        ]
    },
    {
        question: "Don't put your cup on the ...... of the table – someone will knock it off.",
        answers:[
            {text:"edge", correct: true},
            {text:"border", correct: false},
            {text:"outside", correct: false},
          
        ]
    },
    {
        question: "I'm sorry - I didn't ...... to disturb you.",
        answers:[
            
            {text:"suppose", correct: false},
            {text:"mean", correct: true},
            {text:"think", correct: false},
          
        ]
    },

    {
        question: "The singer ended the concert ...... her most popular song.",
        answers:[
           
            {text:"by", correct: false},
            {text:"in", correct: false},
            {text:"with", correct: true},
          
        ]
    },



];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    console.log(nextButton);
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); // button class name
        answerButtons.appendChild(button);
        if(answer.correct){ // this part is for checking the true false
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){ //if dataset true
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function shoowScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        shoowScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex< questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});



startQuiz();