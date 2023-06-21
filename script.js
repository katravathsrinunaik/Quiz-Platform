// Quiz questions and answers
const quizData = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "Madrid", "Rome", "Berlin"],
      correctAnswer: 0
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Saturn", "Jupiter", "Mars", "Earth"],
      correctAnswer: 1
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correctAnswer: 2
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      choices: ["Japan", "China", "India", "South Korea"],
      correctAnswer: 0
    }
    // Add more questions here
  ];
  
  const quizContainer = document.getElementById("quiz");
  const questionElement = document.getElementById("question");
  const choicesList = document.getElementById("choices");
  const submitButton = document.getElementById("submit");
  const resultElement = document.getElementById("result");
  
  let currentQuestion = 0;
  let score = 0;
  let userAnswered = false;
  
  // Function to load a question
  function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
  
    choicesList.innerHTML = "";
    question.choices.forEach((choice, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<input type="radio" name="choice" value="${index}" onchange="checkAnswer()"><span>${choice}</span>`;
      choicesList.appendChild(li);
    });
  }
  
  // Function to check the answer
  function checkAnswer() {
    if (userAnswered) {
      return;
    }
  
    const selectedChoice = document.querySelector("input[name=choice]:checked");
    if (!selectedChoice) return;
  
    const answer = Number(selectedChoice.value);
    const correctChoice = quizData[currentQuestion].correctAnswer;
  
    if (answer === correctChoice) {
      score++;
      selectedChoice.parentNode.style.color = "green";
    } else {
      choicesList.children[correctChoice].style.color = "green";
      selectedChoice.parentNode.style.color = "red";
    }
  
    userAnswered = true;
  
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion === quizData.length) {
        showResult();
      } else {
        userAnswered = false;
        loadQuestion();
      }
    }, 1000);
  }
  
  // Function to show the result
  function showResult() {
    quizContainer.style.display = "none";
    resultElement.textContent = `Your score: ${score}/${quizData.length}`;
    resultElement.style.display = "block";
  }
  
  // Initial question load
  loadQuestion();
  