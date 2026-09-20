(function(){
  const preguntas = [
    {p:"¿En qué periodo de la historia peruana se ubica el desarrollo del Imperio Wari?",
     o:["Horizonte Temprano.","Intermedio Temprano.","Horizonte Medio.","Horizonte Tardío."],
     r:2, j:"El Imperio Wari se desarrolló durante el Horizonte Medio, expandiendo su influencia sobre gran parte de los Andes centrales."},
    {p:"¿Cuál fue el principal centro urbano y administrativo del Imperio Wari?",
     o:["Chan Chan.","La ciudad de Wari, cerca de la actual Ayacucho.","Cusco.","Cajamarca."],
     r:1, j:"La ciudad de Wari, ubicada cerca de la actual Ayacucho, fue el centro administrativo y religioso desde donde se organizó el imperio."},
    {p:"¿Cuál fue uno de los principales aportes del Imperio Wari a la organización del territorio andino?",
     o:["La escritura jeroglífica.","El sistema de caminos y centros administrativos que integraron distintas regiones.","El uso exclusivo de la navegación marítima.","La invención de la cerámica."],
     r:1, j:"Los wari desarrollaron una red de caminos y centros administrativos que sirvió de antecedente al posterior sistema vial inca."},
    {p:"¿Qué característica definió la expansión del Imperio Wari sobre los Andes centrales?",
     o:["Fue un imperio sin ningún tipo de control territorial.","Impuso su influencia mediante centros administrativos y militares en distintas regiones.","Se limitó únicamente a la costa norte.","No tuvo contacto con otras culturas."],
     r:1, j:"El Imperio Wari se expandió estableciendo centros administrativos y militares que le permitieron controlar e integrar diversas regiones andinas."},
    {p:"¿Con qué otra cultura contemporánea comparte el Imperio Wari semejanzas estilísticas, especialmente en textiles y cerámica?",
     o:["Chavín.","Tiahuanaco (Tiwanaku).","Chimú.","Inca."],
     r:1, j:"Wari y Tiahuanaco compartieron elementos religiosos e iconográficos similares, como la figura del Dios de los Báculos, propios del Horizonte Medio."},
    {p:"¿Cuál fue la capital del reino Chimú?",
     o:["Chan Chan.","Cusco.","Pachacamac.","Cajamarquilla."],
     r:0, j:"Chan Chan, ubicada en el valle de Moche, fue la capital del reino Chimú y una de las ciudades de barro más grandes de la América prehispánica."},
    {p:"¿A qué actividad económica se dedicó principalmente el señorío de Chincha, en la costa sur?",
     o:["La minería.","El comercio marítimo y terrestre.","La ganadería de altura.","La pesca exclusivamente de subsistencia."],
     r:1, j:"Los chinchas destacaron por su intensa actividad comercial, tanto por rutas terrestres hacia la sierra como por navegación a lo largo de la costa."},
    {p:"¿Qué grupo étnico se enfrentó a los incas en una batalla decisiva cerca del Cusco, según la tradición histórica?",
     o:["Los chimú.","Los chinchas.","Los chancas.","Los huancas."],
     r:2, j:"Los chancas protagonizaron el enfrentamiento con los incas que, según la tradición, consolidó el ascenso de Pachacútec al poder."},
    {p:"¿Qué característica tecnológica destacó en la cultura Chimú?",
     o:["La construcción de pirámides de piedra.","El trabajo especializado en metalurgia y la arquitectura de barro (adobe).","La escritura alfabética.","La domesticación exclusiva de camélidos."],
     r:1, j:"Los chimú sobresalieron en la orfebrería y en la construcción de ciudades de barro con murallas y palacios decorados con relieves."},
    {p:"¿Cuál de las siguientes culturas fue finalmente incorporada al Imperio incaico durante el proceso de expansión del Horizonte Tardío?",
     o:["Solo la cultura Chincha.","Solo la cultura Chanca.","El reino Chimú, el señorío de Chincha y los chancas.","Ninguna de ellas."],
     r:2, j:"Tanto el reino Chimú como el señorío de Chincha y los chancas fueron progresivamente incorporados al Tahuantinsuyo mediante conquista o alianzas."},
    {p:"¿Qué género literario se caracteriza por narrar hazañas de héroes y hechos memorables de un pueblo, generalmente en verso?",
     o:["Lírico.","Épico.","Dramático.","Narrativo."],
     r:1, j:"El género épico narra en verso las hazañas de héroes y acontecimientos relevantes para un pueblo, como en las epopeyas."},
    {p:"¿Qué género literario expresa principalmente los sentimientos y emociones del autor?",
     o:["Épico.","Lírico.","Dramático.","Narrativo."],
     r:1, j:"El género lírico se centra en la expresión de emociones y sentimientos personales, generalmente mediante el poema."},
    {p:"¿Qué género literario está destinado a ser representado ante un público, mediante diálogos y acción escénica?",
     o:["Lírico.","Épico.","Dramático.","Narrativo."],
     r:2, j:"El género dramático está compuesto por obras concebidas para su representación teatral, estructuradas principalmente en diálogos."},
    {p:"¿Cuál de los siguientes géneros literarios incluye obras como la novela y el cuento?",
     o:["Lírico.","Épico.","Dramático.","Narrativo."],
     r:3, j:"El género narrativo agrupa obras en prosa que cuentan una historia a través de un narrador, como la novela y el cuento."},
    {p:"¿Cuál de las siguientes obras corresponde al género épico?",
     o:["Un poema de amor.","Una obra de teatro con diálogos.","Un poema extenso que narra las hazañas de un héroe, como una epopeya.","Un cuento breve de ficción."],
     r:2, j:"Una epopeya es una obra narrativa en verso propia del género épico, centrada en las hazañas de un héroe."},
    {p:"¿Qué figura literaria consiste en atribuir a algo una cualidad de otra cosa sin usar nexos comparativos, como en 'sus ojos son dos luceros'?",
     o:["Símil.","Metáfora.","Hipérbole.","Antítesis."],
     r:1, j:"La metáfora identifica dos elementos entre sí de forma directa, sin usar un nexo comparativo como 'como' o 'cual'."},
    {p:"¿Qué figura literaria establece una comparación explícita entre dos elementos utilizando un nexo comparativo como 'como' o 'cual'?",
     o:["Metáfora.","Símil.","Epíteto.","Elipsis."],
     r:1, j:"El símil o comparación relaciona dos elementos mediante un nexo comparativo explícito, a diferencia de la metáfora."},
    {p:"¿Qué figura literaria consiste en exagerar intencionalmente una idea o cualidad, como en 'te lo he dicho un millón de veces'?",
     o:["Hipérbaton.","Hipérbole.","Anáfora.","Sinestesia."],
     r:1, j:"La hipérbole es una exageración deliberada de una idea, cualidad o acción con fines expresivos."},
    {p:"¿Qué figura literaria consiste en repetir una palabra o frase al inicio de varios versos o frases consecutivas?",
     o:["Anáfora.","Elipsis.","Antítesis.","Epíteto."],
     r:0, j:"La anáfora consiste en la repetición de una o varias palabras al comienzo de versos o frases sucesivas, con efecto rítmico o enfático."},
    {p:"¿Qué figura literaria mezcla sensaciones de distintos sentidos en una misma expresión, como en 'silencio verde' o 'dulce mirada'?",
     o:["Antítesis.","Animismo.","Sinestesia.","Hipérbaton."],
     r:2, j:"La sinestesia combina impresiones de diferentes sentidos (vista, oído, tacto, gusto, olfato) en una sola expresión."}
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
    if (pct === 1){ titulo = 'Excelente'; veredicto = 'Dominas el Horizonte Medio y Tardío, y los géneros y figuras literarias.'; }
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
