// ==================== DATOS DEL CUESTIONARIO ====================
const preguntas = [
  {
    id: 1,
    tema: "Cantar de gesta",
    pregunta: "¿Qué es un cantar de gesta?",
    opciones: {
      A: "Una composición lírica dedicada principalmente al amor.",
      B: "Un relato épico en verso que narra las hazañas de un héroe.",
      C: "Una obra teatral de carácter religioso.",
      D: "Una novela breve de carácter humorístico."
    },
    correcta: "B",
    justificacion: "Los cantares de gesta son poemas épicos medievales que narran las hazañas, aventuras y valores de héroes, generalmente relacionados con acontecimientos históricos o legendarios."
  },
  {
    id: 2,
    tema: "Mío Cid",
    pregunta: "¿Quién es el protagonista principal de El cantar de Mío Cid?",
    opciones: {
      A: "Don Quijote de la Mancha.",
      B: "Roldán.",
      C: "Rodrigo Díaz de Vivar.",
      D: "Alfonso X."
    },
    correcta: "C",
    justificacion: "El protagonista es Rodrigo Díaz de Vivar, conocido como el Cid Campeador, personaje histórico que se convirtió en una figura legendaria de la literatura medieval española."
  },
  {
    id: 3,
    tema: "Mío Cid",
    pregunta: "¿Cuál es el tema central de El cantar de Mío Cid?",
    opciones: {
      A: "La búsqueda de un amor imposible.",
      B: "La recuperación de la honra y el reconocimiento social del héroe.",
      C: "La crítica de la sociedad renacentista.",
      D: "La vida de los campesinos medievales."
    },
    correcta: "B",
    justificacion: "El Cid pierde su honra al ser desterrado injustamente y, mediante sus acciones y victorias, consigue recuperar su prestigio y posición ante el rey y la sociedad."
  },
  {
    id: 4,
    tema: "Mío Cid",
    pregunta: "¿Por qué es desterrado el Cid al inicio de la obra?",
    opciones: {
      A: "Porque abandona voluntariamente Castilla.",
      B: "Porque es acusado de traición y pierde el favor del rey Alfonso VI.",
      C: "Porque se niega a luchar contra los musulmanes.",
      D: "Porque desobedece a sus vasallos."
    },
    correcta: "B",
    justificacion: "El Cid es acusado injustamente de apropiarse de parte de los tributos enviados al rey. Como consecuencia, Alfonso VI ordena su destierro."
  },
  {
    id: 5,
    tema: "Mío Cid",
    pregunta: "¿Cuál de los siguientes personajes representa una importante relación familiar del Cid?",
    opciones: {
      A: "Dulcinea del Toboso.",
      B: "Doña Elvira y Doña Sol.",
      C: "Doña Inés.",
      D: "Marcela."
    },
    correcta: "B",
    justificacion: "Doña Elvira y Doña Sol son las hijas del Cid. Su matrimonio con los infantes de Carrión constituye una parte importante de la trama y posteriormente provoca un conflicto relacionado con la honra familiar."
  },
  {
    id: 6,
    tema: "Lazarillo de Tormes",
    pregunta: "¿A qué género pertenece principalmente El Lazarillo de Tormes?",
    opciones: {
      A: "Novela picaresca.",
      B: "Novela caballeresca.",
      C: "Novela pastoril.",
      D: "Novela histórica."
    },
    correcta: "A",
    justificacion: "El Lazarillo de Tormes es considerada una de las primeras grandes obras de la novela picaresca. Presenta la vida de un personaje humilde que debe utilizar su ingenio para sobrevivir."
  },
  {
    id: 7,
    tema: "Lazarillo de Tormes",
    pregunta: "¿Quién narra la historia de El Lazarillo de Tormes?",
    opciones: {
      A: "El ciego.",
      B: "El escudero.",
      C: "Lázaro de Tormes.",
      D: "El arcipreste de San Salvador."
    },
    correcta: "C",
    justificacion: "La obra está narrada en primera persona por Lázaro, quien cuenta su vida desde su infancia y las experiencias que tuvo al servicio de diferentes amos."
  },
  {
    id: 8,
    tema: "Lazarillo de Tormes",
    pregunta: "¿Cuál es una característica fundamental del protagonista de El Lazarillo de Tormes?",
    opciones: {
      A: "Es un caballero de origen noble.",
      B: "Es un personaje humilde que utiliza su ingenio para sobrevivir.",
      C: "Es un héroe que busca conquistar territorios.",
      D: "Es un príncipe que busca recuperar su reino."
    },
    correcta: "B",
    justificacion: "Lázaro pertenece a un ambiente social humilde y enfrenta el hambre y la pobreza. Para sobrevivir, desarrolla astucia e ingenio, especialmente frente a sus diferentes amos."
  },
  {
    id: 9,
    tema: "Lazarillo de Tormes",
    pregunta: "¿Cuál de los siguientes personajes es uno de los primeros amos de Lázaro?",
    opciones: {
      A: "El ciego.",
      B: "El Cid.",
      C: "Sancho Panza.",
      D: "El bachiller Sansón Carrasco."
    },
    correcta: "A",
    justificacion: "El ciego es el primer amo importante de Lázaro. Durante su servicio, el muchacho aprende mediante experiencias difíciles a ser más astuto y desconfiado."
  },
  {
    id: 10,
    tema: "Lazarillo de Tormes",
    pregunta: "¿Qué aspecto de la sociedad critica especialmente El Lazarillo de Tormes?",
    opciones: {
      A: "La vida de los héroes mitológicos.",
      B: "La corrupción, la hipocresía y las desigualdades sociales.",
      C: "La expansión de la ciencia moderna.",
      D: "Las guerras de la Antigüedad."
    },
    correcta: "B",
    justificacion: "La obra utiliza la vida de Lázaro para mostrar y criticar problemas de la sociedad de su época, especialmente la pobreza, la apariencia social y la hipocresía de algunos sectores."
  },
  {
    id: 11,
    tema: "Don Quijote",
    pregunta: "¿Quién escribió El ingenioso hidalgo don Quijote de la Mancha?",
    opciones: {
      A: "Gustavo Adolfo Bécquer.",
      B: "Miguel de Cervantes Saavedra.",
      C: "Garcilaso de la Vega.",
      D: "Fernando de Rojas."
    },
    correcta: "B",
    justificacion: "Miguel de Cervantes Saavedra es el autor de Don Quijote de la Mancha, una de las obras fundamentales de la literatura española y universal."
  },
  {
    id: 12,
    tema: "Don Quijote",
    pregunta: "¿Cuál es el nombre del protagonista antes de convertirse en Don Quijote?",
    opciones: {
      A: "Alonso Quijano.",
      B: "Rodrigo Díaz.",
      C: "Lázaro González.",
      D: "Sancho Quijada."
    },
    correcta: "A",
    justificacion: "El protagonista es presentado inicialmente como Alonso Quijano, un hidalgo que, después de leer numerosos libros de caballerías, decide convertirse en caballero andante bajo el nombre de Don Quijote."
  },
  {
    id: 13,
    tema: "Don Quijote",
    pregunta: "¿Quién acompaña a Don Quijote como su escudero?",
    opciones: {
      A: "El bachiller Sansón Carrasco.",
      B: "Cardenio.",
      C: "Sancho Panza.",
      D: "Ginés de Pasamonte."
    },
    correcta: "C",
    justificacion: "Sancho Panza es el fiel escudero de Don Quijote. Representa una visión más práctica y realista frente a la imaginación y los ideales caballerescos de su amo."
  },
  {
    id: 14,
    tema: "Don Quijote",
    pregunta: "¿Cómo interpreta Don Quijote los molinos de viento?",
    opciones: {
      A: "Como castillos abandonados.",
      B: "Como gigantes contra los que debe luchar.",
      C: "Como barcos enemigos.",
      D: "Como soldados del rey."
    },
    correcta: "B",
    justificacion: "Don Quijote transforma la realidad de acuerdo con su imaginación caballeresca y considera que los molinos son gigantes. Este episodio representa el contraste entre su idealismo y la realidad."
  },
  {
    id: 15,
    tema: "Don Quijote",
    pregunta: "¿Quién es Dulcinea del Toboso?",
    opciones: {
      A: "La esposa de Sancho Panza.",
      B: "Una princesa que gobierna La Mancha.",
      C: "La dama idealizada por Don Quijote.",
      D: "La sobrina de Don Quijote."
    },
    correcta: "C",
    justificacion: "Dulcinea es la dama a quien Don Quijote dedica sus hazañas. Su nombre literario corresponde a Aldonza Lorenzo, una mujer que el protagonista idealiza como una noble dama."
  },
  {
    id: 16,
    tema: "Rima LIII",
    pregunta: "¿Quién es el autor de la Rima LIII?",
    opciones: {
      A: "Miguel de Cervantes.",
      B: "Gustavo Adolfo Bécquer.",
      C: "Garcilaso de la Vega.",
      D: "Jorge Manrique."
    },
    correcta: "B",
    justificacion: "La Rima LIII pertenece a las Rimas de Gustavo Adolfo Bécquer, uno de los principales representantes de la poesía romántica española."
  },
  {
    id: 17,
    tema: "Rima LIII",
    pregunta: "¿Cuál es el tema principal de la Rima LIII?",
    opciones: {
      A: "La guerra y el honor.",
      B: "La imposibilidad de recuperar un amor perdido.",
      C: "La vida de un héroe medieval.",
      D: "La crítica de los libros de caballerías."
    },
    correcta: "B",
    justificacion: "El poema expresa la tristeza del hablante lírico ante una relación amorosa que terminó. Aunque situaciones semejantes puedan repetirse, el poeta sostiene que ese amor particular no volverá."
  },
  {
    id: 18,
    tema: "Rima LIII",
    pregunta: "En la Rima LIII, ¿qué elemento de la naturaleza se repite como símbolo?",
    opciones: {
      A: "Las golondrinas.",
      B: "Los molinos de viento.",
      C: "Los campos de batalla.",
      D: "Las montañas nevadas."
    },
    correcta: "A",
    justificacion: "Las golondrinas son uno de los elementos naturales más importantes del poema. Su regreso simboliza la repetición de ciertos acontecimientos, aunque el amor perdido no podrá regresar de la misma manera."
  },
  {
    id: 19,
    tema: "Rima LIII",
    pregunta: "¿Qué sentimiento predomina en la Rima LIII?",
    opciones: {
      A: "Alegría y celebración.",
      B: "Humor y sátira.",
      C: "Melancolía y nostalgia amorosa.",
      D: "Orgullo patriótico."
    },
    correcta: "C",
    justificacion: "El poema transmite tristeza, nostalgia y dolor por un amor que ha terminado y que, según el hablante lírico, no volverá a repetirse de la misma manera."
  },
  {
    id: 20,
    tema: "Rima LIII",
    pregunta: "¿Cuál de las siguientes características corresponde al Romanticismo presente en la Rima LIII?",
    opciones: {
      A: "Predominio de la razón sobre los sentimientos.",
      B: "Expresión de sentimientos personales, subjetividad y valoración de la naturaleza.",
      C: "Rechazo absoluto de las emociones.",
      D: "Interés exclusivo por temas científicos."
    },
    correcta: "B",
    justificacion: "El Romanticismo se caracteriza por la importancia de los sentimientos, la subjetividad, la libertad y la expresión individual. En la Rima LIII, Bécquer utiliza elementos de la naturaleza para expresar el dolor y la nostalgia amorosa."
  }
];

// ==================== ESTADO ====================
let indiceActual = 0;
let respuestas = {}; // { idPregunta: 'A' | 'B' | ... }
let respondidas = 0;
const totalPreguntas = preguntas.length;

// ==================== ELEMENTOS DEL DOM ====================
const pantallaInicio = document.getElementById('pantallaInicio');
const pantallaExamen = document.getElementById('pantallaExamen');
const pantallaFinal = document.getElementById('pantallaFinal');

const btnComenzar = document.getElementById('btnComenzar');
const numPregunta = document.getElementById('numPregunta');
const totalPreguntasSpan = document.getElementById('totalPreguntas');
const temaPregunta = document.getElementById('temaPregunta');
const progreso = document.getElementById('progreso');
const textoPregunta = document.getElementById('textoPregunta');
const opcionesContainer = document.getElementById('opcionesContainer');
const justificacion = document.getElementById('justificacion');
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

const puntajeFinal = document.getElementById('puntajeFinal');
const porcentajeFinal = document.getElementById('porcentajeFinal');
const mensajeFinal = document.getElementById('mensajeFinal');
const resumenTemas = document.getElementById('resumenTemas');
const btnRepasar = document.getElementById('btnRepasar');
const btnVerErrores = document.getElementById('btnVerErrores');

// ==================== FUNCIONES ====================
function mostrarPantalla(pantalla) {
  document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
  pantalla.classList.add('activa');
}

function renderizarPregunta() {
  const p = preguntas[indiceActual];

  numPregunta.textContent = indiceActual + 1;
  totalPreguntasSpan.textContent = totalPreguntas;
  temaPregunta.textContent = p.tema;

  // Barra de progreso
  const porcentaje = ((indiceActual + 1) / totalPreguntas) * 100;
  progreso.style.width = porcentaje + '%';

  // Pregunta
  textoPregunta.textContent = `${indiceActual + 1}. ${p.pregunta}`;

  // Opciones
  let htmlOpciones = '';
  Object.entries(p.opciones).forEach(([letra, texto]) => {
    htmlOpciones += `
      <div class="opcion" data-letra="${letra}">
        <strong>${letra})</strong> ${texto}
      </div>
    `;
  });
  opcionesContainer.innerHTML = htmlOpciones;

  // Si ya fue respondida, mostrar estado
  const respuestaGuardada = respuestas[p.id];
  if (respuestaGuardada) {
    marcarRespuesta(p, respuestaGuardada);
  } else {
    justificacion.classList.remove('visible');
    justificacion.innerHTML = '';
  }

  // Botones
  btnAnterior.disabled = indiceActual === 0;
  btnSiguiente.disabled = !respuestas[p.id];

  // Cambiar texto del botón siguiente si es la última
  if (indiceActual === totalPreguntas - 1) {
    btnSiguiente.textContent = 'Finalizar ✓';
  } else {
    btnSiguiente.textContent = 'Siguiente →';
  }
}

function marcarRespuesta(p, letraElegida) {
  const opciones = opcionesContainer.querySelectorAll('.opcion');
  const esCorrecta = letraElegida === p.correcta;

  opciones.forEach(op => {
    op.classList.add('bloqueada');
    if (op.dataset.letra === p.correcta) {
      op.classList.add('correcta');
    } else if (op.dataset.letra === letraElegida && !esCorrecta) {
      op.classList.add('incorrecta');
    }
    if (op.dataset.letra === letraElegida) {
      op.classList.add('seleccionada');
    }
  });

  justificacion.innerHTML = `
    <strong>${esCorrecta ? '✅ ¡Correcto!' : '❌ Incorrecto'}</strong><br>
    La respuesta correcta es <strong>${p.correcta}) ${p.opciones[p.correcta]}</strong><br><br>
    <em>${p.justificacion}</em>
  `;
  justificacion.classList.add('visible');
}

function seleccionarOpcion(letra) {
  const p = preguntas[indiceActual];

  if (respuestas[p.id]) return; // ya respondida

  respuestas[p.id] = letra;
  respondidas++;

  marcarRespuesta(p, letra);

  btnSiguiente.disabled = false;
}

function irSiguiente() {
  if (indiceActual < totalPreguntas - 1) {
    indiceActual++;
    renderizarPregunta();
  } else {
    finalizarExamen();
  }
}

function irAnterior() {
  if (indiceActual > 0) {
    indiceActual--;
    renderizarPregunta();
  }
}

function finalizarExamen() {
  let correctas = 0;
  const porTema = {};

  preguntas.forEach(p => {
    if (!porTema[p.tema]) porTema[p.tema] = { correctas: 0, total: 0 };
    porTema[p.tema].total++;
    if (respuestas[p.id] === p.correcta) {
      correctas++;
      porTema[p.tema].correctas++;
    }
  });

  const porcentaje = Math.round((correctas / totalPreguntas) * 100);

  puntajeFinal.textContent = `${correctas} / ${totalPreguntas}`;
  porcentajeFinal.textContent = `${porcentaje}%`;

  // Mensaje personalizado
  let mensaje = '';
  if (porcentaje === 100) {
    mensaje = '¡Perfecto! Eres una genia de la literatura.  ojitos  eres la más inteligente';
  } else if (porcentaje >= 80) {
    mensaje = '¡Excelente! Sabes muchísimo. Estoy muy orgulloso';
  } else if (porcentaje >= 60) {
    mensaje = '¡Muy bien! Tienes buenos conocimientos. Un repasito más y perfecto';
  } else if (porcentaje >= 40) {
    mensaje = 'No está mal, ojitos. Repasemos más';
  } else {
    mensaje = 'Tranquila, ojitos. Lo importante es repasar. Te acompaño a estudiar';
  }
  mensajeFinal.textContent = mensaje;

  // Resumen por tema
  let resumenHTML = '<h3>Resumen por tema</h3>';
  Object.entries(porTema).forEach(([tema, datos]) => {
    const pct = Math.round((datos.correctas / datos.total) * 100);
    resumenHTML += `
      <div class="tema-fila">
        <span>${tema}</span>
        <span><strong>${datos.correctas}/${datos.total}</strong> (${pct}%)</span>
      </div>
    `;
  });
  resumenTemas.innerHTML = resumenHTML;

  mostrarPantalla(pantallaFinal);
}

function reiniciarExamen() {
  indiceActual = 0;
  respuestas = {};
  respondidas = 0;
  progreso.style.width = '5%';
  mostrarPantalla(pantallaInicio);
}

// ==================== EVENTOS ====================
btnComenzar.addEventListener('click', () => {
  indiceActual = 0;
  respuestas = {};
  respondidas = 0;
  mostrarPantalla(pantallaExamen);
  renderizarPregunta();
});

opcionesContainer.addEventListener('click', (e) => {
  const opcion = e.target.closest('.opcion');
  if (!opcion || opcion.classList.contains('bloqueada')) return;
  seleccionarOpcion(opcion.dataset.letra);
});

btnSiguiente.addEventListener('click', irSiguiente);
btnAnterior.addEventListener('click', irAnterior);

btnRepasar.addEventListener('click', reiniciarExamen);

btnVerErrores.addEventListener('click', () => {
  const errores = preguntas.filter(p => respuestas[p.id] !== p.correcta);
  if (errores.length === 0) {
    alert('¡No tienes errores! Eres increíble');
    return;
  }

  // Mostrar solo errores en una alerta simple con formato
  let texto = '❌ Preguntas que fallaste:\n\n';
  errores.forEach(p => {
    texto += `• ${p.pregunta}\n  Respuesta correcta: ${p.correcta}) ${p.opciones[p.correcta]}\n\n`;
  });
  alert(texto);
});