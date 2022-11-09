const questions = [
  {
    question: "Qu’est ce que les “SMART GRIDS” ?",
    optionA: "Une grille intelligente ",
    optionB: "Une règle CSS",
    optionC: "Un logiciel permettant de créer des schémas et des diagrammes",
    optionD: "Un réseau d’énergie qui intègre des technologies de l’information et de la communication",
    correctOption: "optionD",
    explication: "Les 'SMARTS GRIDS' sont des réseaux d’énergies qui intègrent des technologies de l’information et de la communication. <br /><br /> L’équilibre du système énergétique était principalement obtenu en pilotant l’offre d’énergie (la production) en fonction de la demande (la consommation), aux meilleures conditions d’approvisionnement et de coûts. Avec les Smart grids, il devient possible d’adapter la consommation à la production."
  },
  {
    question: "Qu'est-ce qui rend le réseau 'intelligent' ?",
    optionA: "Accès au but et au gaz naturel",
    optionB: "L'utilisation d'ordinateurs pour contrôler la production et la distribution d'énergie",
    optionC: "Le hub central est un cerveau",
    optionD: "Il conserve l'énergie",
    correctOption: "optionB",
    explication: "Le réseau est rendu intelligent car l'utilisation d'ordinateurs sert à contrôler la production et la distribution d'énergie.<br /><br /> Grâce à la collecte des données à l’aide de capteurs, les smarts grids sont capables de donner une vision optimale de la consommation électrique sur les différents réseaux connectés."
  },
  {
    question: "Comment l'énergie électrique est-elle généralement produite ?",
    optionA: "Le carburant est brûlé pour produire de la fumée, qui fait tourner une turbine",
    optionB: "Le combustible est brûlé pour chauffer l'eau et produire de la vapeur, qui fait tourner une turbine",
    optionC: "Le combustible chaud est placé dans l'eau pour produire de la vapeur, qui fait ensuite tourner une turbine",
    optionD: "Une turbine souffle de la vapeur chaude sur le carburant, qui le réchauffe et produit de l'électricité",
    correctOption: "optionB",
    explication: "L’énergie électrique est produite lorsque le combustible est brûlé pour chauffer l’eau et produire de la vapeur, qui fait tourner une turbine."
  },
  {
    question: "Comment le réseau intelligent améliorerait-il la sécurité ?",
    optionA: "les services d'urgence seraient d'abord rétablis en cas de catastrophe",
    optionB: "La transmission électrique serait plus sûre",
    optionC: "Les voitures électriques pourraient être branchées pour être rechargées",
    optionD: "vous pourriez utiliser l'énergie électrique pendant la demande hors pointe",
    correctOption: "optionA",
    explication: "Le réseau intelligent améliorerait la sécurité car les services d’urgence seraient d’abord rétablis en cas de catastrophe."
  },
  {
    question: "Laquelle de ces technologies est une technologie Smart Home ?",
    optionA: "Panneaux solaires sur le toit",
    optionB: "Eoliennes dans la cour arrière",
    optionC: "Machine à laver à faible consommation d’eau",
    optionD: "Thermostat intelligent qui contrôle le climat",
    correctOption: "optionD",
    explication: "La technologie faisant partie des technologie Smart Home est “Thermostat intelligent qui contrôle le climat”.<br /><br /> Vous pouvez en trouver sur Internet mais également en magasin dans les grandes enseignes comme Leroy Merlin, Darty ou encore Boulanger."
  },
  {
    question: "Lequel de ces éléments pourrait être un problème avec un réseau intelligent piloté par des banques d'ordinateurs ?",
    optionA: "Ils n'ont pas assez de mémoire pour faire ça",
    optionB: "Les pirates informatiques pourraient entrer et prendre le contrôle",
    optionC: "Vous auriez besoin de personnes pour programmer les ordinateurs",
    optionD: "Les ordinateurs ont besoin d'électricité pour fonctionner",
    correctOption: "optionB",
    explication: "L'élément qui pourrait être un problème sont les pirates informatiques qui pourraient entrer et prendre le contrôle<br /><br /> Il faut donc bien faire attention aux réseaux intelligents que vous mettez en place chez vous ou ailleurs."
  },
  {
    question: "Sur une route plate, quelle puissance, un “sportif du dimanche” peut obtenir pendant un sprint de 20 secondes ?",
    optionA: "240 Watts",
    optionB: "360 Watts",
    optionC: "480 Watts",
    optionD: "600 Watts",
    correctOption: "optionC",
    explication: "La réponse est : 480 Watts.<br /><br /> C’est l’équivalent de la puissance énergétique de 8 lampes à incandescence. Ce lien : 'https://nopanic.fr/le-velo-generateur/' vous dirigera sur un site qui vous explique comment fabriquer un vélo générateur d’électricité."
  },
  {
    question: "Quelle âge à la plus vieille ampoule du monde toujours en fonctionnement ?",
    optionA: "Plus de 50 ans",
    optionB: "Plus de 100 ans",
    optionC: "Plus de 150 ans",
    optionD: "Plus de 200 ans",
    correctOption: "optionB",
    explication: "La plus vieille ampoule à exactement 119 ans.<br /><br /> Elle se trouve en Californie. Aujourd’hui, il faut un maximum privilégier les ampoules LED pour leur longévité et leur basse consommation. Une LED performante de 6 W éclaire aussi bien qu’une ampoule à incandescence de 60 W. Le plus ? Remplacer ces ampoules est une opération éligible à une subvention au titre des CEE."
  },
  {
    question: "À stockholm, quelle énergie a utilisé la compagnie qui exploite la gare afin de chauffer un immeuble voisin ?",
    optionA: "L’énergie produite par les visiteurs",
    optionB: "L’énergie produite par les trains",
    optionC: "L’énergie produite par les lumières",
    optionD: "L’énergie produite par les rails",
    correctOption: "optionA",
    explication: "La réponse est l'énergie produite par les visiteurs.<br /><br /> En ajoutant au système de ventilation un système d’échangeurs de chaleur, la compagnie a eu l’idée d’exploiter la chaleur produite par les voyageurs. La chaleur captée réchauffe un ballon d’eau. Cette eau chaude est envoyée dans un immeuble voisin réduisant ainsi sa facture énergétique. La mise en place de système de récupération de chaleur est une technique fréquemment utilisée dans l’industrie pour réaliser des économies d’énergie. La plupart de ces actions sont d’ailleurs éligibles à l’obtention de subventions au titre du dispositif des CEE"
  },
  {
    question: "En 2021, combien s’élève la part des voitures électriques sur le marché mondial ?",
    optionA: "3%",
    optionB: "6%",
    optionC: "9%",
    optionD: "12%",
    correctOption: "optionC",
    explication: "La réponse est : 9%. Ce chiffre monte à 18% en France en 2021 est n’était que de 11% en 2020, cela démontre la croissance rapide du marché. Les véhicules électriques branchés au réseau pourraient potentiellement aider à stabiliser les réseaux pendant les heures de pointe."
  },
  {
    question: "Le SMART GRIDS permet de détecter ?",
    optionA: "Une fuite de données",
    optionB: "Un changement de prix dans un contrat d'électricité",
    optionC: "Une panne électrique dans un réseau",
    optionD: "Une fuite de gaz",
    correctOption: "optionC",
    explication: "La réponse est : Une panne électrique dans un réseau.<br /><br /> A l’aide de la collecte des données, les smart grids donnent une vision optimale de la consommation électrique sur le réseau. Les capteurs installés le long du réseau électrique permettent également de détecter une panne ou une perte d’électricité."
  },
  {
    question: "En pourcentage, combien représente le chauffage dans la consommation électrique d’un ménager ?",
    optionA: "9",
    optionB: "28",
    optionC: "47",
    optionD: "62",
    correctOption: "optionD",
    explication: "La réponse est : 62%.<br /><br /> Un moyen efficace de réduire sa consommation d'électricité est donc d’investir dans une bonne isolation, cela peut grandement réduire votre consommation. Une bonne isolation à aussi l’avantage de rester au frais pendant l’été en empêchant la chaleur de rentrer."
  },
  {
    question: "Quels sont les acteurs des Smart GRIDS ?",
    optionA: "Les fournisseurs d'énergie",
    optionB: "Les fabricants électroniques et opérateurs de télécommunication",
    optionC: "Le secteur de l’informatique ainsi que celui du bâtiment",
    optionD: "Tous les acteurs cités sont concernés",
    correctOption: "optionD",
    explication: "La réponse est : Tous les acteurs cités sont concernées.<br /><br /> Les acteurs des smart grids ne se limitent pas aux acteurs traditionnels de l’énergie, le secteur de l’électronique ainsi que celui de la communication et de l’informatique et également du bâtiment participent eux aussi, à l’essor de ces nouveaux réseaux."
  },
  {
    question: "Pourquoi développer les smart grids ?",
    optionA: "Collecter les données en temps réel sur le réseau de distribution",
    optionB: "Localiser un dysfonctionnement et agir à distance",
    optionC: "Anticiper la production locale à partir des énergies renouvelables",
    optionD: "Pour toutes les raisons citées",
    correctOption: "optionD",
    explication: "La réponse est : Pour toutes les raisons citées.<br /><br /> Grâce au développement des smart grids, il sera possible de collecter les données en temps réel sur le réseau de distribution, de consulter l’état du réseau 24/24, de localiser un dysfonctionnement et agir à distance, d’anticiper la production locale à partir des énergies renouvelables et également de pouvoir maîtriser les nouveaux moyens de production et usages."
  },
  {
    question: "Question 14 : Quels sont les inconvénients du smart GRIDS ?",
    optionA: "La mise en place d’un smart GRIDS a un coût de déploiement très élevé",
    optionB: "Pour être efficace il doit englober tous les acteurs",
    optionC: "Le stockage des données personnelles des usagers",
    optionD: "Pour toutes les raisons citées",
    correctOption: "optionD",
    explication: "La réponse est : Pour toutes les raisons citées.<br /><br /> Bien qu’elle présente de nombreux avantages, le smart grid embarque un certain nombre d’inconvénients. Pour être efficace, le réseau doit englober tous les acteurs, et être implanté sur l’ensemble du réseau électrique. Son coût de déploiement est également très élevé, et les technologies utilisées doivent être mise en place doivent mettre en communication de nombreux secteurs d’activité.  Le principal inconvénient de cette technologie reste le stockage de données personnelles des usagers, et le traitement de ces dernières, pour des raisons de protection de la vie privée."
  },
]


let shuffledQuestions = [] //tableau vide pour contenir les questions sélectionnées mélangées parmi toutes les questions disponibles

function handleQuestions() {
  //fonction pour mélanger et pousser 10 questions vers le tableau shuffledQuestions
  //l'application traiterait 10 questions par session
  while (shuffledQuestions.length <= 14) {
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
  //document.getElementById("explication").innerHTML = currentQuestion.explication;
}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber] // obtient la question actuelle
  const currentQuestionAnswer = currentQuestion.correctOption // obtient la réponse de la question actuelle
  const currentExplication = currentQuestion.explication // obtient la solution de la question Explication
  const options = document.getElementsByName("option"); // obtient tous les éléments dans dom avec le nom de 'option' (dans ce cas, les entrées radio)
  const tests = document.getElementsByName("test");
  let correctOption = null
  let explication = null
  document.getElementById("explication").innerHTML = currentExplication;

  options.forEach((option) => {
    if (option.value === currentQuestionAnswer) {
      // Récupère l'entrée radio de la bonne réponse avec la bonne réponse
      correctOption = option.labels[0].id
    }
  })

  //vérification pour s'assurer qu'une entrée radio a été cochée ou qu'une option a été choisie
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
    document.getElementById('explication-modal').style.display = "none"
    document.getElementById('option-modal').style.display = "flex"
  } else {
    document.getElementById('explication-modal').style.display = "flex"
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
    if (indexNumber <= 14) {
      // affiche la question suivante tant que le numéro d'index n'est pas supérieur à 9, rappelez-vous que le numéro d'index commence à partir de 0, donc l'index 9 est la question 10
      //document.getElementById('explication-modal').style.display = "flex";
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
  if (playerScore <= 5) {
    remark = "Mauvaises notes, continuez à pratiquer."
    remarkColor = "red"
  }
  else if (playerScore >= 6 && playerScore < 11) {
    remark = "Notes moyennes, vous pouvez faire mieux."
    remarkColor = "orange"
  }
  else if (playerScore >= 11) {
    remark = "Excellent, continuez votre bon travail."
    remarkColor = "green"
  }
  const playerGrade = (playerScore / 15) * 100

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