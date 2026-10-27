// ============================================================
// BANCO DE 20 PREGUNTAS - LENGUAJE (SINTAXIS)
// ============================================================
const questions = [
    { question: "¿Cuál de las siguientes secuencias es una frase nominal?", options: ["Cantan en el patio", "Los niños del barrio", "Corriendo con rapidez", "Porque estaba cansado"], correct: 1, explanation: "Tiene como núcleo un sustantivo (niños) y no tiene verbo conjugado, por lo que no es oración." },
    { question: "En 'bastante lejos de aquí', el núcleo es un:", options: ["sustantivo", "verbo", "adverbio", "adjetivo"], correct: 2, explanation: "El núcleo es lejos, un adverbio, y por eso es una frase adverbial." },
    { question: "En 'muy orgulloso de su hijo', la frase es:", options: ["nominal", "verbal", "adverbial", "adjetiva"], correct: 3, explanation: "El núcleo es orgulloso, un adjetivo, así que es una frase adjetiva." },
    { question: "En 'Dijo que vendría mañana', la proposición subordinada es:", options: ["Dijo", "que vendría mañana", "vendría", "mañana"], correct: 1, explanation: "Es una proposición con verbo propio (vendría) que depende de dijo. Funciona como objeto directo." },
    { question: "¿Cuál es una oración gramatical?", options: ["La casa de mi abuela", "Corriendo por el parque", "Los pájaros cantan al amanecer", "Porque estaba cansado"], correct: 2, explanation: "Tiene verbo conjugado, sentido completo e independencia sintáctica." },
    { question: "¿Cuál es una oración bimembre?", options: ["¡Fuego!", "Amanece", "Hay mucha gente", "Mi tía viaja hoy"], correct: 3, explanation: "Tiene sujeto (mi tía) y predicado (viaja hoy). Las otras son unimembres." },
    { question: "¿Cuál es una oración unimembre?", options: ["Nieva en la sierra", "Los niños juegan", "El perro ladra", "María canta"], correct: 0, explanation: "Es una oración impersonal sobre un fenómeno natural, con solo predicado y sin sujeto." },
    { question: "Las oraciones bimembres se caracterizan porque:", options: ["carecen de verbo", "presentan sujeto y predicado", "solo tienen predicado", "son siempre interrogativas"], correct: 1, explanation: "Se dividen en dos miembros: sujeto y predicado." },
    { question: "'Ojalá apruebes el examen' es una oración:", options: ["enunciativa", "exhortativa", "desiderativa", "dubitativa"], correct: 2, explanation: "Expresa un deseo del hablante. La dubitativa, en cambio, expresa duda." },
    { question: "'Mi madre es enfermera' es una oración:", options: ["predicativa", "copulativa", "impersonal", "exclamativa"], correct: 1, explanation: "El verbo ser funciona como cópula y une el sujeto con el atributo (enfermera)." },
    { question: "En 'Los estudiantes de quinto año recibieron un premio', el núcleo del sujeto es:", options: ["los", "quinto", "estudiantes", "año"], correct: 2, explanation: "El núcleo es el sustantivo estudiantes, con el que concuerda el verbo." },
    { question: "En 'Las hermosas flores del jardín se marchitaron', el modificador indirecto del sujeto es:", options: ["las", "hermosas", "flores", "del jardín"], correct: 3, explanation: "Es una frase preposicional que modifica al núcleo mediante una preposición (de)." },
    { question: "En 'Lima, capital del Perú, es una ciudad grande', 'capital del Perú' es:", options: ["modificador directo", "aposición", "objeto directo", "complemento agente"], correct: 1, explanation: "Es una aposición explicativa, entre comas, que equivale al núcleo Lima." },
    { question: "En 'Compramos pan en la panadería', el sujeto es:", options: ["pan", "la panadería", "nosotros (tácito)", "compramos"], correct: 2, explanation: "El sujeto está omitido y se deduce de la desinencia verbal -amos." },
    { question: "En 'Los alumnos resolvieron el problema con rapidez', el núcleo del predicado es:", options: ["alumnos", "problema", "rapidez", "resolvieron"], correct: 3, explanation: "El núcleo del predicado verbal es el verbo conjugado." },
    { question: "En 'Mi padre construyó una casa de madera', el objeto directo es:", options: ["mi padre", "una casa de madera", "de madera", "construyó"], correct: 1, explanation: "Es lo que recibe directamente la acción. Se puede reemplazar por la: la construyó." },
    { question: "En 'Entregué el regalo a mi hermana', el objeto indirecto es:", options: ["el regalo", "entregué", "a mi hermana", "mi hermana y el regalo"], correct: 2, explanation: "Indica el destinatario de la acción y se reemplaza por le: le entregué el regalo." },
    { question: "En 'Viajaremos a Cusco en diciembre', 'en diciembre' es complemento circunstancial de:", options: ["lugar", "modo", "tiempo", "causa"], correct: 2, explanation: "Responde a la pregunta ¿cuándo?." },
    { question: "En 'Mis primos están cansados', la palabra 'cansados' funciona como:", options: ["objeto directo", "atributo", "complemento agente", "aposición"], correct: 1, explanation: "Es el atributo del sujeto en un predicado nominal con verbo copulativo (estar)." },
    { question: "En 'El libro fue escrito por Vargas Llosa', la frase 'por Vargas Llosa' es:", options: ["objeto indirecto", "complemento circunstancial de lugar", "complemento agente", "modificador directo"], correct: 2, explanation: "En la voz pasiva, el complemento agente indica quién realiza la acción." }
];

// ============================================================
// LÓGICA DEL EXAMEN
// ============================================================
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const questionCounter = document.getElementById('question-counter');
const scoreLive = document.getElementById('score-live');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');
const finalScore = document.getElementById('final-score');
const resultTitle = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');
const resultEmoji = document.getElementById('result-emoji');
const restartBtn = document.getElementById('restart-btn');
const profilePhoto = document.getElementById('profile-photo');

// Fallback por si no encuentra la foto
profilePhoto.onerror = function() {
    this.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMTUwIDE1MCI+PHJlY3Qgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiNmZmM0ZTMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI0MCIgZmlsbD0iI2ZmNmI5ZCI+RnJpZW5kPC90ZXh0Pjwvc3ZnPg==';
};

startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
});

function loadQuestion() {
    answered = false;
    const question = questions[currentQuestionIndex];
    
    questionCounter.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
    scoreLive.textContent = `⭐ ${score}`;
    progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
    
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    feedbackContainer.classList.add('hidden');
    nextBtn.classList.add('hidden');
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span> ${option}`;
        btn.dataset.index = index;
        btn.addEventListener('click', () => selectOption(index, btn));
        optionsContainer.appendChild(btn);
    });
}

function selectOption(selectedIndex, btnElement) {
    if (answered) return;
    answered = true;
    
    const question = questions[currentQuestionIndex];
    const allButtons = document.querySelectorAll('.option-btn');
    
    allButtons.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === question.correct) {
        score++;
        btnElement.classList.add('correct');
        feedbackText.innerHTML = `✅ <strong>¡Correcto!</strong> ${question.explanation}`;
    } else {
        btnElement.classList.add('incorrect');
        allButtons[question.correct].classList.add('correct');
        feedbackText.innerHTML = `❌ <strong>Incorrecto.</strong> La respuesta correcta era la <strong>${String.fromCharCode(65 + question.correct)}</strong>. ${question.explanation}`;
    }
    
    scoreLive.textContent = `⭐ ${score}`;
    feedbackContainer.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
    feedbackContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    // Nota del 1 al 20 basada en 20 preguntas
    let nota = Math.round((score / questions.length) * 20);
    if (nota === 0) nota = 1;
    
    finalScore.textContent = nota;
    
    if (nota >= 18) {
        resultEmoji.textContent = '🏆';
        resultTitle.textContent = '¡Eres una GENIA!';
        resultMessage.textContent = '¡Increíble! Estoy tan orgulloso de ti. Sabía que podías lograrlo. Mañana te va a ir espectacular. ¡Mucha suerte, preciosa! 💖';
    } else if (nota >= 15) {
        resultEmoji.textContent = '🌟';
        resultTitle.textContent = '¡Excelente trabajo!';
        resultMessage.textContent = '¡Muy bien! Tienes una base sólida. Repasa un poquito más esos detalles y estarás imparable. ¡Confío en ti! ✨';
    } else if (nota >= 11) {
        resultEmoji.textContent = '💪';
        resultTitle.textContent = '¡Buen intento!';
        resultMessage.textContent = 'Vas por buen camino. No te desanimes, repasa las que fallaste y verás que mañana te irá mucho mejor. ¡Tú puedes con esto y más! 🌸';
    } else {
        resultEmoji.textContent = '❤️';
        resultTitle.textContent = '¡No te rindas!';
        resultMessage.textContent = 'El examen de mañana es una oportunidad para demostrar lo que sabes. Repasa con calma, descansa bien y verás que todo saldrá bien. Estoy aquí para apoyarte. ¡Ánimo! 🌈';
    }
}

restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
});