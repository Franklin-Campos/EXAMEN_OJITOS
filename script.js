(function(){
  const preguntas = [
    {p:"¿A qué autor se le atribuye la composición de la Odisea y la Ilíada?",
     o:["Sófocles.","Homero.","Virgilio.","Hesíodo."],
     r:1, j:"La Odisea y la Ilíada son atribuidas a Homero, el poeta considerado padre de la épica griega."},
    {p:"¿Cuál es el tema central de la Odisea?",
     o:["La guerra de Troya.","El regreso de Odiseo (Ulises) a Ítaca tras la guerra de Troya.","El nacimiento de los dioses.","La fundación de Roma."],
     r:1, j:"La Odisea narra el largo y azaroso viaje de regreso de Odiseo a su patria, Ítaca, tras la guerra de Troya."},
    {p:"¿En qué género literario se inscribe la Odisea de Homero?",
     o:["Épica.","Lírica.","Dramática.","Ensayo."],
     r:0, j:"La Odisea es un poema épico: narra en verso las hazañas y aventuras de un héroe, Odiseo."},
    {p:"¿Cuál es la obra cumbre de Dante Alighieri, considerada una obra fundamental de la literatura medieval?",
     o:["El Decamerón.","La Divina Comedia.","El Cantar del Mio Cid.","Los cuentos de Canterbury."],
     r:1, j:"La Divina Comedia, de Dante Alighieri, es una de las obras cumbre de la literatura medieval y de la literatura universal."},
    {p:"¿En cuántas partes se divide la Divina Comedia de Dante?",
     o:["Dos: Cielo e Infierno.","Tres: Infierno, Purgatorio y Paraíso.","Cuatro partes.","Una sola parte."],
     r:1, j:"La Divina Comedia se estructura en tres partes: Infierno, Purgatorio y Paraíso."},
    {p:"¿Quién sirve de guía a Dante a través del Infierno y el Purgatorio en la Divina Comedia?",
     o:["Beatriz.","Virgilio.","San Pedro.","Ulises."],
     r:1, j:"El poeta romano Virgilio guía a Dante a través del Infierno y el Purgatorio, mientras que Beatriz lo guía en el Paraíso."},
    {p:"¿A qué movimiento literario pertenece William Shakespeare?",
     o:["Clasicismo griego.","Renacimiento.","Romanticismo.","Realismo."],
     r:1, j:"William Shakespeare es uno de los grandes representantes de la literatura del Renacimiento inglés."},
    {p:"¿Cuál es el tema central de Romeo y Julieta?",
     o:["La rivalidad entre dos ciudades griegas.","El amor trágico entre dos jóvenes de familias enemistadas.","El descenso al infierno de un poeta.","La vida de un comerciante parisino."],
     r:1, j:"Romeo y Julieta narra el amor trágico entre dos jóvenes pertenecientes a familias rivales, los Montesco y los Capuleto."},
    {p:"¿A qué género literario pertenece Romeo y Julieta?",
     o:["Épico.","Lírico.","Dramático (tragedia).","Narrativo."],
     r:2, j:"Romeo y Julieta es una obra teatral, específicamente una tragedia, propia del género dramático."},
    {p:"¿En qué ciudad italiana se desarrolla la historia de Romeo y Julieta?",
     o:["Roma.","Verona.","Florencia.","Venecia."],
     r:1, j:"La historia de Romeo y Julieta transcurre en la ciudad italiana de Verona."},
    {p:"¿A qué movimiento literario pertenece Víctor Hugo?",
     o:["Clasicismo.","Romanticismo.","Realismo.","Existencialismo."],
     r:1, j:"Víctor Hugo es uno de los máximos representantes del Romanticismo francés."},
    {p:"¿Cuál es el escenario principal de la novela Nuestra Señora de París, de Víctor Hugo?",
     o:["El palacio de Versalles.","La catedral de Notre Dame en París.","El Coliseo de Roma.","El castillo de Windsor."],
     r:1, j:"La catedral de Notre Dame es el escenario central de la novela, alrededor del cual se desarrolla la trama."},
    {p:"¿Quién es el jorobado campanero de la catedral, personaje central de Nuestra Señora de París?",
     o:["Frollo.","Quasimodo.","Esmeralda.","Febo."],
     r:1, j:"Quasimodo es el campanero jorobado de la catedral de Notre Dame, uno de los personajes centrales de la novela."},
    {p:"¿A qué movimiento literario pertenece Honorato de Balzac?",
     o:["Romanticismo.","Realismo.","Renacimiento.","Clasicismo."],
     r:1, j:"Honorato de Balzac es considerado uno de los grandes representantes del Realismo literario francés."},
    {p:"¿Qué caracteriza principalmente al Realismo como movimiento literario?",
     o:["La idealización de sentimientos extremos y lo fantástico.","La representación objetiva y detallada de la sociedad y las costumbres de la época.","La narración exclusiva de hazañas heroicas en verso.","El uso exclusivo de temas religiosos medievales."],
     r:1, j:"El Realismo busca representar de forma objetiva y minuciosa la sociedad, las costumbres y los conflictos de la época en que se escribe."},
    {p:"¿Cuál es el tema central de Papá Goriot, de Balzac?",
     o:["El sacrificio de un padre por el amor de sus hijas, en el contexto de la sociedad parisina.","El viaje de un héroe griego.","El amor imposible entre dos jóvenes de Verona.","El juicio de un condenado en el infierno."],
     r:0, j:"Papá Goriot narra el sacrificio de un padre que se arruina por amor a sus hijas, retratando con crudeza la sociedad parisina de la época."},
    {p:"¿Cuál es el tema central de La metamorfosis, de Franz Kafka?",
     o:["La transformación de un vendedor, Gregorio Samsa, en un insecto.","El regreso de un héroe a su hogar.","El amor trágico entre dos jóvenes.","La vida de un noble medieval."],
     r:0, j:"La metamorfosis narra la inexplicable transformación del vendedor Gregorio Samsa en un enorme insecto, y las consecuencias de este hecho en su vida y su familia."},
    {p:"¿Con qué corriente filosófica y literaria se asocia principalmente Jean-Paul Sartre y su novela La náusea?",
     o:["El romanticismo.","El existencialismo.","El clasicismo.","El realismo mágico."],
     r:1, j:"Jean-Paul Sartre es uno de los principales representantes del existencialismo, corriente que explora la angustia y la libertad humana, presente en La náusea."},
    {p:"¿Qué reconocimiento internacional se otorga anualmente a autores destacados por el conjunto de su obra literaria?",
     o:["El Premio Pulitzer exclusivamente.","El Premio Nobel de Literatura.","El Premio Cervantes exclusivamente.","El Óscar a mejor guion."],
     r:1, j:"El Premio Nobel de Literatura es un reconocimiento internacional que se otorga cada año a un autor por el conjunto de su obra literaria."},
    {p:"¿Cuál de los siguientes pares de autores perteneció a la literatura del siglo XX?",
     o:["Homero y Dante.","Shakespeare y Víctor Hugo.","Franz Kafka y Jean-Paul Sartre.","Balzac y Homero."],
     r:2, j:"Franz Kafka y Jean-Paul Sartre son dos de los autores más representativos de la literatura del siglo XX."}
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
    if (pct === 1){ titulo = 'Excelente'; veredicto = 'Dominas los grandes movimientos y autores de la literatura universal.'; }
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
