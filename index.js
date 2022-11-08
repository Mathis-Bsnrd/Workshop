const questions = [
  {
    question: "How many days makes a week ?",
    optionA: "10 days",
    optionB: "14 days",
    optionC: "5 days",
    optionD: "7 days",
    correctOption: "optionD"
  },
  {
    question: "How many players are allowed on a soccer pitch ?",
    optionA: "10 players",
    optionB: "11 players",
    optionC: "9 players",
    optionD: "12 players",
    correctOption: "optionB"
  },
  {
    question: "Who was the first President of USA ?",
    optionA: "Donald Trump",
    optionB: "Barack Obama",
    optionC: "Abraham Lincoln",
    optionD: "George Washington",
    correctOption: "optionD"
  },
  {
    question: "30 days has ______ ?",
    optionA: "January",
    optionB: "December",
    optionC: "June",
    optionD: "August",
    correctOption: "optionC"
  },
  {
    question: "How manay hours can be found in a day ?",
    optionA: "30 hours",
    optionB: "38 hours",
    optionC: "48 hours",
    optionD: "24 hours",
    correctOption: "optionD"
  },
  {
    question: "Which is the longest river in the world ?",
    optionA: "River Nile",
    optionB: "Long River",
    optionC: "River Niger",
    optionD: "Lake Chad",
    correctOption: "optionA"
  },
  {
    question: "_____ is the hottest Continent on Earth ?",
    optionA: "Oceania",
    optionB: "Antarctica",
    optionC: "Africa",
    optionD: "North America",
    correctOption: "optionC"
  },
  {
    question: "Which country is the largest in the world ?",
    optionA: "Russia",
    optionB: "Canada",
    optionC: "Africa",
    optionD: "Egypt",
    correctOption: "optionA"
  },
  {
    question: "Which of these numbers is an odd number ?",
    optionA: "Ten",
    optionB: "Twelve",
    optionC: "Eight",
    optionD: "Eleven",
    correctOption: "optionD"
  },
  {
    question: `"You Can't see me" is a popular saying by`,
    optionA: "Eminem",
    optionB: "Bill Gates",
    optionC: "Chris Brown",
    optionD: "John Cena",
    correctOption: "optionD"
  },
  {
    question: "Where is the world tallest building located ?",
    optionA: "Africa",
    optionB: "California",
    optionC: "Dubai",
    optionD: "Italy",
    correctOption: "optionC"
  },
  {
    question: "The longest river in the United Kingdom is ?",
    optionA: "River Severn",
    optionB: "River Mersey",
    optionC: "River Trent",
    optionD: "River Tweed",
    correctOption: "optionA"
  },
  {
    question: "How many permanent teeth does a dog have ?",
    optionA: "38",
    optionB: "42",
    optionC: "40",
    optionD: "36",
    correctOption: "optionB"
  },
  {
    question: "Which national team won the football World cup in 2018 ?",
    optionA: "England",
    optionB: "Brazil",
    optionC: "Germany",
    optionD: "France",
    correctOption: "optionD"
  },
  {
    question: "Which US state was Donald Trump Born ?",
    optionA: "New York",
    optionB: "California",
    optionC: "New Jersey",
    optionD: "Los Angeles",
    correctOption: "optionA"
  },
  {
    question: "How man states does Nigeria have ?",
    optionA: "24",
    optionB: "30",
    optionC: "36",
    optionD: "37",
    correctOption: "optionC"
  },
  {
    question: "____ is the capital of Nigeria ?",
    optionA: "Abuja",
    optionB: "Lagos",
    optionC: "Calabar",
    optionD: "Kano",
    correctOption: "optionA"
  },
  {
    question: "Los Angeles is also known as ?",
    optionA: "Angels City",
    optionB: "Shining city",
    optionC: "City of Angels",
    optionD: "Lost Angels",
    correctOption: "optionC"
  },
  {
    question: "What is the capital of Germany ?",
    optionA: "Georgia",
    optionB: "Missouri",
    optionC: "Oklahoma",
    optionD: "Berlin",
    correctOption: "optionD"
  },
  {
    question: "How many sides does an hexagon have ?",
    optionA: "Six",
    optionB: "Sevene",
    optionC: "Four",
    optionD: "Five",
    correctOption: "optionA"
  },
  {
    question: "How many planets are currently in the solar system ?",
    optionA: "Eleven",
    optionB: "Seven",
    optionC: "Nine",
    optionD: "Eight",
    correctOption: "optionD"
  },
]


let shuffledQuestions = [] //tableau vide pour contenir les questions sélectionnées mélangées parmi toutes les questions disponibles

function handleQuestions() {
  //fonction pour mélanger et pousser 10 questions vers le tableau shuffledQuestions
  //l'application traiterait 10 questions par session
  while (shuffledQuestions.length <= 20) {
    const random = questions[Math.floor(Math.random() * questions.length)]
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random)
    }
  }
}


let questionNumber = 1 //contient le numéro de la question actuelle
let playerScore = 0  //détient le score du joueur
let wrongAttempt = 0 //nombre de mauvaises réponses choisies par le joueur
let indexNumber = 0 //sera utilisé pour afficher la question suivante

// fonction pour afficher la question suivante dans le tableau à dom
// gère également l'affichage des informations sur les joueurs et les quiz à dom
function NextQuestion(index) {
  handleQuestions()
  const currentQuestion = shuffledQuestions[index]
  document.getElementById("question-number").innerHTML = questionNumber
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber] // obtient la question actuelle
  const currentQuestionAnswer = currentQuestion.correctOption // obtient la réponse de la question actuelle
  const options = document.getElementsByName("option"); // obtient tous les éléments dans dom avec le nom de 'option' (dans ce cas, les entrées radio)
  let correctOption = null

  options.forEach((option) => {
    if (option.value === currentQuestionAnswer) {
      // Récupère l'entrée radio de la bonne réponse avec la bonne réponse
      correctOption = option.labels[0].id
    }
  })


  //vérification pour s'assurer qu'une entrée radio a été cochée ou qu'une option a été choisie
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
    document.getElementById('option-modal').style.display = "flex"
  }

  // vérifier si le bouton radio coché est identique à la réponse
  options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = "green"
      playerScore++ //ajout au score du joueur
      indexNumber++ // ajouter 1 à l'index doit donc afficher la question suivante..
      // défini pour retarder le numéro de question jusqu'au chargement de la prochaine question
      setTimeout(() => {
        questionNumber++
      }, 1000)
    }

    else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id
      document.getElementById(wrongLabelId).style.backgroundColor = "red"
      document.getElementById(correctOption).style.backgroundColor = "green"
      wrongAttempt++ //ajoute 1 aux mauvaises tentatives
      indexNumber++
      // défini pour retarder le numéro de question jusqu'au chargement de la prochaine question
      setTimeout(() => {
        questionNumber++
      }, 1000)
    }
  })
}



//appelé lorsque le bouton suivant est appelé
function handleNextQuestion() {
  checkForAnswer() //vérifie si le joueur a choisi la bonne ou la mauvaise option
  unCheckRadioButtons()
  // retarde l'affichage de la question suivante pendant une seconde juste pour certains effets afin que les questions ne se précipitent pas sur le joueur
  setTimeout(() => {
    if (indexNumber <= 20) {
      // affiche la question suivante tant que le numéro d'index n'est pas supérieur à 9, rappelez-vous que le numéro d'index commence à partir de 0, donc l'index 9 est la question 10
      document.getElementById('explication-modal').style.display = "flex";
      NextQuestion(indexNumber)
    }
    else {
      handleEndGame()// termine le jeu si le numéro d'index est supérieur à 9, ce qui signifie que nous sommes déjà à la 10ème question
    }
    resetOptionBackground()
  }, 1000);
}

//redéfinit l'arrière-plan des options sur null après avoir affiché les bonnes/mauvaises couleurs
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document.getElementById(option.labels[0].id).style.backgroundColor = ""
  })
}

// décocher tous les boutons radio pour la question suivante (peut également être fait avec la boucle map ou foreach)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

// fonction lorsque toutes les questions reçoivent une réponse
function handleEndGame() {
  let remark = null
  let remarkColor = null

  // vérification de l'état de la remarque du joueur et de la couleur de la remarque
  if (playerScore <= 3) {
    remark = "Bad Grades, Keep Practicing."
    remarkColor = "red"
  }
  else if (playerScore >= 4 && playerScore < 7) {
    remark = "Average Grades, You can do better."
    remarkColor = "orange"
  }
  else if (playerScore >= 7) {
    remark = "Excellent, Keep the good work going."
    remarkColor = "green"
  }
  const playerGrade = (playerScore / 21) * 100

  //données à afficher sur le tableau des scores
  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('grade-percentage').innerHTML = playerGrade
  document.getElementById('wrong-answers').innerHTML = wrongAttempt
  document.getElementById('right-answers').innerHTML = playerScore
  document.getElementById('score-modal').style.display = "flex"

}

//ferme le score modal, réinitialise le jeu et remanie les questions
function closeScoreModal() {
  questionNumber = 1
  playerScore = 0
  wrongAttempt = 0
  indexNumber = 0
  shuffledQuestions = []
  NextQuestion(indexNumber)
  document.getElementById('score-modal').style.display = "none"
}

//fonction pour fermer le modal d'avertissement
function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none"
}

//fonction pour fermer le modal d'explication
function closeExplicationModal() {
  document.getElementById('explication-modal').style.display = "none"
}