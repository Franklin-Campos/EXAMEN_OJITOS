(function(){
  const preguntas = [
    {p:"¿Qué elemento geográfico resultó fundamental para el desarrollo de la civilización egipcia?",
     o:["El desierto del Sahara.","El río Nilo y sus crecidas periódicas.","El mar Rojo.","Los montes del Sinaí."],
     r:1, j:"Las crecidas periódicas del río Nilo fertilizaban los suelos y permitieron el desarrollo de la agricultura, base de la civilización egipcia."},
    {p:"¿Entre qué dos ríos se desarrolló la civilización mesopotámica, considerada una de las cunas de la civilización?",
     o:["El Nilo y el Jordán.","El Tigris y el Éufrates.","El Indo y el Ganges.","El Danubio y el Rin."],
     r:1, j:"Mesopotamia, cuyo nombre significa 'entre ríos', se desarrolló entre el Tigris y el Éufrates, en el actual Irak."},
    {p:"¿Cuál fue el principal aporte religioso del pueblo hebreo a la civilización occidental?",
     o:["El politeísmo.","El monoteísmo.","El culto al sol.","La adoración de ídolos animales."],
     r:1, j:"Los hebreos introdujeron el monoteísmo, la creencia en un único Dios, que influyó posteriormente en el cristianismo y el islam."},
    {p:"¿Cómo se denominaban las provincias en que se dividía el Imperio persa para facilitar su administración?",
     o:["Polis.","Satrapías.","Nomos.","Ciudades-Estado."],
     r:1, j:"El Imperio persa se organizó en satrapías, provincias gobernadas por un sátrapa que respondía ante el rey."},
    {p:"¿Con qué principal propósito se construyó la Gran Muralla China?",
     o:["Facilitar el comercio internacional.","Defender el territorio de invasiones de pueblos nómadas del norte.","Servir como templo religioso.","Delimitar las provincias internas."],
     r:1, j:"La Gran Muralla se construyó principalmente con fines defensivos, para proteger al imperio de las invasiones de pueblos nómadas del norte."},
    {p:"¿Qué ciudad-Estado griega es considerada la cuna de la democracia en la Antigüedad?",
     o:["Esparta.","Atenas.","Corinto.","Tebas."],
     r:1, j:"Atenas desarrolló un sistema de gobierno en el que los ciudadanos participaban directamente en la toma de decisiones, considerado el origen de la democracia."},
    {p:"¿Qué transición política experimentó Roma tras el gobierno de Augusto?",
     o:["De monarquía a república.","De república a imperio.","De imperio a monarquía.","De imperio a democracia directa."],
     r:1, j:"Con Augusto como primer emperador, Roma pasó de ser una república gobernada por el Senado a convertirse en un imperio centralizado en la figura del emperador."},
    {p:"¿Qué hecho histórico marcó el inicio de la Edad Media en Europa occidental?",
     o:["La coronación de Carlomagno.","La caída del Imperio Romano de Occidente por las invasiones germánicas.","El nacimiento del islam.","La fundación de Roma."],
     r:1, j:"La caída del Imperio Romano de Occidente en el año 476 d. C., producto de las invasiones de los pueblos germánicos, suele situarse como el inicio de la Edad Media."},
    {p:"¿Quién fue coronado emperador por el papa en el año 800 d. C., dando origen al Imperio Carolingio?",
     o:["Clodoveo.","Carlomagno.","Atila.","Justiniano."],
     r:1, j:"Carlomagno fue coronado emperador por el papa León III en el año 800 d. C., consolidando el Imperio Carolingio en Europa occidental."},
    {p:"¿Qué caracterizó la expansión del islam tras la muerte de Mahoma?",
     o:["Un rápido avance territorial por el Cercano Oriente, el norte de África y parte de Europa.","Una expansión limitada solo a la península arábiga.","La desaparición inmediata de la religión islámica.","Una expansión exclusivamente pacífica sin ningún tipo de conquista."],
     r:0, j:"Tras la muerte de Mahoma, el islam se expandió rápidamente mediante conquistas que abarcaron el Cercano Oriente, el norte de África y parte de la península ibérica."},
    {p:"¿Cuál es la función principal del Poder Legislativo en el Estado peruano?",
     o:["Administrar justicia.","Elaborar, debatir y aprobar las leyes.","Dirigir la política exterior.","Emitir moneda."],
     r:1, j:"El Poder Legislativo, representado por el Congreso de la República, tiene como función principal elaborar, debatir y aprobar las leyes del país."},
    {p:"¿Quién encabeza el Poder Ejecutivo en el Perú y qué función cumple principalmente?",
     o:["El presidente del Congreso; legisla.","El presidente de la República; dirige la política general del gobierno y la administración pública.","El presidente del Poder Judicial; administra justicia.","El presidente del Tribunal Constitucional; interpreta la Constitución."],
     r:1, j:"El Poder Ejecutivo está encabezado por el presidente de la República, junto con el Consejo de Ministros, y dirige la política general del gobierno."},
    {p:"¿Cuál es la función principal del Poder Judicial?",
     o:["Elaborar las leyes del país.","Administrar justicia de forma independiente, resolviendo conflictos según la ley.","Fiscalizar el uso de los recursos públicos.","Emitir la moneda nacional."],
     r:1, j:"El Poder Judicial tiene la función de administrar justicia de manera independiente, resolviendo los conflictos entre las personas conforme a la ley."},
    {p:"¿Cuál es el objetivo principal del principio de separación de poderes en el Estado?",
     o:["Concentrar todas las funciones en un solo órgano.","Evitar la concentración excesiva de poder y garantizar el control entre los distintos poderes del Estado.","Eliminar el Poder Judicial.","Fusionar al Poder Legislativo con el Poder Ejecutivo."],
     r:1, j:"La separación de poderes busca evitar que el poder se concentre en un solo órgano, permitiendo que cada poder controle y equilibre a los demás."},
    {p:"¿Cuál es la función principal de la Contraloría General de la República?",
     o:["Emitir la moneda nacional.","Controlar y fiscalizar el uso de los recursos y bienes del Estado.","Seleccionar a los jueces y fiscales.","Defender los derechos fundamentales de la persona."],
     r:1, j:"La Contraloría General de la República es el órgano encargado de controlar y fiscalizar la correcta administración de los recursos y bienes públicos."},
    {p:"¿Cuál es la principal función del Banco Central de Reserva del Perú (BCR)?",
     o:["Administrar justicia.","Preservar la estabilidad monetaria del país.","Aprobar las leyes del Congreso.","Investigar delitos."],
     r:1, j:"El Banco Central de Reserva tiene como finalidad principal preservar la estabilidad monetaria, controlando la inflación y regulando la emisión de moneda."},
    {p:"¿Cuál es la función principal de la Junta Nacional de Justicia (JNJ)?",
     o:["Fiscalizar los recursos públicos.","Seleccionar, nombrar, ratificar y, de ser el caso, sancionar a jueces y fiscales.","Emitir la moneda nacional.","Representar a la sociedad en los procesos judiciales."],
     r:1, j:"La Junta Nacional de Justicia se encarga de seleccionar, nombrar, evaluar, ratificar y sancionar a los jueces y fiscales del país."},
    {p:"¿Cuál es la función principal del Ministerio Público en el Perú?",
     o:["Legislar sobre asuntos económicos.","Defender la legalidad y dirigir la investigación del delito desde su inicio.","Emitir moneda.","Elegir a los jueces del Poder Judicial."],
     r:1, j:"El Ministerio Público, a través del fiscal de la Nación, defiende la legalidad y dirige la investigación del delito, representando a la sociedad en los procesos judiciales."},
    {p:"¿Cuál es la función principal de la Defensoría del Pueblo?",
     o:["Administrar justicia penal.","Defender los derechos constitucionales y fundamentales de la persona y la comunidad.","Controlar la política monetaria.","Sancionar a los jueces."],
     r:1, j:"La Defensoría del Pueblo protege los derechos constitucionales y fundamentales de las personas y supervisa el cumplimiento de los deberes de la administración estatal."},
    {p:"¿Cuál es la función principal del Tribunal Constitucional?",
     o:["Emitir la moneda nacional.","Ser el máximo intérprete de la Constitución y controlar la constitucionalidad de las leyes.","Fiscalizar el gasto público.","Investigar delitos penales."],
     r:1, j:"El Tribunal Constitucional es el órgano encargado de velar por el respeto de la Constitución, actuando como su máximo intérprete y controlando la constitucionalidad de las leyes."}
  ];

  const letras = ["A","B","C","D"];
  let indice = 0;
  let aciertos = 0;
  let respuestas = []; // {elegida, correcta}
  let bloqueado = false;

  const $inicio = document.getElementById('inicio');
  const $juego = document.getElementById('juego');
  const $resultado = document.getElementById('resultado');

  const $avanceNum = document.getElementById('avanceNum');
  const $avanceBarra = document.getElementById('avanceBarra');
  const $preguntaNum = document.getElementById('preguntaNum');
  const $preguntaTexto = document.getElementById('preguntaTexto');
  const $opciones = document.getElementById('opciones');
  const $justificacion = document.getElementById('justificacion');
  const $btnSiguiente = document.getElementById('btnSiguiente');

  document.getElementById('btnEmpezar').addEventListener('click', () => {
    $inicio.classList.add('oculto');
    $juego.classList.remove('oculto');
    renderPregunta();
  });

  document.getElementById('btnRepetir').addEventListener('click', reiniciar);

  function reiniciar(){
    indice = 0; aciertos = 0; respuestas = []; bloqueado = false;
    $resultado.classList.add('oculto');
    $juego.classList.remove('oculto');
    renderPregunta();
  }

  function renderPregunta(){
    bloqueado = false;
    const q = preguntas[indice];

    $avanceNum.textContent = (indice+1) + ' / ' + preguntas.length;
    $avanceBarra.style.width = (((indice) / preguntas.length) * 100) + '%';
    $preguntaNum.textContent = 'Pregunta ' + (indice+1);
    $preguntaTexto.textContent = q.p;

    $opciones.innerHTML = '';
    q.o.forEach((texto, i) => {
      const btn = document.createElement('button');
      btn.className = 'opcion';
      btn.innerHTML = '<span class="letra">' + letras[i] + '</span><span>' + texto + '</span>';
      btn.addEventListener('click', () => elegir(i, btn));
      $opciones.appendChild(btn);
    });

    $justificacion.classList.remove('visible');
    $justificacion.textContent = '';
    $btnSiguiente.disabled = true;
    $btnSiguiente.textContent = (indice === preguntas.length - 1) ? 'Ver resultado' : 'Siguiente';
  }

  function elegir(i, btnEl){
    if (bloqueado) return;
    bloqueado = true;
    const q = preguntas[indice];
    const esCorrecta = (i === q.r);
    if (esCorrecta) aciertos++;
    respuestas.push({elegida: i, correcta: esCorrecta});

    const botones = $opciones.querySelectorAll('.opcion');
    botones.forEach((b, idx) => {
      b.disabled = true;
      if (idx === q.r) b.classList.add('correcta');
      else if (idx === i) b.classList.add('incorrecta');
    });

    $justificacion.innerHTML = '<b>' + (esCorrecta ? 'Correcto. ' : 'Incorrecto. ') + '</b>' + q.j;
    $justificacion.classList.add('visible');
    $btnSiguiente.disabled = false;
  }

  $btnSiguiente.addEventListener('click', () => {
    if (indice < preguntas.length - 1){
      indice++;
      renderPregunta();
    } else {
      mostrarResultado();
    }
  });

  function mostrarResultado(){
    $avanceBarra.style.width = '100%';
    $juego.classList.add('oculto');
    $resultado.classList.remove('oculto');

    document.getElementById('notaNum').textContent = aciertos + '/' + preguntas.length;

    const pct = aciertos / preguntas.length;
    let titulo, veredicto;
    if (pct === 1){ titulo = 'Excelente'; veredicto = 'Dominas la Historia Universal y la estructura del Estado peruano.'; }
    else if (pct >= 0.8){ titulo = 'Muy bien'; veredicto = 'Un manejo sólido del tema, con algún detalle por afinar.'; }
    else if (pct >= 0.6){ titulo = 'Aprobado'; veredicto = 'Base correcta; conviene repasar las preguntas falladas.'; }
    else { titulo = 'A repasar'; veredicto = 'Vale la pena volver sobre los conceptos antes de repetir el examen.'; }

    document.getElementById('notaTitulo').textContent = titulo;
    document.getElementById('notaVeredicto').textContent = veredicto;

    const $repaso = document.getElementById('repaso');
    $repaso.innerHTML = '';
    preguntas.forEach((q, idx) => {
      const r = respuestas[idx];
      const item = document.createElement('div');
      item.className = 'repaso-item';
      const marcaClase = r.correcta ? 'ok' : 'no';
      const marcaTexto = r.correcta ? '✓' : '✕';
      item.innerHTML =
        '<span class="repaso-marca ' + marcaClase + '">' + marcaTexto + '</span>' +
        '<span class="repaso-texto"><b>' + (idx+1) + '. ' + q.p + '</b>Respuesta correcta: ' + letras[q.r] + ') ' + q.o[q.r] + '</span>';
      $repaso.appendChild(item);
    });
  }
})();
