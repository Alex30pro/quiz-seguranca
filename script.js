const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const endScreen = document.getElementById('end-screen');
const highscoreScreen = document.getElementById('highscore-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const saveScoreBtn = document.getElementById('save-score-btn');
const backToStartBtn = document.getElementById('back-to-start-btn');
const playerNameInput = document.getElementById('player-name');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const questionCounter = document.getElementById('question-counter');
const timerElement = document.getElementById('timer');
const finalScoreElement = document.getElementById('final-score');
const resultMessageElement = document.getElementById('result-message');
const initialHighscoreList = document.getElementById('initial-highscore-list');

let currentQuestionIndex, score, timerIntervalId, timeLeft, currentPlayerName, gameStartTime, totalTime;
let highscores = JSON.parse(localStorage.getItem('quizHighscores')) || [];

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);
saveScoreBtn.addEventListener('click', saveScore);

document.addEventListener('DOMContentLoaded', displayHighscores);

function startGame() {
    currentPlayerName = playerNameInput.value;
    if (currentPlayerName.trim() === "") {
        alert("Por favor, digite seu nome para começar!");
        return;
    }
    shuffleArray(questions);
    startScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    gameStartTime = Date.now();
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    questionCounter.innerText = `Pergunta ${currentQuestionIndex + 1}/${questions.length}`;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) button.dataset.correct = true;
        button.addEventListener('click', selectAnswer);
        answersContainer.appendChild(button);
    });
    startTimer();
}

function selectAnswer(event) {
    clearInterval(timerIntervalId);
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) score++;
    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") button.classList.add('correct');
        else button.classList.add('incorrect');
        button.disabled = true;
    });
    setTimeout(goToNextQuestion, 1500);
}

function endGame() {
    clearInterval(timerIntervalId);
    quizScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    totalTime = (Date.now() - gameStartTime) / 1000;
    finalScoreElement.innerText = `${score} / ${questions.length}`;
    let message = '';
    if (score >= 8) message = "Nível: Hacker Elite! Parabéns!";
    else if (score >= 5) message = "Nível: Guardião Digital! Bom trabalho!";
    else message = "Nível: Curioso Digital! Continue estudando!";
    resultMessageElement.innerText = message;
}

function saveScore() {
    const newScore = { name: currentPlayerName, score: score, time: totalTime };
    highscores.push(newScore);
    highscores.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.time - b.time;
    });
    highscores.splice(5);
    localStorage.setItem('quizHighscores', JSON.stringify(highscores));
    displayHighscores();
    endScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

function displayHighscores() {
    const scores = JSON.parse(localStorage.getItem('quizHighscores')) || [];
    initialHighscoreList.innerHTML = '';
    if (scores.length === 0) {
        initialHighscoreList.innerHTML = '<li>Seja o primeiro a jogar!</li>';
    } else {
        const scoreHTML = scores.map((entry, index) => {
            const timeDisplay = entry.time ? `(${entry.time.toFixed(1)}s)` : '';
            return `<li><span class="player-rank">${index + 1}.</span><span class="player-name">${entry.name}</span><span class="player-score">${entry.score} / ${questions.length} ${timeDisplay}</span></li>`;
        }).join('');
        initialHighscoreList.innerHTML = scoreHTML;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startTimer() {
    timeLeft = 15;
    timerElement.innerText = `Tempo: ${timeLeft}`;
    timerIntervalId = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Tempo: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timerIntervalId);
            handleTimeUp();
        }
    }, 1000);
}

function handleTimeUp() {
    Array.from(answersContainer.children).forEach(button => {
        if (button.dataset.correct === "true") button.classList.add('correct');
        button.disabled = true;
    });
    setTimeout(goToNextQuestion, 1500);
}

function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function resetState() {
    clearInterval(timerIntervalId);
    answersContainer.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const lockIcon = document.getElementById('lock-icon');
    const introOverlay = document.getElementById('intro-overlay');
    const loadingText = document.querySelector('.loading-text');

    setTimeout(() => {
        lockIcon.style.animation = "shake 0.5s ease-in-out";
    }, 500);

    setTimeout(() => {
        lockIcon.classList.remove('fa-lock');
        lockIcon.classList.add('fa-lock-open'); 
        lockIcon.classList.add('unlock-success'); 
        lockIcon.style.animation = "none";
        loadingText.textContent = "ACCESS GRANTED";
        loadingText.style.color = "#22c55e";
    }, 1500);

    setTimeout(() => {
        introOverlay.classList.add('doors-open');
    }, 2200);

    setTimeout(() => {
        introOverlay.style.display = 'none';
    }, 3800);
});