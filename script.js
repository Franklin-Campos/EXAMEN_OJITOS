// ==================== DATOS DEL CUESTIONARIO ====================
const preguntas = [
  {
    id: 1,
    tema: "Humanismo",
    pregunta: "¿Qué fue el Humanismo durante la Edad Moderna?",
    opciones: {
      A: "Un movimiento que rechazó completamente la cultura clásica.",
      B: "Un movimiento intelectual que colocó al ser humano y la razón en un lugar central.",
      C: "Un movimiento exclusivamente religioso.",
      D: "Una corriente política que defendía las monarquías absolutas."
    },
    correcta: "B",
    justificacion: "El Humanismo fue un movimiento intelectual que recuperó el estudio de la cultura clásica y destacó la capacidad, dignidad y razón del ser humano."
  },
  {
    id: 2,
    tema: "Renacimiento",
    pregunta: "¿Cuál fue una característica importante del Renacimiento?",
    opciones: {
      A: "El rechazo de la cultura grecorromana.",
      B: "El interés por la cultura clásica, las artes y el conocimiento científico.",
      C: "La desaparición de las actividades comerciales.",
      D: "El aislamiento cultural de Europa."
    },
    correcta: "B",
    justificacion: "El Renacimiento recuperó los modelos culturales de Grecia y Roma y promovió importantes avances en las artes, las ciencias y el pensamiento."
  },
  {
    id: 3,
    tema: "Renacimiento",
    pregunta: "¿En qué región europea tuvo su origen el Renacimiento?",
    opciones: {
      A: "Italia.",
      B: "Inglaterra.",
      C: "Rusia.",
      D: "Portugal."
    },
    correcta: "A",
    justificacion: "El Renacimiento surgió principalmente en las ciudades italianas, como Florencia, Venecia y Roma, y posteriormente se difundió por Europa."
  },
  {
    id: 4,
    tema: "Descubrimientos",
    pregunta: "¿Cuál fue una de las principales causas de los descubrimientos geográficos de los siglos XV y XVI?",
    opciones: {
      A: "La búsqueda de nuevas rutas comerciales hacia Asia.",
      B: "La desaparición del comercio europeo.",
      C: "El deseo de abandonar las actividades marítimas.",
      D: "La prohibición del comercio de especias."
    },
    correcta: "A",
    justificacion: "Los europeos buscaban nuevas rutas hacia Asia para obtener productos como especias y metales preciosos, evitando las rutas comerciales tradicionales controladas por otros pueblos."
  },
  {
    id: 5,
    tema: "Descubrimientos",
    pregunta: "¿Quién llegó a América en 1492 bajo el patrocinio de los Reyes Católicos?",
    opciones: {
      A: "Vasco da Gama.",
      B: "Fernando de Magallanes.",
      C: "Cristóbal Colón.",
      D: "Américo Vespucio."
    },
    correcta: "C",
    justificacion: "Cristóbal Colón llegó a América el 12 de octubre de 1492 durante una expedición financiada por los Reyes Católicos de España."
  },
  {
    id: 6,
    tema: "Reforma Protestante",
    pregunta: "¿Qué fue la Reforma Protestante?",
    opciones: {
      A: "Un movimiento que buscó reformar aspectos de la Iglesia católica y dio origen a nuevas iglesias cristianas.",
      B: "Una guerra entre España y Portugal.",
      C: "Un movimiento artístico del Renacimiento.",
      D: "Una revolución política contra las monarquías."
    },
    correcta: "A",
    justificacion: "La Reforma Protestante comenzó en el siglo XVI como una crítica a determinadas prácticas y doctrinas de la Iglesia católica, dando origen a diversas iglesias protestantes."
  },
  {
    id: 7,
    tema: "Reforma Protestante",
    pregunta: "¿Quién inició la Reforma Protestante en Alemania?",
    opciones: {
      A: "Juan Calvino.",
      B: "Martín Lutero.",
      C: "Enrique VIII.",
      D: "Ignacio de Loyola."
    },
    correcta: "B",
    justificacion: "Martín Lutero cuestionó diversas prácticas de la Iglesia católica y en 1517 difundió sus famosas 95 tesis, hecho considerado fundamental para el inicio de la Reforma."
  },
  {
    id: 8,
    tema: "Reforma Protestante",
    pregunta: "¿Qué documento presentó Martín Lutero en 1517?",
    opciones: {
      A: "Las 95 tesis.",
      B: "El Edicto de Nantes.",
      C: "La Declaración de Independencia.",
      D: "La Carta Magna."
    },
    correcta: "A",
    justificacion: "Las 95 tesis criticaban especialmente la venta de indulgencias y planteaban cuestiones relacionadas con la doctrina y las prácticas de la Iglesia."
  },
  {
    id: 9,
    tema: "Reforma Protestante",
    pregunta: "¿Qué reformador estuvo relacionado con el desarrollo del calvinismo?",
    opciones: {
      A: "Juan Calvino.",
      B: "Martín Lutero.",
      C: "Enrique VIII.",
      D: "Carlos V."
    },
    correcta: "A",
    justificacion: "Juan Calvino fue uno de los principales líderes de la Reforma Protestante y desarrolló una doctrina cristiana que tuvo gran influencia en Suiza y posteriormente en otras regiones de Europa."
  },
  {
    id: 10,
    tema: "Reforma Protestante",
    pregunta: "¿Por qué surgió la Iglesia Anglicana?",
    opciones: {
      A: "Por la decisión de Enrique VIII de separarse de la autoridad del papa.",
      B: "Por la llegada de Cristóbal Colón a América.",
      C: "Por las ideas de Juan Calvino en Francia.",
      D: "Por la Revolución Francesa."
    },
    correcta: "A",
    justificacion: "Enrique VIII rompió con la autoridad papal y estableció la Iglesia de Inglaterra, proceso que dio origen a la Iglesia Anglicana."
  },
  {
    id: 11,
    tema: "Contrarreforma",
    pregunta: "¿Qué fue la Contrarreforma Católica?",
    opciones: {
      A: "La respuesta de la Iglesia católica frente a la Reforma Protestante.",
      B: "Una revolución contra los reyes europeos.",
      C: "Una corriente artística exclusivamente italiana.",
      D: "Un movimiento para eliminar las órdenes religiosas."
    },
    correcta: "A",
    justificacion: "La Contrarreforma fue el proceso de renovación interna y defensa doctrinal desarrollado por la Iglesia católica frente al avance de las ideas protestantes."
  },
  {
    id: 12,
    tema: "Contrarreforma",
    pregunta: "¿Qué importante acontecimiento estuvo relacionado con la Contrarreforma?",
    opciones: {
      A: "El Concilio de Trento.",
      B: "La llegada de Colón a América.",
      C: "La independencia de las Trece Colonias.",
      D: "La Revolución Industrial."
    },
    correcta: "A",
    justificacion: "El Concilio de Trento (1545–1563) reafirmó doctrinas católicas y estableció medidas de reforma y disciplina dentro de la Iglesia."
  },
  {
    id: 13,
    tema: "Monarquía absoluta",
    pregunta: "¿Qué característica tuvo la monarquía absoluta durante la Edad Moderna?",
    opciones: {
      A: "El poder político estaba concentrado principalmente en el monarca.",
      B: "El pueblo elegía directamente al rey.",
      C: "No existían ejércitos permanentes.",
      D: "El rey no tenía ninguna autoridad política."
    },
    correcta: "A",
    justificacion: "En las monarquías absolutas, el rey concentraba amplias funciones políticas y administrativas y ejercía un fuerte control sobre el Estado."
  },
  {
    id: 14,
    tema: "Monarquía absoluta",
    pregunta: "¿Cuál de los siguientes monarcas es considerado uno de los principales representantes del absolutismo?",
    opciones: {
      A: "Luis XIV de Francia.",
      B: "George Washington.",
      C: "Cristóbal Colón.",
      D: "Martín Lutero."
    },
    correcta: "A",
    justificacion: "Luis XIV es uno de los principales ejemplos del absolutismo monárquico. Se le atribuye la conocida expresión “El Estado soy yo”, aunque su autenticidad histórica es discutida."
  },
  {
    id: 15,
    tema: "Ilustración",
    pregunta: "¿Qué fue la Ilustración?",
    opciones: {
      A: "Un movimiento intelectual que defendió el uso de la razón y cuestionó estructuras tradicionales.",
      B: "Un movimiento exclusivamente religioso.",
      C: "Una guerra entre Francia e Inglaterra.",
      D: "Una corriente artística medieval."
    },
    correcta: "A",
    justificacion: "La Ilustración del siglo XVIII promovió la razón, la libertad, el conocimiento, la educación y la crítica de las instituciones tradicionales."
  },
  {
    id: 16,
    tema: "Ilustración",
    pregunta: "¿Cuál de los siguientes pensadores fue representante de la Ilustración?",
    opciones: {
      A: "Voltaire.",
      B: "Miguel Ángel.",
      C: "Hernán Cortés.",
      D: "Rodrigo Díaz de Vivar."
    },
    correcta: "A",
    justificacion: "Voltaire fue uno de los principales pensadores ilustrados y defendió ideas relacionadas con la libertad de pensamiento y la tolerancia."
  },
  {
    id: 17,
    tema: "Despotismo ilustrado",
    pregunta: "¿Qué se entiende por despotismo ilustrado?",
    opciones: {
      A: "Una forma de gobierno que combinó el poder absoluto de los monarcas con algunas ideas de la Ilustración.",
      B: "Un sistema democrático basado en el sufragio universal.",
      C: "Un gobierno dirigido exclusivamente por la Iglesia.",
      D: "La eliminación de todas las monarquías europeas."
    },
    correcta: "A",
    justificacion: "Los monarcas ilustrados impulsaron reformas educativas, económicas y administrativas, pero mantuvieron la concentración del poder en sus manos."
  },
  {
    id: 18,
    tema: "Independencia EE.UU.",
    pregunta: "¿Qué país dominaba las Trece Colonias antes de su independencia?",
    opciones: {
      A: "Francia.",
      B: "España.",
      C: "Gran Bretaña.",
      D: "Portugal."
    },
    correcta: "C",
    justificacion: "Las Trece Colonias de América del Norte estaban bajo dominio británico antes de iniciar su proceso de independencia."
  },
  {
    id: 19,
    tema: "Independencia EE.UU.",
    pregunta: "¿En qué año se proclamó la Declaración de Independencia de los Estados Unidos?",
    opciones: {
      A: "1492.",
      B: "1688.",
      C: "1776.",
      D: "1789."
    },
    correcta: "C",
    justificacion: "La Declaración de Independencia fue aprobada el 4 de julio de 1776, proclamando la separación de las Trece Colonias respecto de Gran Bretaña."
  },
  {
    id: 20,
    tema: "Independencia EE.UU.",
    pregunta: "¿Quién fue uno de los principales líderes de la independencia de las Trece Colonias y posteriormente primer presidente de Estados Unidos?",
    opciones: {
      A: "George Washington.",
      B: "Luis XIV.",
      C: "Juan Calvino.",
      D: "Napoleón Bonaparte."
    },
    correcta: "A",
    justificacion: "George Washington dirigió al ejército continental durante la Guerra de Independencia y posteriormente se convirtió en el primer presidente de los Estados Unidos."
  }
];

// ==================== ESTADO ====================
let indiceActual = 0;
let respuestas = {};
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

  const porcentaje = ((indiceActual + 1) / totalPreguntas) * 100;
  progreso.style.width = porcentaje + '%';

  textoPregunta.textContent = `${indiceActual + 1}. ${p.pregunta}`;

  let htmlOpciones = '';
  Object.entries(p.opciones).forEach(([letra, texto]) => {
    htmlOpciones += `
      <div class="opcion" data-letra="${letra}">
        <strong>${letra})</strong> ${texto}
      </div>
    `;
  });
  opcionesContainer.innerHTML = htmlOpciones;

  const respuestaGuardada = respuestas[p.id];
  if (respuestaGuardada) {
    marcarRespuesta(p, respuestaGuardada);
  } else {
    justificacion.classList.remove('visible');
    justificacion.innerHTML = '';
  }

  btnAnterior.disabled = indiceActual === 0;
  btnSiguiente.disabled = !respuestas[p.id];

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
  if (respuestas[p.id]) return;

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

  let mensaje = '';
  if (porcentaje === 100) {
    mensaje = '¡Perfecto! Eres una genia ojitos .';
  } else if (porcentaje >= 80) {
    mensaje = '¡Excelente! Sabes muchísimo ojitos ';
  } else if (porcentaje >= 60) {
    mensaje = '¡Muy bien! Tienes buenos conocimientos. Un repasito más y perfecto ojitos ';
  } else if (porcentaje >= 40) {
    mensaje = 'No está mal, ojitos . Repasemos juntos antes del domingo. 💘';
  } else {
    mensaje = 'Tranquila, ojitos . Lo importante es repasar. Te acompaño a estudiar. 💝';
  }
  mensajeFinal.textContent = mensaje;

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
    alert('¡No tienes errores! Eres increíble, ojitos. 💕');
    return;
  }

  let texto = '❌ Preguntas que fallaste:\n\n';
  errores.forEach(p => {
    texto += `• ${p.pregunta}\n  Respuesta correcta: ${p.correcta}) ${p.opciones[p.correcta]}\n\n`;
  });
  alert(texto);
});