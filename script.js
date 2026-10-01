(function(){
  const preguntas = [
    {p:"¿Qué nombre recibe el territorio controlado por el Imperio inca en su máxima expansión?",
     o:["Tahuantinsuyo.","Virreinato del Perú.","Imperio Wari.","Collasuyo únicamente."],
     r:0, j:"El Tahuantinsuyo fue el nombre que recibió el territorio controlado por el Imperio inca en su máxima extensión."},
    {p:"¿Cuántas regiones o 'suyos' conformaban el Tahuantinsuyo?",
     o:["Dos.","Tres.","Cuatro.","Seis."],
     r:2, j:"El Tahuantinsuyo estaba dividido en cuatro suyos: Chinchaysuyo, Antisuyo, Collasuyo y Contisuyo."},
    {p:"¿Cuál fue la capital del Imperio incaico?",
     o:["Chan Chan.","Cusco.","Machu Picchu.","Cajamarca."],
     r:1, j:"El Cusco fue la capital política, administrativa y religiosa del Imperio incaico."},
    {p:"¿Qué inca es considerado el impulsor de la gran expansión territorial del Tahuantinsuyo, tras vencer a los chancas?",
     o:["Huayna Cápac.","Pachacútec.","Atahualpa.","Manco Cápac."],
     r:1, j:"Pachacútec, tras derrotar a los chancas, inició la gran expansión territorial que dio origen al Tahuantinsuyo como gran imperio."},
    {p:"¿Qué sistema de caminos permitió la comunicación y el control del extenso territorio incaico?",
     o:["El Qhapaq Ñan.","El camino del Inca único.","La red de canales de riego.","El sistema de correos español."],
     r:0, j:"El Qhapaq Ñan fue la extensa red de caminos que conectó e integró las distintas regiones del Tahuantinsuyo."},
    {p:"¿Qué formas de organización del trabajo se basaban en la reciprocidad y el trabajo colectivo en el imperio incaico?",
     o:["La encomienda.","La mita colonial.","El ayni y la minka.","El tributo colonial."],
     r:2, j:"El ayni (ayuda mutua entre familias) y la minka (trabajo colectivo para la comunidad) fueron formas de reciprocidad propias del mundo andino."},
    {p:"¿Qué función cumplían los quipus en el Imperio incaico?",
     o:["Servían como armas de guerra.","Eran un sistema de registro mediante cuerdas y nudos, usado para la contabilidad y otros fines administrativos.","Eran templos religiosos.","Servían para la construcción de caminos."],
     r:1, j:"Los quipus eran un sistema de registro basado en cuerdas y nudos, utilizado principalmente para llevar la contabilidad y la administración del imperio."},
    {p:"¿Qué conflicto se desató entre Huáscar y Atahualpa antes de la llegada de los españoles?",
     o:["Una guerra civil por la sucesión al trono incaico.","Una guerra contra los mapuches.","Una disputa comercial con los chinchas.","Una rebelión campesina."],
     r:0, j:"La guerra civil entre Huáscar y Atahualpa, hijos de Huayna Cápac, por el control del imperio, debilitó al Tahuantinsuyo justo antes de la llegada de los españoles."},
    {p:"¿Qué dios ocupaba un lugar central en la religión oficial del Imperio incaico, asociado a la figura del Inca?",
     o:["Viracocha.","Inti, el dios Sol.","Pachamama exclusivamente.","Huitzilopochtli."],
     r:1, j:"Inti, el dios Sol, era una de las principales divinidades del panteón incaico, y el Inca era considerado su descendiente directo."},
    {p:"¿Qué característica tuvo la expansión del Tahuantinsuyo sobre otros pueblos andinos?",
     o:["Se realizó únicamente mediante la fuerza militar.","Combinó la conquista militar con alianzas y pactos políticos con los curacas locales.","No tuvo ningún tipo de organización administrativa.","Se limitó únicamente a la costa."],
     r:1, j:"La expansión incaica combinó el uso de la fuerza militar con alianzas y pactos políticos, incorporando a los curacas locales a la administración del imperio."},
    {p:"¿En qué año se produjo el encuentro entre Francisco Pizarro y el inca Atahualpa en Cajamarca?",
     o:["1492.","1532.","1572.","1600."],
     r:1, j:"El encuentro entre Francisco Pizarro y Atahualpa en Cajamarca ocurrió en el año 1532."},
    {p:"¿Qué suceso marcó el inicio de la conquista española del Tahuantinsuyo?",
     o:["La fundación de Lima.","La captura de Atahualpa en Cajamarca.","La muerte de Huayna Cápac.","La rebelión de Manco Inca."],
     r:1, j:"La captura de Atahualpa por Francisco Pizarro en Cajamarca, en 1532, marcó el inicio del proceso de conquista española del Tahuantinsuyo."},
    {p:"¿Qué ocurrió con Atahualpa después de ser capturado por los españoles, pese a pagar un rescate en oro y plata?",
     o:["Fue liberado y reconocido como gobernante.","Fue ejecutado por los españoles.","Huyó hacia el Collasuyo.","Fue enviado a España."],
     r:1, j:"Pese a haber entregado un gran rescate en oro y plata, Atahualpa fue finalmente ejecutado por los españoles."},
    {p:"¿Quién fue colocado como inca títere por los españoles tras la captura de Atahualpa, antes de rebelarse posteriormente contra ellos?",
     o:["Huáscar.","Manco Inca.","Túpac Amaru I.","Sayri Túpac."],
     r:1, j:"Manco Inca fue inicialmente colocado por los españoles como inca títere, antes de encabezar una rebelión en su contra."},
    {p:"¿Qué hecho protagonizó Manco Inca en su resistencia contra los españoles?",
     o:["Colaboró totalmente con los conquistadores.","Encabezó un levantamiento y el célebre sitio de Cusco contra los españoles.","Se convirtió al cristianismo y abandonó el trono.","Fundó la ciudad de Lima."],
     r:1, j:"Manco Inca, tras rebelarse contra los españoles, encabezó un importante levantamiento que incluyó el célebre sitio de la ciudad del Cusco."},
    {p:"¿A dónde se replegó Manco Inca para continuar la resistencia frente a los españoles tras el fracaso del sitio de Cusco?",
     o:["Vilcabamba.","Potosí.","Quito.","Lima."],
     r:0, j:"Tras el fracaso del sitio de Cusco, Manco Inca se replegó a Vilcabamba, donde estableció un Estado neoinca que resistió por varias décadas."},
    {p:"¿Qué fue el Taki Onqoy?",
     o:["Una técnica agrícola incaica.","Un movimiento religioso y de resistencia indígena que proclamaba el retorno de las huacas para expulsar a los españoles.","Un sistema de tributación colonial.","Una danza exclusivamente ceremonial sin connotación política."],
     r:1, j:"El Taki Onqoy fue un movimiento mesiánico de resistencia indígena del siglo XVI que anunciaba el retorno de las huacas (divinidades andinas) para expulsar a los españoles y restaurar el orden andino."},
    {p:"¿En qué región del Perú se desarrolló principalmente el movimiento del Taki Onqoy?",
     o:["La costa norte.","La región de Huamanga (actual Ayacucho) y zonas aledañas.","La selva amazónica.","El Altiplano boliviano exclusivamente."],
     r:1, j:"El Taki Onqoy tuvo su principal foco de desarrollo en la región de Huamanga, actual Ayacucho, y zonas cercanas de la sierra central y sur."},
    {p:"¿Qué buscaba fundamentalmente el movimiento del Taki Onqoy frente a la imposición cultural y religiosa española?",
     o:["La adopción total del cristianismo.","El rechazo a la cultura española y el retorno a las creencias y dioses andinos ancestrales.","La alianza permanente con los conquistadores.","La fundación de nuevas ciudades españolas."],
     r:1, j:"El Taki Onqoy proponía el rechazo a la religión y la cultura impuestas por los españoles, y el retorno a las creencias y divinidades andinas ancestrales."},
    {p:"¿Cuál de las siguientes afirmaciones describe mejor la resistencia indígena frente a la conquista española en el Perú?",
     o:["Se limitó únicamente a la resistencia armada de Manco Inca en Vilcabamba.","Incluyó tanto la resistencia armada, como la de Manco Inca, como movimientos de resistencia cultural y religiosa, como el Taki Onqoy.","No existió ningún tipo de resistencia indígena.","Fue organizada únicamente por los españoles."],
     r:1, j:"La resistencia indígena frente a la conquista tuvo distintas expresiones: desde la resistencia armada de Manco Inca hasta movimientos de resistencia cultural y religiosa como el Taki Onqoy."}
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
    if (pct === 1){ titulo = 'Excelente'; veredicto = 'Dominas la expansión del Tahuantinsuyo y la resistencia frente a la conquista.'; }
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
