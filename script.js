// ============================================================
// BANCO DE 50 PREGUNTAS
// ============================================================
const questions = [
    // --- RAZONAMIENTO VERBAL ---
    { question: "En las oraciones 'Me duele el pie' y 'Llegamos al pie de la montaña', la palabra 'pie' evidencia:", options: ["homonimia", "polisemia", "sinonimia", "antonimia"], correct: 1, explanation: "Es polisemia porque es una sola palabra con varios significados relacionados entre sí." },
    { question: "Elige el antónimo de LOCUAZ:", options: ["verboso", "hablador", "taciturno", "elocuente"], correct: 2, explanation: "Locuaz es 'que habla mucho'; taciturno es 'callado y reservado'." },
    { question: "¿Cuál es un par de antónimos complementarios?", options: ["grande – pequeño", "caliente – frío", "vivo – muerto", "alto – bajo"], correct: 2, explanation: "En los complementarios, negar uno implica afirmar el otro: no estar vivo es estar muerto." },
    { question: "El hiperónimo inmediato de roble, pino, cedro y eucalipto es:", options: ["bosque", "madera", "árbol", "naturaleza"], correct: 2, explanation: "Hiperónimo es el término más general que incluye a los demás; todos son tipos de árbol." },
    { question: "¿Cuál de los siguientes pares es de cohipónimos?", options: ["perro – animal", "tigre – león", "flor – rosa", "mamífero – gato"], correct: 1, explanation: "Los cohipónimos son hipónimos del mismo hiperónimo; tigre y león son felinos." },
    { question: "Violín es hipónimo de:", options: ["orquesta", "concierto", "música", "instrumento de cuerda"], correct: 3, explanation: "El violín es un tipo de instrumento de cuerda, y esa es la relación de inclusión." },

    // --- LENGUAJE ---
    { question: "¿En qué alternativa todas las palabras son variables?", options: ["con, y, pero", "niño, bello, canta", "hoy, aquí, nunca", "ante, sobre, tras"], correct: 1, explanation: "Sustantivo, adjetivo y verbo son clases variables. Las demás tienen preposiciones, conjunciones y adverbios." },
    { question: "En la palabra niñitas, el segmento -it- es un morfema:", options: ["flexivo", "lexema", "derivativo", "independiente"], correct: 2, explanation: "Es un sufijo derivativo apreciativo (diminutivo). El flexivo es -as y el lexema es niñ-." },
    { question: "¿Cuál es una palabra derivada?", options: ["sacapuntas", "lavavajillas", "zapatería", "paraguas"], correct: 2, explanation: "Zapatería nace de zapato + el sufijo -ería. Las otras son compuestas." },
    { question: "¿Cuál es una palabra parasintética?", options: ["rehacer", "infelizmente", "cortaúñas", "enrojecer"], correct: 3, explanation: "Enrojecer lleva el prefijo en- y el sufijo -ecer a la vez, y no existen 'enrojo' ni 'rojecer'." },
    { question: "¿Cuál es un caso de acortamiento?", options: ["UNMSM", "profe", "Dr.", "sida"], correct: 1, explanation: "Profe es la reducción de profesor. UNMSM es sigla, Dr. es abreviatura y sida es acrónimo." },
    { question: "¿Cuál palabra se formó por acrónimo?", options: ["ofimática", "bici", "Sr.", "OEA"], correct: 0, explanation: "Ofimática une partes de oficina + informática. Bici es acortamiento, Sr. es abreviatura y OEA es sigla." },

    // --- BIOLOGÍA ---
    { question: "La hormona cuyo pico desencadena la ovulación es:", options: ["FSH", "progesterona", "LH", "prolactina"], correct: 2, explanation: "El pico de hormona luteinizante provoca la liberación del óvulo, hacia el día 14." },
    { question: "Durante la fase proliferativa, el endometrio se regenera por acción de:", options: ["progesterona", "estrógenos", "testosterona", "oxitocina"], correct: 1, explanation: "Los estrógenos, secretados por los folículos en desarrollo, engrosan el endometrio." },
    { question: "La fecundación ocurre normalmente en:", options: ["el útero", "el ovario", "la vagina", "la ampolla de la trompa de Falopio"], correct: 3, explanation: "El encuentro entre espermatozoide y óvulo se da en el tercio externo de la trompa." },
    { question: "¿Quién demostró con Drosophila que los genes se localizan en los cromosomas?", options: ["Mendel", "Watson", "Morgan", "Darwin"], correct: 2, explanation: "Thomas Morgan comprobó la teoría cromosómica de la herencia con la mosca de la fruta." },
    { question: "La trisomía del cromosoma 21 produce:", options: ["síndrome de Turner", "síndrome de Klinefelter", "síndrome de Edwards", "síndrome de Down"], correct: 3, explanation: "El síndrome de Down se debe a un cromosoma 21 extra (47 cromosomas)." },
    { question: "Cuando mutan, los protooncogenes pueden convertirse en:", options: ["genes supresores", "oncogenes", "plásmidos", "transposones"], correct: 1, explanation: "Los oncogenes promueven la división celular descontrolada y contribuyen al cáncer." },
    { question: "La producción de insulina humana por bacterias es un ejemplo de:", options: ["clonación reproductiva", "mutación espontánea", "ingeniería genética (ADN recombinante)", "selección natural"], correct: 2, explanation: "Se inserta el gen humano de la insulina en bacterias, que la fabrican." },

    // --- ANATOMÍA ---
    { question: "El sistema nervioso central está formado por:", options: ["nervios craneales y raquídeos", "encéfalo y médula espinal", "ganglios y nervios", "simpático y parasimpático"], correct: 1, explanation: "El SNC está formado por el encéfalo y la médula espinal." },
    { question: "La función principal del cerebelo es:", options: ["regular la temperatura", "controlar la respiración", "coordinar el movimiento y el equilibrio", "almacenar la memoria a largo plazo"], correct: 2, explanation: "El cerebelo coordina los movimientos voluntarios, la postura y el equilibrio." },
    { question: "Una respuesta típica del sistema nervioso simpático es:", options: ["bradicardia", "miosis", "aumento de la digestión", "taquicardia y dilatación de la pupila"], correct: 3, explanation: "El simpático prepara al cuerpo para 'luchar o huir'." },
    { question: "El número de pares de nervios raquídeos (espinales) es:", options: ["12", "31", "24", "43"], correct: 1, explanation: "Son 31 pares: 8 cervicales, 12 torácicos, 5 lumbares, 5 sacros y 1 coccígeo." },

    // --- HISTORIA UNIVERSAL ---
    { question: "El inicio simbólico de la Revolución Francesa fue:", options: ["la ejecución de Luis XVI", "la toma de la Bastilla", "el golpe del 18 de Brumario", "el Congreso de Viena"], correct: 1, explanation: "La Bastilla fue tomada el 14 de julio de 1789." },
    { question: "Una de las obras más duraderas de Napoleón Bonaparte fue:", options: ["la Santa Alianza", "el Terror", "el Código Civil de 1804", "la Declaración de 1789"], correct: 2, explanation: "El Código Napoleónico estableció la igualdad ante la ley y protegió la propiedad privada." },
    { question: "El Congreso de Viena (1814-1815) se basó en el principio de:", options: ["soberanía popular", "libre mercado", "nacionalismo", "legitimidad y equilibrio europeo"], correct: 3, explanation: "Impulsado por Metternich, buscó restaurar las monarquías absolutas tras la derrota de Napoleón." },
    { question: "La Primera Revolución Industrial se inició en:", options: ["Inglaterra, con la máquina de vapor y la industria textil", "Alemania, con la electricidad", "Estados Unidos, con el petróleo", "Francia, con el acero"], correct: 0, explanation: "Comenzó en Inglaterra hacia 1760 y se basó en el carbón, el vapor y el textil." },
    { question: "¿Cuál fue una característica de la Segunda Revolución Industrial?", options: ["uso del carbón como única energía", "predominio de la manufactura artesanal", "el uso de la electricidad, el petróleo y el acero", "el telar mecánico"], correct: 2, explanation: "Hacia 1870 surgieron la electricidad, el motor de combustión interna, el acero y la química industrial." },

    // --- HISTORIA DEL PERÚ ---
    { question: "El hecho que originó la formación de Juntas de Gobierno en España y América fue:", options: ["la Revolución Francesa", "la invasión napoleónica y el cautiverio de Fernando VII", "la independencia de EE. UU.", "la rebelión de Túpac Amaru II"], correct: 1, explanation: "Napoleón invadió España en 1808 y los españoles formaron juntas para gobernar en nombre del rey." },
    { question: "La Constitución de Cádiz (1812) estableció:", options: ["una monarquía constitucional con soberanía nacional", "una república", "el absolutismo", "el virreinato hereditario"], correct: 0, explanation: "Fue una constitución liberal que limitó el poder del rey y reconoció la soberanía de la nación." },
    { question: "Francisco Antonio de Zela lideró en 1811 la rebelión de:", options: ["Huánuco", "Cusco", "Tacna", "Arequipa"], correct: 2, explanation: "Zela encabezó el levantamiento mestizo de Tacna, que fue reprimido rápidamente." },
    { question: "La rebelión de 1814 en el Cusco fue dirigida por:", options: ["los hermanos Angulo y Mateo Pumacahua", "Zela y Paillardelli", "Crespo y Castillo", "Túpac Amaru y Micaela Bastidas"], correct: 0, explanation: "Los Angulo y el cacique Pumacahua lideraron esta rebelión, que abarcó el sur andino." },
    { question: "La Expedición Libertadora de San Martín desembarcó en 1820 en:", options: ["Callao", "Paracas (Pisco)", "Ilo", "Huacho"], correct: 1, explanation: "Llegó a la bahía de Paracas en setiembre de 1820, y desde allí inició la campaña." },
    { question: "La batalla que selló la independencia del Perú fue:", options: ["Pichincha", "Ayacucho", "Boyacá", "Maipú"], correct: 1, explanation: "El 9 de diciembre de 1824, Sucre venció a los realistas en la Pampa de la Quinua." },
    { question: "Durante el gobierno de Alberto Fujimori, el 5 de abril de 1992 ocurrió:", options: ["la Constitución de 1979", "el autogolpe, con la disolución del Congreso", "la guerra con Chile", "la captura de Montesinos"], correct: 1, explanation: "Fujimori disolvió el Congreso e intervino el Poder Judicial. Después se aprobó la Constitución de 1993." },

    // --- GEOGRAFÍA ---
    { question: "Una característica del espacio rural es:", options: ["alta densidad poblacional", "predominio de actividades primarias", "predominio de servicios", "industria pesada"], correct: 1, explanation: "En el espacio rural predominan la agricultura, la ganadería y la pesca, con baja densidad poblacional." },
    { question: "El principal recurso pesquero del Perú, destinado sobre todo a harina de pescado, es:", options: ["la merluza", "el bonito", "la anchoveta", "la corvina"], correct: 2, explanation: "La anchoveta abunda por la corriente de Humboldt." },
    { question: "¿Cuál es una actividad del sector secundario?", options: ["pesca", "minería", "comercio", "manufactura"], correct: 3, explanation: "El sector secundario transforma materias primas en productos elaborados." },
    { question: "La tasa de natalidad expresa:", options: ["el número de muertes por cada 1000 habitantes", "el número de nacimientos por cada 1000 habitantes en un año", "el número de migrantes", "el crecimiento económico"], correct: 1, explanation: "Se calcula con el número de nacidos vivos por cada mil habitantes en un año." },
    { question: "Un efecto del éxodo rural es:", options: ["el despoblamiento de las ciudades", "el aumento de la producción agrícola", "el crecimiento de asentamientos humanos en la periferia urbana", "la reducción de la demanda de servicios"], correct: 2, explanation: "El campo expulsa población hacia las ciudades, que crecen de forma desordenada." },
    { question: "El organismo que administra las Áreas Naturales Protegidas del Perú es:", options: ["SERNANP", "OEFA", "SUNAT", "INDECOPI"], correct: 0, explanation: "El SERNANP gestiona el SINANPE. El OEFA fiscaliza en materia ambiental." },

    // --- ECONOMÍA ---
    { question: "La entidad que emite billetes y monedas en el Perú es:", options: ["la SBS", "el Banco de la Nación", "el MEF", "el BCRP"], correct: 3, explanation: "El Banco Central de Reserva del Perú emite la moneda y busca preservar la estabilidad monetaria." },
    { question: "Cuando el dinero se guarda para usarlo en el futuro, cumple la función de:", options: ["medio de cambio", "unidad de cuenta", "reserva de valor", "patrón de pagos"], correct: 2, explanation: "El ahorro conserva valor a lo largo del tiempo." },
    { question: "La inflación se mide en el Perú principalmente con:", options: ["el IPC", "el PBI", "el tipo de cambio", "la tasa de desempleo"], correct: 0, explanation: "El Índice de Precios al Consumidor mide la variación de los precios de una canasta." },
    { question: "La Ley de Presupuesto del Sector Público es aprobada por:", options: ["el Ministerio de Economía", "el Presidente de la República", "el Banco Central", "el Congreso de la República"], correct: 3, explanation: "El Ejecutivo (MEF) formula el proyecto y el Congreso lo aprueba." },

    // --- EDUCACIÓN CÍVICA ---
    { question: "La máxima autoridad ejecutiva de un gobierno regional es el:", options: ["alcalde", "prefecto", "gobernador regional", "ministro"], correct: 2, explanation: "Los gobiernos regionales los dirige el gobernador regional." },
    { question: "El Informe Final de la Comisión de la Verdad y Reconciliación (CVR) se entregó en:", options: ["1992", "2003", "2011", "1980"], correct: 1, explanation: "Se presentó en agosto de 2003. Investigó la violencia ocurrida entre 1980 y 2000." },
    { question: "La actitud de respetar y valorar las diferencias culturales y dialogar en igualdad se llama:", options: ["etnocentrismo", "asimilación", "interculturalidad", "discriminación"], correct: 2, explanation: "La interculturalidad reconoce la diversidad étnica y lingüística." },
    { question: "El mecanismo de participación ciudadana que permite destituir a alcaldes y gobernadores mediante votación es:", options: ["la revocatoria", "el referéndum", "la iniciativa legislativa", "la consulta previa"], correct: 0, explanation: "La revocatoria somete a consulta popular la continuidad de una autoridad elegida." },
    { question: "La consulta previa es un derecho de:", options: ["los pueblos indígenas u originarios, antes de medidas que afecten sus derechos colectivos", "todos los funcionarios públicos", "los partidos políticos", "las empresas mineras"], correct: 0, explanation: "Lo reconoce la Ley 29785 y garantiza que estos pueblos sean consultados." }
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