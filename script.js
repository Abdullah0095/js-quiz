 const questions = [
    {
        question : "what is my name?",
        answers : [
            {text: "bappy bro", correct: true},
            {text: "hampy", correct: false},
            {text: "dampy", correct: false},
            {text: "mumpy", correct: false}
        ]
    },

    {
        question : "what is my favorite color?",
        answers : [
            {text: "white", correct: false},
            {text: "black", correct: true},
            {text: "red", correct: false},
            {text: "green", correct: false}
        ]
    },

    {
        question : "what is my favorite food?",
        answers : [
            {text: "briyani", correct: false},
            {text: "chips", correct: false},
            {text: "banana", correct: true},
            {text: "kabab", correct: false}
        ]
    },

    {
        question : "what is my favorite bike?",
        answers : [
            {text: "mt15", correct: false},
            {text: "ktm", correct: false},
            {text: "gixxer", correct: true},
            {text: "yamaha v2", correct: false}
        ]
    }
 ];

 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;
 
 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }

 function showQuestion(){
    
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);   

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
 }

 function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
 }

 function selectAnswer(e){
    const selectedtBtn = e.target;
    const isCorrect = selectedtBtn.dataset.correct === "true";
    if(isCorrect){
        selectedtBtn.classList.add("correct");
        score++;
    }else{
        selectedtBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
            
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
 }

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 })

 startQuiz();
 
 