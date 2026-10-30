// ============================================================
// BANCO DE 30 PREGUNTAS - ECONOMÍA
// ============================================================
const questions = [
    // I. DINERO E INFLACIÓN
    { question: "¿Cuál es la función del dinero que permite expresar el valor de los bienes y servicios mediante precios?", options: ["Medio de intercambio.", "Unidad de cuenta.", "Depósito de valor.", "Medio de producción."], correct: 1, explanation: "La unidad de cuenta permite expresar y comparar el valor de los bienes y servicios mediante una medida monetaria común." },
    { question: "Cuando una persona guarda dinero para utilizarlo en el futuro, está empleando el dinero como:", options: ["Medio de intercambio.", "Unidad de producción.", "Depósito de valor.", "Instrumento tributario."], correct: 2, explanation: "El dinero funciona como depósito de valor porque permite conservar poder adquisitivo para compras posteriores." },
    { question: "La inflación se define como:", options: ["La disminución generalizada de los precios durante un periodo.", "El incremento sostenido y generalizado del nivel de precios de bienes y servicios.", "El aumento del precio de un único producto.", "El incremento de la producción nacional."], correct: 1, explanation: "La inflación es el aumento sostenido del nivel general de precios, lo que reduce el poder adquisitivo." },
    { question: "Si una persona recibe el mismo salario mensual, pero los precios de los productos aumentan considerablemente, ¿qué sucede con su poder adquisitivo?", options: ["Aumenta automáticamente.", "Permanece constante.", "Disminuye.", "Se duplica."], correct: 2, explanation: "Si los ingresos nominales permanecen iguales mientras los precios aumentan, se puede comprar menos." },
    { question: "Un país experimenta un incremento generalizado de precios debido al aumento de los costos de producción. ¿Qué tipo de inflación se presenta?", options: ["Inflación por demanda.", "Inflación importada exclusivamente.", "Inflación por costos.", "Deflación."], correct: 2, explanation: "La inflación por costos ocurre cuando aumentan los costos de producción y se trasladan al precio final." },
    { question: "Si la inflación anual de un país alcanza el 10 %, ¿qué significa principalmente?", options: ["Que todos los productos aumentaron exactamente un 10 %.", "Que el nivel general de precios aumentó aproximadamente un 10 % respecto del periodo anterior.", "Que los salarios aumentaron obligatoriamente un 10 %.", "Que la producción nacional disminuyó un 10 %."], correct: 1, explanation: "La inflación mide la variación del nivel general de precios, no el incremento individual de todos los productos." },
    { question: "¿Qué institución tiene como finalidad principal preservar la estabilidad monetaria en el Perú?", options: ["Ministerio de Economía y Finanzas (MEF).", "SUNAT.", "Banco Central de Reserva del Perú (BCRP).", "SBS."], correct: 2, explanation: "El BCRP tiene como finalidad preservar la estabilidad monetaria y controlar la inflación." },
    { question: "Si el Banco Central aumenta su tasa de interés de referencia, ¿qué efecto puede producir en la economía?", options: ["Incentivar el consumo mediante créditos más baratos.", "Encarecer el crédito y contribuir a reducir las presiones inflacionarias.", "Eliminar inmediatamente todos los impuestos.", "Aumentar automáticamente los salarios."], correct: 1, explanation: "Una mayor tasa de referencia puede encarecer los préstamos y moderar el consumo." },

    // II. SECTOR PÚBLICO Y PRESUPUESTO
    { question: "¿Qué se entiende por sector público?", options: ["El conjunto de empresas privadas que comercializan productos.", "El conjunto de instituciones y entidades del Estado que desarrollan funciones públicas.", "Únicamente los ministerios del Poder Ejecutivo.", "Las organizaciones internacionales que operan en el país."], correct: 1, explanation: "El sector público comprende las entidades estatales de los distintos niveles de gobierno." },
    { question: "¿Cuál es la principal finalidad del presupuesto público?", options: ["Financiar exclusivamente los gastos de los funcionarios.", "Establecer los ingresos y autorizar los gastos del Estado para cumplir sus objetivos.", "Determinar los precios de todos los productos del mercado.", "Regular únicamente las exportaciones e importaciones."], correct: 1, explanation: "El presupuesto público permite planificar y asignar los recursos del Estado para el bienestar de la población." },
    { question: "En el Perú, ¿qué institución tiene la responsabilidad de conducir el proceso presupuestario del sector público a nivel nacional?", options: ["Banco Central de Reserva del Perú.", "Ministerio de Economía y Finanzas.", "Congreso de la República exclusivamente.", "Contraloría General de la República."], correct: 1, explanation: "El MEF conduce el proceso presupuestario y establece las disposiciones correspondientes." },
    { question: "¿Cuál de los siguientes constituye un ingreso corriente del Estado?", options: ["La emisión de billetes por el BCRP.", "Los préstamos obtenidos de organismos internacionales.", "La recaudación de impuestos.", "La venta de bonos para financiar deuda pública."], correct: 2, explanation: "Los impuestos son ingresos corrientes que permiten financiar los gastos y servicios públicos." },
    { question: "¿Cuál de las siguientes opciones representa un gasto de capital del Estado?", options: ["El pago mensual de remuneraciones a los servidores públicos.", "La compra de materiales de oficina.", "La construcción de un hospital público.", "El pago de servicios de electricidad."], correct: 2, explanation: "Los gastos de capital están destinados a incrementar o mejorar los activos públicos, como infraestructura." },
    { question: "Cuando los gastos públicos superan los ingresos públicos durante un periodo determinado, se presenta:", options: ["Superávit fiscal.", "Equilibrio presupuestario.", "Déficit fiscal.", "Superávit comercial."], correct: 2, explanation: "El déficit fiscal se produce cuando los gastos del sector público superan sus ingresos." },
    { question: "¿Cuál es la función principal de la Contraloría General de la República en relación con los recursos públicos?", options: ["Elaborar y aprobar el presupuesto de cada municipalidad.", "Supervisar y controlar el uso adecuado de los recursos y bienes del Estado.", "Recaudar todos los impuestos nacionales.", "Determinar la tasa de interés de referencia."], correct: 1, explanation: "La Contraloría es el órgano superior del Sistema Nacional de Control y supervisa el uso eficiente de los recursos públicos." },

    // III. CUENTAS NACIONALES: PBI Y PBN
    { question: "¿Qué representa el Producto Bruto Interno (PBI)?", options: ["El valor de todos los bienes usados que se venden en un país.", "El valor monetario de los bienes y servicios finales producidos dentro del territorio de un país durante un periodo determinado.", "El total de ingresos obtenidos exclusivamente por ciudadanos nacionales en el extranjero.", "La cantidad de dinero que circula en la economía."], correct: 1, explanation: "El PBI mide el valor de la producción final realizada dentro de las fronteras de un país." },
    { question: "Una empresa extranjera produce automóviles dentro del territorio peruano. ¿El valor de esa producción se incluye en el PBI del Perú?", options: ["No, porque la empresa pertenece a inversionistas extranjeros.", "Sí, porque la producción se realiza dentro del territorio peruano.", "Solo si los automóviles se venden en el extranjero.", "Únicamente si los trabajadores son extranjeros."], correct: 1, explanation: "El PBI considera la producción realizada dentro del territorio económico nacional, sin importar la nacionalidad del propietario." },
    { question: "¿Cuál es la diferencia fundamental entre el PBI y el PNB?", options: ["El PBI mide la producción territorial y el PNB considera la producción o renta atribuible a los factores de producción nacionales.", "El PBI mide únicamente productos agrícolas y el PNB productos industriales.", "El PBI incluye exportaciones y el PNB solamente importaciones.", "Ambos indicadores representan exactamente lo mismo en todos los casos."], correct: 0, explanation: "El PBI considera dónde se produce, mientras que el PNB considera la producción vinculada a los residentes nacionales." },
    { question: "Si el PBI de un país aumenta durante varios años consecutivos, ¿qué puede indicar esta situación?", options: ["Que necesariamente todos los ciudadanos son más ricos.", "Que la producción total de bienes y servicios está creciendo.", "Que la inflación ha desaparecido.", "Que el desempleo es igual a cero."], correct: 1, explanation: "El crecimiento del PBI indica un aumento de la producción económica, pero no garantiza distribución equitativa." },
    { question: "¿Cuál es la diferencia entre el PBI nominal y el PBI real?", options: ["El PBI nominal considera los precios corrientes, mientras que el PBI real elimina el efecto de las variaciones de precios.", "El PBI nominal mide exportaciones y el real mide importaciones.", "El PBI real incluye únicamente productos industriales.", "El PBI nominal siempre es menor que el PBI real."], correct: 0, explanation: "El PBI real permite evaluar el crecimiento de la producción sin confundirlo con el aumento de precios." },
    { question: "Si el PBI de un país es de 500 mil millones de dólares y su población es de 25 millones de habitantes, ¿cuál es su PBI per cápita aproximado?", options: ["2 000 dólares.", "10 000 dólares.", "20 000 dólares.", "50 000 dólares."], correct: 2, explanation: "El PBI per cápita se obtiene dividiendo el PBI entre la población: 500 000 millones ÷ 25 millones = 20 000 dólares." },
    { question: "¿Cuál de las siguientes actividades se incluye en el cálculo del PBI de un país?", options: ["La compra de una vivienda nueva construida durante el año.", "La venta de un automóvil usado entre dos particulares.", "La compra de acciones en la bolsa de valores.", "La transferencia de dinero entre familiares."], correct: 0, explanation: "La construcción de una vivienda nueva genera producción y se incluye en la inversión del PBI." },

    // IV. COMERCIO INTERNACIONAL Y BALANZA DE PAGOS
    { question: "¿Qué se entiende por exportación?", options: ["La compra de bienes y servicios producidos en el extranjero.", "La venta de bienes y servicios nacionales a otros países.", "La transferencia de dinero entre bancos nacionales.", "La adquisición de productos importados por el Estado."], correct: 1, explanation: "Las exportaciones representan las ventas de bienes y servicios de un país hacia el exterior." },
    { question: "¿Cuál es la principal diferencia entre exportación e importación?", options: ["Las exportaciones representan compras del exterior y las importaciones ventas al exterior.", "Ambas representan exclusivamente operaciones financieras.", "Las exportaciones son ventas al exterior y las importaciones son compras de bienes y servicios provenientes de otros países.", "Las exportaciones solo incluyen materias primas y las importaciones únicamente productos industriales."], correct: 2, explanation: "Exportar significa vender bienes y servicios al extranjero, mientras que importar significa adquirirlos." },
    { question: "Cuando el valor de las exportaciones de bienes supera al valor de las importaciones de bienes, un país presenta:", options: ["Déficit comercial.", "Superávit comercial.", "Déficit fiscal.", "Equilibrio presupuestario."], correct: 1, explanation: "Existe superávit comercial cuando las exportaciones de bienes son mayores que las importaciones." },
    { question: "¿Qué es la balanza de pagos?", options: ["El registro de los ingresos y gastos de una municipalidad.", "El registro sistemático de las transacciones económicas entre los residentes de un país y el resto del mundo durante un periodo determinado.", "El documento que registra únicamente las exportaciones agrícolas.", "El registro de los impuestos recaudados por el Estado."], correct: 1, explanation: "La balanza de pagos registra las transacciones económicas internacionales." },
    { question: "¿Qué operaciones se registran principalmente en la cuenta corriente de la balanza de pagos?", options: ["Exportaciones, importaciones, servicios, rentas y transferencias corrientes.", "Únicamente la compra y venta de acciones.", "Exclusivamente los préstamos del Gobierno.", "La emisión de monedas y billetes nacionales."], correct: 0, explanation: "La cuenta corriente registra el comercio de bienes y servicios, rentas y transferencias corrientes." },
    { question: "Si el Perú exporta minerales por un valor superior al de sus importaciones de bienes, ¿qué efecto se produce en su balanza comercial?", options: ["Se genera necesariamente un déficit fiscal.", "Se produce un superávit comercial.", "Se genera automáticamente una salida de capitales.", "Se produce un déficit presupuestario."], correct: 1, explanation: "Cuando el valor de las exportaciones de bienes supera al de las importaciones, se registra un superávit comercial." },
    { question: "¿Qué sucede cuando la moneda nacional se deprecia frente al dólar estadounidense?", options: ["Los productos importados suelen volverse más caros en moneda nacional.", "Las importaciones se vuelven automáticamente gratuitas.", "El valor de todas las exportaciones disminuye necesariamente.", "Desaparece la necesidad de realizar operaciones comerciales internacionales."], correct: 0, explanation: "La depreciación significa que se necesitan más unidades de moneda nacional para adquirir un dólar." },
    { question: "Un país recibe importantes inversiones extranjeras para construir fábricas y adquirir empresas nacionales. ¿En qué cuenta de la balanza de pagos se registran principalmente estas operaciones?", options: ["Cuenta corriente.", "Balanza comercial.", "Cuenta financiera.", "Cuenta de transferencias corrientes."], correct: 2, explanation: "Las inversiones directas y otras operaciones de adquisición de activos financieros se registran en la cuenta financiera." }
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