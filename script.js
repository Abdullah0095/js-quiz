 const questions = [
    {
        question : "What does HTML stand for?",
        answers : [
            {text: "Hyper Text Markup Language ", correct: true},
            {text: "Home Tool Markup Language", correct: false},
            {text: "Hyperlinks and Text Markup Language", correct: false},
            {text: "Hyper Text Makeup Language ", correct: false}
        ]
    },

    {
        question : "Who is making the Web standards?",
        answers : [
            {text: "Google", correct: false},
            {text: "Mozilla", correct: false},
            {text: "The World Wide Web Consortium  ", correct: true},
            {text: "Microsoft", correct: false}
        ]
    },
    {
        question : "Choose the correct HTML element for the largest heading:",
        answers : [
            {text: "<h1>  ", correct: true},
            {text: "<h6>", correct: false},
            {text: "<heading>", correct: false},
            {text: "<head>", correct: false}
        ]
    },
    {
        question : "Choose the correct HTML element to define important text",
        answers : [
            {text: "<b>", correct: false},
            {text: "<i>", correct: false},
            {text: "<important>", correct: false},
            {text: "<strong>", correct: true}
        ]
    },
    {
        question : "Choose the correct HTML element to define emphasized text",
        answers : [
            {text: "<em>  ", correct: true},
            {text: "<italic>", correct: false},
            {text: "<i>", correct: false},
            {text: "<pre>", correct: false}
        ]
    },
    {
        question : "Inline elements are normally displayed without starting a new line.",
        answers : [
            {text: "true", correct: true},
            {text: "false", correct: false}
            // {text: "dampy", correct: false},
            // {text: "mumpy", correct: false}
        ]
    },
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
        question : "what is my name?",
        answers : [
            {text: "bappy bro", correct: true},
            {text: "hampy", correct: false},
            {text: "dampy", correct: false},
            {text: "mumpy", correct: false}
        ]
    },
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
        question : "what is my name?",
        answers : [
            {text: "bappy bro", correct: true},
            {text: "hampy", correct: false},
            {text: "dampy", correct: false},
            {text: "mumpy", correct: false}
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
 
 