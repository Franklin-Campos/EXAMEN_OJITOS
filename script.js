(function(){
  const preguntas = [
    {p:"¿Qué es un estímulo?",
     o:["Un cambio en el ambiente que provoca una respuesta en el organismo.","Un órgano que produce hormonas.","Un tipo de célula reproductora.","Un proceso digestivo."],
     r:0, j:"Un estímulo es cualquier cambio del medio interno o externo capaz de provocar una respuesta en un ser vivo."},
    {p:"¿Cómo se llaman los movimientos de las plantas orientados en dirección al estímulo, como el crecimiento del tallo hacia la luz?",
     o:["Nastias.","Tropismos.","Reflejos.","Sinapsis."],
     r:1, j:"El fototropismo positivo es un ejemplo de tropismo: un movimiento de crecimiento orientado hacia la fuente del estímulo, en este caso la luz."},
    {p:"¿Cuál es la función principal de los pelos urticantes presentes en plantas como la ortiga?",
     o:["Absorber agua del suelo.","Defender a la planta liberando sustancias irritantes al contacto.","Realizar la fotosíntesis.","Facilitar la polinización."],
     r:1, j:"Los pelos urticantes son una defensa mecánica y química: al romperse liberan sustancias que irritan la piel de los animales que las tocan."},
    {p:"¿Qué nombre reciben los receptores sensoriales encargados de captar estímulos provenientes del exterior del cuerpo, como la luz o el sonido?",
     o:["Interoceptores.","Propioceptores.","Exteroceptores.","Efectores."],
     r:2, j:"Los exteroceptores captan estímulos del medio externo, como la luz, el sonido, el tacto o la temperatura ambiental."},
    {p:"¿Cómo se denomina la respuesta rápida e involuntaria del organismo ante un estímulo, como retirar la mano al tocar algo caliente?",
     o:["Acto reflejo.","Tropismo.","Mitosis.","Sinapsis voluntaria."],
     r:0, j:"El acto reflejo es una respuesta automática e involuntaria, mediada por el arco reflejo, que ocurre sin intervención consciente del cerebro."},
    {p:"¿Cuál es la función principal de la mitosis?",
     o:["Producir gametos con la mitad de cromosomas.","Generar dos células hijas genéticamente idénticas a la célula madre.","Producir variabilidad genética mediante recombinación.","Formar los pelos urticantes."],
     r:1, j:"La mitosis es un proceso de división celular que produce dos células hijas con la misma carga genética que la célula madre, permitiendo el crecimiento y la reparación de tejidos."},
    {p:"¿Cuántas células hijas se producen al final de la meiosis y con qué cantidad de cromosomas respecto a la célula original?",
     o:["Dos células con el doble de cromosomas.","Cuatro células con la mitad de cromosomas.","Una célula idéntica.","Dos células con la mitad de cromosomas."],
     r:1, j:"La meiosis genera cuatro células hijas haploides, con la mitad de la carga cromosómica de la célula original, lo que permite la formación de gametos."},
    {p:"¿Qué proceso reproductivo es responsable de la formación de gametos (óvulos y espermatozoides)?",
     o:["Mitosis.","Meiosis.","Reproducción vegetativa.","Fototropismo."],
     r:1, j:"La meiosis es el proceso de división celular que reduce a la mitad el número de cromosomas para formar las células sexuales o gametos."},
    {p:"¿Qué caracteriza a la reproducción vegetativa en las plantas?",
     o:["Requiere la unión de gametos masculino y femenino.","Se produce a partir de una parte de la planta (tallo, raíz u hoja) sin intervención de gametos.","Solo ocurre mediante semillas.","Es exclusiva de los animales."],
     r:1, j:"La reproducción vegetativa es una forma de reproducción asexual en la que una nueva planta se origina a partir de un fragmento de la planta original, sin fecundación."},
    {p:"¿Cuál de las siguientes situaciones es un ejemplo de reproducción vegetativa?",
     o:["La fecundación de un óvulo por un espermatozoide.","La formación de un nuevo tallo a partir de un esqueje.","La meiosis en células germinales.","La formación de gametos."],
     r:1, j:"El esqueje es un fragmento de tallo que, al enraizar, origina una nueva planta genéticamente idéntica a la original: un ejemplo típico de reproducción vegetativa."},
    {p:"¿Cuál es el órgano principal encargado de filtrar la sangre y formar la orina?",
     o:["Hígado.","Riñón.","Vejiga.","Uréter."],
     r:1, j:"Los riñones filtran la sangre y eliminan los desechos y el exceso de agua en forma de orina."},
    {p:"¿Cuál es la unidad funcional básica del riñón encargada de la filtración de la sangre?",
     o:["Nefrona.","Alvéolo.","Neurona.","Glóbulo rojo."],
     r:0, j:"La nefrona es la unidad estructural y funcional del riñón, responsable de filtrar la sangre y formar la orina."},
    {p:"¿Cuál es la función del uréter en el sistema urinario?",
     o:["Almacenar la orina.","Conducir la orina desde el riñón hasta la vejiga.","Filtrar la sangre.","Producir hormonas."],
     r:1, j:"El uréter es el conducto que transporta la orina desde cada riñón hasta la vejiga urinaria."},
    {p:"¿Qué órgano almacena temporalmente la orina antes de ser expulsada del cuerpo?",
     o:["Riñón.","Uretra.","Vejiga urinaria.","Uréter."],
     r:2, j:"La vejiga urinaria es el órgano muscular que almacena la orina hasta el momento de la micción."},
    {p:"¿Por dónde se expulsa la orina al exterior del cuerpo?",
     o:["Uréter.","Uretra.","Nefrona.","Vejiga."],
     r:1, j:"La uretra es el conducto final por el cual la orina sale del cuerpo desde la vejiga."},
    {p:"¿Qué estructuras conforman el sistema nervioso central?",
     o:["Nervios y ganglios.","Encéfalo y médula espinal.","Sistema simpático y parasimpático.","Receptores sensoriales."],
     r:1, j:"El sistema nervioso central está formado por el encéfalo y la médula espinal, encargados de procesar e integrar la información."},
    {p:"¿Qué conforma el sistema nervioso periférico?",
     o:["El encéfalo únicamente.","La médula espinal únicamente.","Los nervios que conectan el sistema nervioso central con el resto del cuerpo.","Solo el cerebelo."],
     r:2, j:"El sistema nervioso periférico está formado por los nervios y ganglios que conectan el sistema nervioso central con los órganos y el resto del cuerpo."},
    {p:"¿Cuál es la función del sistema nervioso autónomo?",
     o:["Controlar los movimientos voluntarios de los músculos esqueléticos.","Regular funciones involuntarias como la frecuencia cardíaca y la digestión.","Procesar la información visual.","Almacenar la memoria a largo plazo."],
     r:1, j:"El sistema nervioso autónomo regula funciones involuntarias del organismo, como la frecuencia cardíaca, la digestión y la respiración."},
    {p:"¿Cuáles son las dos divisiones principales del sistema nervioso autónomo?",
     o:["Central y periférico.","Simpático y parasimpático.","Sensitivo y motor.","Encéfalo y médula."],
     r:1, j:"El sistema nervioso autónomo se divide en simpático, que activa respuestas de alerta, y parasimpático, que favorece funciones de reposo y digestión."},
    {p:"¿Cuál es la función principal de la neurona dentro del sistema nervioso?",
     o:["Producir orina.","Transmitir impulsos nerviosos.","Filtrar la sangre.","Almacenar bilis."],
     r:1, j:"La neurona es la célula especializada en generar y transmitir impulsos nerviosos entre distintas partes del cuerpo."}
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
    if (pct === 1){ titulo = 'Excelente'; veredicto = 'Dominas la relación y reproducción en biología, y el sistema urinario y nervioso.'; }
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
