const questions = [
    {
      question: "Qual o nome do primeiro casal criado por Deus?",
      choices: ["João e Maria", "Abrahão e Sara", "Adão e Eva ", "Moisés e Isabel"],
      answer: "Adão e Eva",
    },
    
    
    {
      question: "Qual o nome do rapazinho que venceu o Gigante Golias?",
      choices: ["Samuel", "Daniel", "Davi", "Levi"],
      answer: "Davi",
    },
    {
      question: "Quais alimentos foram multiplicados por Jesus num dos seus milagres?",
      choices: ["Pães e vinho", "bolos e pasta de figos", "Azeite e mel silvestre", "pães e peixes"],
      answer: "pães e peixes",
    },
    {
      question: "Quantos eram os discípulos de Jesus?",
      choices: ["12", "7", "14", "40"],
      answer: "12",
    },
    
    {
      question: "Em que livro está escrito o versículo O Senhor é meu pastor nada me faltará?",
      choices: ["Provérbios", "Mateus", "Eclesiastes", "Salmos"],
      answer: "Salmos",
    },
  ];
  
  const questionElement = document.getElementById("question");
  const choiceElements = Array.from(document.getElementsByClassName("choice"));
  const nextButton = document.getElementById("next");
  const scoreElement = document.getElementById("score");
  const wrongElement = document.getElementById("wrong");
  
  let currentQuestion = 0;
  let score = 0;
  let wrong = 0;
  let answerChosen = false;
  
  function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerText = currentQuestionData.question;
  
    const choices = shuffleArray(currentQuestionData.choices);
    for (let i = 0; i < choiceElements.length; i++) {
      choiceElements[i].innerText = choices[i];
    }
    answerChosen = false; // reset flag when loading new question
  }
  
  function checkAnswer(e) {
    if (answerChosen) return; // prevent multiple answers
    answerChosen = true;
  
    if (e.target.innerText === questions[currentQuestion].answer) {
      score++;
      scoreElement.innerText = "Pontuação: " + score;
      alert("Correto!");
    } else {
      wrong++;
      wrongElement.innerText = "Erros: " + wrong;
      alert(
        "Errado! A resposta correta é " + questions[currentQuestion].answer + "."
      );
    }
  }
  
  choiceElements.forEach((element) => {
    element.addEventListener("click", checkAnswer);
  });
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    wrong = 0;
    scoreElement.innerText = "Pontuação: 0";
    wrongElement.innerText = "Erros: 0";
    loadQuestion();
  }
  
  nextButton.addEventListener("click", () => {
    if (!answerChosen) {
      alert("Por favor, escolha uma resposta antes de prosseguir.");
      return;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      alert(
        "Fim do Quiz! Você acertou " +
          score +
          " de " +
          questions.length +
          " perguntas."
      );
      restartQuiz();
    }
  });
  
  function shuffleArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  loadQuestion();