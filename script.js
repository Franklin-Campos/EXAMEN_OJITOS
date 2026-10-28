// ============================================================
// BANCO DE 24 PREGUNTAS - HISTORIA UNIVERSAL
// ============================================================
const questions = [
    { question: "La Conferencia de Berlín (1884-1885) tuvo como objetivo:", options: ["fundar la Sociedad de Naciones", "repartir África entre las potencias europeas", "poner fin a la Primera Guerra Mundial", "crear la ONU"], correct: 1, explanation: "Las potencias fijaron reglas para repartirse el continente africano, sin consultar a los pueblos africanos." },
    { question: "Según Lenin, el imperialismo es:", options: ["el inicio del socialismo", "una etapa feudal", "la fase superior del capitalismo", "un sistema de economía natural"], correct: 2, explanation: "Lenin lo explicó en su obra 'El imperialismo, fase superior del capitalismo', donde destaca el dominio de monopolios y del capital financiero." },
    { question: "Una causa económica del imperialismo fue:", options: ["la búsqueda de materias primas y de nuevos mercados", "el fin de la industrialización", "el auge del feudalismo", "la reducción de la producción"], correct: 0, explanation: "La industria europea necesitaba materias primas baratas y lugares donde vender su producción y colocar sus capitales." },
    { question: "El hecho que desencadenó la Primera Guerra Mundial fue:", options: ["la invasión de Polonia", "el hundimiento del Lusitania", "la Revolución rusa", "el asesinato del archiduque Francisco Fernando en Sarajevo"], correct: 3, explanation: "El atentado ocurrió el 28 de junio de 1914. Austria-Hungría declaró la guerra a Serbia, y las alianzas arrastraron a las demás potencias." },
    { question: "Los países que formaban la Triple Alianza eran:", options: ["Francia, Rusia y Gran Bretaña", "Alemania, Austria-Hungría e Italia", "Alemania, Japón e Italia", "Estados Unidos, Francia y Rusia"], correct: 1, explanation: "Frente a ella estaba la Triple Entente (Francia, Rusia y Gran Bretaña). Italia luego cambió de bando." },
    { question: "La entrada de Estados Unidos a la guerra en 1917 se debió, entre otras razones, a:", options: ["la guerra submarina irrestricta de Alemania", "la caída del zar", "el Tratado de Versalles", "la invasión de Bélgica"], correct: 0, explanation: "Los ataques alemanes a barcos mercantes, incluidos los estadounidenses, llevaron a Washington a declarar la guerra." },
    { question: "El tratado que impuso duras condiciones a Alemania tras la guerra fue el de:", options: ["Brest-Litovsk", "Versalles", "Westfalia", "Viena"], correct: 1, explanation: "Firmado en 1919, obligó a Alemania a pagar reparaciones, reducir su ejército y perder territorios. Brest-Litovsk fue la paz entre Rusia y Alemania." },
    { question: "La Revolución de Febrero de 1917 en Rusia provocó:", options: ["la caída del zar Nicolás II", "la toma del Palacio de Invierno", "el ascenso de Stalin", "la creación de la URSS"], correct: 0, explanation: "El zar abdicó y se formó un Gobierno Provisional. El Palacio de Invierno fue tomado en octubre." },
    { question: "El líder bolchevique que encabezó la Revolución de Octubre fue:", options: ["Kerensky", "Trotsky", "Lenin", "Stalin"], correct: 2, explanation: "Lenin dirigió a los bolcheviques, con apoyo de Trotsky en la organización militar, y derrocó al Gobierno Provisional de Kerensky." },
    { question: "La Nueva Política Económica (NEP) de Lenin permitió:", options: ["la colectivización total", "la eliminación del Estado", "la propiedad comunitaria de la tierra", "cierto comercio privado en pequeña escala"], correct: 3, explanation: "Tras el comunismo de guerra, la NEP (1921) restableció parcialmente el mercado para recuperar la economía." },
    { question: "La Gran Depresión se inició con:", options: ["la crisis del petróleo", "el crac de la Bolsa de Nueva York en 1929", "la caída del Muro de Berlín", "el Plan Marshall"], correct: 1, explanation: "El 'Jueves Negro' (octubre de 1929) hundió la Bolsa de Wall Street y la crisis se extendió al mundo." },
    { question: "El New Deal fue un programa de:", options: ["Hitler en Alemania", "Mussolini en Italia", "Roosevelt, que incrementó la intervención del Estado para superar la crisis", "Stalin en la URSS"], correct: 2, explanation: "Franklin D. Roosevelt aplicó obras públicas, regulación bancaria y ayuda social." },
    { question: "Benito Mussolini llegó al poder en Italia tras:", options: ["el Putsch de Múnich", "la Marcha sobre Roma de 1922", "la Revolución de Octubre", "la guerra civil española"], correct: 1, explanation: "El Partido Nacional Fascista presionó al rey, quien lo nombró jefe de gobierno." },
    { question: "Una característica del nazismo fue:", options: ["el internacionalismo obrero", "el respeto a las minorías", "el pluralismo político", "el racismo, el antisemitismo y la búsqueda de 'espacio vital'"], correct: 3, explanation: "Hitler, quien fue nombrado canciller en 1933, impulsó la superioridad 'aria' y la expansión territorial." },
    { question: "El inicio de la Segunda Guerra Mundial se marca con:", options: ["la invasión alemana de Polonia, el 1 de septiembre de 1939", "el ataque a Pearl Harbor", "el desembarco de Normandía", "la invasión de la URSS"], correct: 0, explanation: "Gran Bretaña y Francia declararon la guerra a Alemania dos días después." },
    { question: "El ataque japonés a Pearl Harbor (1941) provocó:", options: ["el fin de la guerra", "la rendición de Alemania", "la entrada de Estados Unidos a la guerra", "la caída de Mussolini"], correct: 2, explanation: "Estados Unidos declaró la guerra a Japón y se unió a los Aliados." },
    { question: "La guerra en el Pacífico terminó tras:", options: ["la batalla de Stalingrado", "la rendición de Italia", "el desembarco de Normandía", "los bombardeos atómicos de Hiroshima y Nagasaki (1945)"], correct: 3, explanation: "Estados Unidos lanzó las bombas en agosto de 1945 y Japón se rindió." },
    { question: "La Guerra Fría fue el enfrentamiento ideológico, político y económico entre:", options: ["Alemania y Francia", "Estados Unidos y la URSS", "China y Japón", "Gran Bretaña e Italia"], correct: 1, explanation: "Fue una pugna entre el bloque capitalista (liderado por EE. UU.) y el comunista (liderado por la URSS), sin enfrentamiento directo entre ambos." },
    { question: "La OTAN (1949) y el Pacto de Varsovia (1955) fueron:", options: ["organismos económicos", "tratados de descolonización", "alianzas militares de cada bloque", "tribunales internacionales"], correct: 2, explanation: "La OTAN agrupó al bloque occidental y el Pacto de Varsovia, al bloque soviético." },
    { question: "La independencia de la India (1947) estuvo ligada a:", options: ["Nehru y Gandhi, con la resistencia no violenta", "Sukarno y Ho Chi Minh", "Nasser", "Mandela"], correct: 0, explanation: "Gandhi lideró la desobediencia civil pacífica contra el dominio británico, y Nehru fue el primer ministro de la India independiente." },
    { question: "La Conferencia de Bandung (1955) fue importante porque:", options: ["fundó la OTAN", "reunió a países afroasiáticos que rechazaron el colonialismo y adoptaron una posición no alineada", "puso fin a la guerra de Corea", "creó el Mercado Común Europeo"], correct: 1, explanation: "Fue un antecedente del Movimiento de Países No Alineados." },
    { question: "La política de Gorbachov que buscó la reestructuración económica de la URSS fue la:", options: ["glasnost", "perestroika", "NEP", "coexistencia pacífica"], correct: 1, explanation: "'Perestroika' significa 'reestructuración'. La 'glasnost' era la transparencia o apertura política." },
    { question: "La caída del Muro de Berlín ocurrió en:", options: ["1961", "1985", "1989", "1991"], correct: 2, explanation: "Ocurrió el 9 de noviembre de 1989, y la reunificación alemana se concretó el 3 de octubre de 1990." },
    { question: "La URSS se disolvió formalmente en:", options: ["1989", "1990", "1985", "1991"], correct: 3, explanation: "Gorbachov renunció en diciembre de 1991 y se creó la Comunidad de Estados Independientes (CEI), con Yeltsin como figura central en Rusia." }
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
    
    // Nota del 1 al 20 basada en las 24 preguntas
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