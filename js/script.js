const questions= [
    {
        question: "Which is the largest Animal in the world?",
        answers: [ 
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
    
        ]
    },
        {
            question: "Which is the smallest continent in the world?",
            answers: [ 
                { text: "Asia", correct: false},
                { text: "Australia", correct: true},
                { text: "Arctic", correct: false},
                { text: "Africa", correct: false},
        
            ]
    
        },
    
        {
            question: "Which is the smallest Country in the world?",
            answers: [ 
                { text: "Vatican City", correct: true},
                { text: "Bhutan", correct: false},
                { text: "Nepal", correct: false},
                { text: "ShiLanka", correct: false},
        
            ]
    
        },
        
        {
            question: "Which is the largest destert in the world?",
            answers: [ 
                { text: "Kalahari", correct: false},
                { text: "Gabi", correct: false},
                { text: "Sahara", correct: false},
                { text: "Antarctica", correct: true},
        
            ]
    
        },
        {
            question: "Which is the smallest animal in the world?",
            answers: [ 
                 { text: "Frog", correct: false },
                 { text: "Ant", correct: true },
                 { text: "Mouse", correct: false },
                 { text: "Sparrow", correct: false }
        
            ]
    
        },
    ];
    const questionElement = document.getElementById("question"); // Corrected the ID name
    const answerButtons = document.getElementById("answer-buttons"); // Corrected the variable name
    const nextButton = document.getElementById("next-btn");
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "NEXT";
        showQuestion();
    }
    
    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button"); // Changed "buttons" to "button"
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }
    
    function resetState() {
        nextButton.style.display = "none";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    
    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true; // Changed to boolean value
        });
        nextButton.style.display = "block";
    }
    
    function showScore() {
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
    
    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }
    
    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    });
    
    startQuiz(); 