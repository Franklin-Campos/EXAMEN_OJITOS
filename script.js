// ============================================================
// BANCO DE 30 PREGUNTAS - EDUCACIÓN CÍVICA DEL PERÚ
// ============================================================
const questions = [
    // I. SISTEMA ELECTORAL PERUANO
    { question: "¿Cuál es la función que distingue principalmente al Jurado Nacional de Elecciones (JNE) de la ONPE?", options: ["Elaborar el padrón electoral y emitir el DNI.", "Organizar y ejecutar las elecciones nacionales.", "Administrar justicia electoral y fiscalizar la legalidad del sufragio.", "Aprobar las leyes electorales en el Congreso."], correct: 2, explanation: "El JNE fiscaliza la legalidad del sufragio, administra justicia electoral y proclama los resultados oficiales." },
    { question: "¿Qué organismo del sistema electoral peruano es responsable de preparar y mantener actualizado el padrón electoral?", options: ["La ONPE.", "El RENIEC.", "El JNE.", "El Tribunal Constitucional."], correct: 1, explanation: "El RENIEC mantiene el registro de identificación y prepara el padrón electoral, que es aprobado por el JNE." },
    { question: "Un ciudadano cumple 18 años antes de una elección, pero sus datos no aparecen correctamente en el padrón electoral. ¿Cuál es la afirmación más adecuada?", options: ["Pierde definitivamente su derecho al sufragio.", "Puede votar en cualquier mesa presentando su partida de nacimiento.", "Tiene derecho al sufragio, pero debe cumplir las reglas de inscripción en el padrón para ejercerlo en esa elección.", "Solo podrá votar cuando cumpla 21 años."], correct: 2, explanation: "La ciudadanía se adquiere a los 18 años, pero para votar se deben cumplir los requisitos y procedimientos electorales." },
    { question: "¿Cuál es la finalidad principal del carácter secreto del voto?", options: ["Evitar que se publiquen los resultados electorales.", "Impedir que el elector sea presionado para revelar o demostrar su elección.", "Permitir que los ciudadanos voten más de una vez.", "Evitar que los organismos electorales realicen el conteo de votos."], correct: 1, explanation: "El secreto del voto protege la libertad del elector y evita presiones o represalias." },
    { question: "En una elección presidencial peruana, ¿cómo se consideran los votos en blanco y los votos nulos respecto de las candidaturas?", options: ["Se asignan al candidato que obtiene la mayoría.", "Se distribuyen proporcionalmente entre todos los partidos.", "Se consideran votos válidos a favor de la candidatura con más posibilidades de ganar.", "No se contabilizan como votos válidos a favor de ninguna candidatura."], correct: 3, explanation: "Los votos en blanco y nulos se registran por separado y no se atribuyen a ningún candidato." },

    // II. VALORES CÍVICOS Y SÍMBOLOS NACIONALES
    { question: "Un funcionario utiliza bienes y recursos públicos para favorecer a un partido político durante una campaña electoral. ¿Qué principio vulnera principalmente?", options: ["La libertad de tránsito.", "La neutralidad e imparcialidad en la función pública.", "La identidad cultural.", "La libertad de contratación privada."], correct: 1, explanation: "Los funcionarios deben actuar con imparcialidad y no usar recursos del Estado para intereses partidarios." },
    { question: "¿Cuál es la diferencia fundamental entre un derecho y un deber ciudadano?", options: ["Los derechos corresponden únicamente a los funcionarios públicos.", "Los deberes son voluntarios y los derechos siempre son obligatorios.", "Los derechos reconocen facultades protegidas, mientras que los deberes establecen obligaciones que deben cumplirse conforme a la ley.", "Los derechos se aplican únicamente durante los procesos electorales."], correct: 2, explanation: "Los derechos protegen libertades, mientras que los deberes establecen responsabilidades jurídicas o cívicas." },
    { question: "En una sociedad democrática, la tolerancia implica:", options: ["Aceptar cualquier conducta, incluso si vulnera derechos.", "Evitar expresar opiniones para no generar desacuerdos.", "Respetar las diferencias de opinión y cultura dentro del marco de los derechos humanos.", "Renunciar a las propias convicciones para evitar conflictos."], correct: 2, explanation: "La tolerancia permite la convivencia sin justificar actos que vulneren derechos de los demás." },
    { question: "¿Qué representa la cornucopia que aparece en el escudo nacional del Perú?", options: ["La riqueza del reino animal.", "La riqueza vegetal del territorio.", "La abundancia y riqueza de los recursos del país.", "La independencia política del Perú."], correct: 2, explanation: "La cornucopia derramando monedas simboliza la abundancia de recursos." },
    { question: "¿Cuál de las siguientes acciones representa mejor el ejercicio de una ciudadanía democrática?", options: ["Obedecer todas las decisiones de las autoridades, incluso si son ilegales.", "Participar en los asuntos públicos, respetar los derechos de los demás y exigir transparencia.", "Evitar las elecciones porque la política corresponde a los gobernantes.", "Defender los intereses personales sin considerar la comunidad."], correct: 1, explanation: "La ciudadanía democrática implica participación responsable y vigilancia del poder público." },

    // III. COMUNIDAD INTERNACIONAL Y GLOBALIZACIÓN
    { question: "¿Cuál fue una de las principales razones para la creación de la ONU en 1945?", options: ["Establecer una moneda única para todos los países.", "Crear un gobierno mundial que sustituyera a los Estados.", "Promover la paz y la seguridad internacionales después de la Segunda Guerra Mundial.", "Organizar exclusivamente el comercio entre potencias europeas."], correct: 2, explanation: "La ONU surgió para fomentar la cooperación internacional y prevenir nuevos conflictos." },
    { question: "¿Cuál es la diferencia principal entre la ONU y la OEA?", options: ["La ONU se ocupa exclusivamente de economía y la OEA de asuntos militares.", "La ONU tiene alcance mundial, mientras que la OEA es una organización regional de las Américas.", "La OEA es un tribunal judicial subordinado a la ONU.", "La ONU solo admite países europeos."], correct: 1, explanation: "La ONU reúne Estados de distintas regiones, mientras que la OEA promueve la cooperación entre países de las Américas." },
    { question: "Un país impone restricciones a la importación de productos extranjeros para proteger a sus productores nacionales. ¿Qué fenómeno económico intenta limitar directamente?", options: ["La integración comercial internacional.", "La cooperación humanitaria.", "La participación ciudadana.", "La diversidad cultural."], correct: 0, explanation: "Las restricciones a las importaciones limitan el intercambio comercial internacional." },
    { question: "Cuando se afirma que la globalización genera interdependencia económica entre los países, significa que:", options: ["Las decisiones económicas de un país pueden afectar a otros países.", "Todos los países tienen el mismo nivel de desarrollo.", "Los Estados dejan de tener sus propias leyes.", "Cada país produce todos los bienes que necesita."], correct: 0, explanation: "El comercio y las cadenas de producción internacionales conectan las economías." },
    { question: "¿Cuál es un posible efecto negativo de la globalización cultural?", options: ["La difusión de investigaciones científicas.", "El acceso a nuevas tecnologías educativas.", "La cooperación entre universidades.", "El debilitamiento de lenguas originarias por la influencia de culturas dominantes."], correct: 3, explanation: "La difusión desigual de idiomas y patrones culturales puede desplazar lenguas y costumbres." },

    // IV. ORGANISMOS INTERNACIONALES DE DERECHOS HUMANOS
    { question: "¿Qué instrumento internacional es conocido como el Pacto de San José de Costa Rica?", options: ["La Carta de las Naciones Unidas.", "La Convención Americana sobre Derechos Humanos.", "La Declaración Universal de Derechos Humanos.", "La Convención de Viena sobre Relaciones Diplomáticas."], correct: 1, explanation: "La Convención Americana sobre Derechos Humanos fue adoptada en 1969 en San José de Costa Rica." },
    { question: "¿Cuál es la diferencia entre la CIDH y la Corte IDH?", options: ["La CIDH recibe peticiones y promueve la protección; la Corte IDH resuelve casos mediante sentencias.", "La CIDH dicta sentencias definitivas y la Corte IDH realiza campañas educativas.", "Ambas son organismos electorales dependientes del JNE.", "La Corte IDH se ocupa exclusivamente de conflictos comerciales."], correct: 0, explanation: "La CIDH examina peticiones y puede someter casos a la Corte, que dicta sentencias vinculantes." },
    { question: "Por regla general, antes de presentar una petición ante el sistema interamericano de derechos humanos, se requiere:", options: ["Obtener una indemnización económica del Estado.", "Contar con autorización del Congreso nacional.", "Agotar los recursos internos disponibles y efectivos, salvo excepciones reconocidas.", "Presentar la denuncia ante la Corte IDH desde el inicio."], correct: 2, explanation: "El sistema interamericano es complementario de la protección nacional." },
    { question: "¿Qué condición resulta esencial para que la Corte Interamericana pueda dictar una sentencia obligatoria para un Estado?", options: ["Que el Estado pertenezca a la Unión Europea.", "Que el Estado haya reconocido la competencia contenciosa de la Corte y se cumplan las condiciones aplicables.", "Que el Congreso apruebe previamente la sentencia.", "Que la sentencia sea convertida en recomendación de la ONU."], correct: 1, explanation: "La competencia contenciosa depende del reconocimiento de la jurisdicción por el Estado." },
    { question: "¿Qué significa el principio de subsidiariedad en la protección internacional de los derechos humanos?", options: ["Que los organismos internacionales sustituyen a los jueces nacionales.", "Que los ciudadanos no pueden denunciar abusos de sus gobiernos.", "Que la protección internacional complementa los mecanismos nacionales, conforme a las reglas de admisibilidad.", "Que los Estados pueden ignorar los tratados."], correct: 2, explanation: "La protección internacional actúa como complemento de los mecanismos internos." },

    // V. CONSTITUCIÓN Y ORGANIZACIÓN DEL ESTADO PERUANO
    { question: "La Constitución Política del Perú establece que el poder del Estado emana del pueblo. ¿Qué principio expresa esta disposición?", options: ["La soberanía popular.", "La subordinación ciudadana.", "La autonomía empresarial.", "La supremacía administrativa."], correct: 0, explanation: "La soberanía popular significa que el poder estatal tiene su origen en el pueblo." },
    { question: "¿Cuál es la finalidad principal de la separación de poderes en el Estado peruano?", options: ["Garantizar que el Ejecutivo controle todas las instituciones.", "Evitar la concentración del poder y establecer mecanismos de control institucional.", "Impedir que el Poder Judicial aplique las leyes.", "Eliminar la autonomía de los organismos constitucionales."], correct: 1, explanation: "La separación de poderes distribuye funciones y previene abusos mediante controles." },
    { question: "¿Cuál es una función esencial del Tribunal Constitucional del Perú?", options: ["Organizar los procesos electorales nacionales.", "Emitir documentos nacionales de identidad.", "Controlar la constitucionalidad y resolver los procesos que le corresponden.", "Administrar directamente todos los órganos del Poder Judicial."], correct: 2, explanation: "El Tribunal Constitucional es el órgano de control de la Constitución." },
    { question: "Si una ley contradice la Constitución Política del Perú, ¿qué principio jurídico debe prevalecer?", options: ["La decisión del funcionario de mayor antigüedad.", "La voluntad de cualquier autoridad administrativa.", "La costumbre de la mayoría, incluso si contradice el ordenamiento.", "La supremacía constitucional."], correct: 3, explanation: "La Constitución prevalece sobre las normas de inferior jerarquía." },
    { question: "¿Cuál es una función esencial del Ministerio Público en el Perú?", options: ["Conducir la investigación del delito desde su inicio y ejercer la acción penal pública.", "Dictar sentencias condenatorias y administrar establecimientos penitenciarios.", "Aprobar leyes y reformar la Constitución.", "Organizar y proclamar resultados electorales."], correct: 0, explanation: "El Ministerio Público dirige la investigación del delito y ejerce la acción penal pública." },

    // VI. ANÁLISIS DE CASOS
    { question: "Un ciudadano considera que una autoridad municipal ha vulnerado uno de sus derechos constitucionales. ¿Cuál es la actuación más adecuada?", options: ["Solicitar automáticamente la intervención de la Corte Internacional de Justicia.", "Evaluar los mecanismos administrativos y judiciales internos pertinentes, según el derecho vulnerado.", "Presentar obligatoriamente una denuncia ante la ONPE.", "Acudir directamente a la OEA para anular cualquier decisión municipal."], correct: 1, explanation: "La vía de protección depende del derecho afectado y de los hechos." },
    { question: "Una persona difunde deliberadamente información falsa sobre un candidato para perjudicar sus posibilidades electorales. ¿Qué aspecto de la democracia puede resultar más afectado?", options: ["La autonomía del RENIEC.", "La independencia presupuestaria de los gobiernos regionales.", "La formación de una opinión pública informada y la libertad del proceso electoral.", "La separación territorial entre los países."], correct: 2, explanation: "La desinformación puede distorsionar las decisiones de los electores." },
    { question: "Un Estado incumple las obligaciones asumidas en un tratado internacional de derechos humanos vigente para él. ¿Qué consecuencia puede producirse?", options: ["El tratado pierde automáticamente toda validez.", "Los tratados internacionales nunca generan obligaciones jurídicas.", "El Estado puede ignorar el tratado si una autoridad lo considera inconveniente.", "El Estado puede incurrir en responsabilidad internacional conforme al tratado y las normas aplicables."], correct: 3, explanation: "El incumplimiento de obligaciones internacionales puede generar responsabilidad del Estado." },
    { question: "Una comunidad indígena busca preservar su lengua y sus tradiciones frente a la influencia de contenidos culturales extranjeros. ¿Qué enfoque es más compatible con una sociedad democrática y plural?", options: ["Prohibir toda influencia cultural extranjera.", "Reconocer y proteger la diversidad cultural, respetando los derechos humanos y promoviendo la participación de la comunidad.", "Sustituir obligatoriamente las lenguas originarias por una sola lengua.", "Impedir que los miembros de la comunidad accedan a las tecnologías modernas."], correct: 1, explanation: "El pluralismo cultural reconoce el valor de las distintas identidades y promueve su preservación." },
    { question: "Un ciudadano sostiene que, como el voto es obligatorio en el Perú, el Estado puede exigirle que revele por quién votó. ¿Cuál es la respuesta correcta?", options: ["Es correcto, porque la obligatoriedad elimina el secreto del voto.", "Es correcto únicamente en las elecciones presidenciales.", "Es incorrecto, porque la obligatoriedad del sufragio no elimina su carácter secreto.", "Es incorrecto, porque el voto es facultativo para todos los ciudadanos mayores de 18 años."], correct: 2, explanation: "El voto es obligatorio hasta los 70 años, pero mantiene su carácter personal, libre y secreto." }
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
    
    // Nota del 1 al 20 basada en las 30 preguntas
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