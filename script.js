(function(){
  const preguntas = [
    {p:"¿Qué tipo de división celular permite el crecimiento y la reparación de tejidos en los seres vivos?",
     o:["Meiosis.","Mitosis.","Fecundación.","Conjugación."],
     r:1, j:"La mitosis es el proceso de división celular que permite el crecimiento del organismo y la reparación de tejidos, generando células genéticamente idénticas."},
    {p:"¿Cuántas células hijas se producen al final de un proceso de mitosis y qué carga cromosómica poseen respecto a la célula madre?",
     o:["Dos células con la mitad de los cromosomas.","Dos células genéticamente idénticas a la célula madre.","Cuatro células con la mitad de los cromosomas.","Una célula con el doble de cromosomas."],
     r:1, j:"La mitosis produce dos células hijas con la misma carga genética que la célula madre."},
    {p:"¿En qué etapa del ciclo celular se duplica el material genético antes de la división celular?",
     o:["Profase.","Interfase (fase S).","Anafase.","Telofase."],
     r:1, j:"Durante la interfase, específicamente en la fase S, se produce la duplicación del ADN antes de que la célula entre en división."},
    {p:"¿Cuál es la función biológica principal de la meiosis?",
     o:["Reparar tejidos dañados.","Producir células somáticas idénticas.","Formar gametos con la mitad de la carga cromosómica, para la reproducción sexual.","Generar energía celular."],
     r:2, j:"La meiosis produce células sexuales (gametos) con la mitad de los cromosomas, lo cual es indispensable para la reproducción sexual."},
    {p:"¿Cuántas divisiones celulares sucesivas ocurren durante la meiosis?",
     o:["Una.","Dos.","Tres.","Cuatro."],
     r:1, j:"La meiosis consta de dos divisiones celulares sucesivas (meiosis I y meiosis II), que en conjunto producen cuatro células haploides."},
    {p:"¿Qué fenómeno ocurre durante la meiosis que incrementa la variabilidad genética de los gametos?",
     o:["La duplicación exacta del ADN.","El entrecruzamiento (recombinación genética) entre cromosomas homólogos.","La fusión de dos células.","La formación de la pared celular."],
     r:1, j:"El entrecruzamiento o recombinación genética entre cromosomas homólogos durante la meiosis incrementa la variabilidad genética de los gametos resultantes."},
    {p:"¿Qué diferencia fundamental existe entre la mitosis y la meiosis en cuanto al número de cromosomas de las células resultantes?",
     o:["En la mitosis se mantiene el número de cromosomas; en la meiosis se reduce a la mitad.","En ambas se reduce a la mitad.","En ambas se mantiene igual.","En la mitosis se reduce a la mitad y en la meiosis se mantiene igual."],
     r:0, j:"En la mitosis, las células hijas conservan el mismo número de cromosomas que la célula madre; en la meiosis, ese número se reduce a la mitad."},
    {p:"¿Qué es la reproducción vegetativa en las plantas?",
     o:["Una forma de reproducción sexual mediante la unión de gametos.","Una forma de reproducción asexual en la que una nueva planta se origina a partir de una parte de la planta madre (tallo, raíz u hoja).","Un proceso exclusivo de los animales.","Un tipo de meiosis vegetal."],
     r:1, j:"La reproducción vegetativa es asexual: una nueva planta surge a partir de un fragmento de la planta original, sin intervención de gametos."},
    {p:"¿Cuál de las siguientes es una técnica de propagación vegetativa utilizada en la agricultura para obtener nuevas plantas genéticamente idénticas a la planta original?",
     o:["La polinización cruzada.","El injerto o el esqueje.","La fecundación doble.","La meiosis espórica."],
     r:1, j:"El injerto y el esqueje son técnicas de propagación vegetativa utilizadas en la agricultura para obtener plantas genéticamente idénticas a la original."},
    {p:"¿Qué ventaja ofrece la reproducción vegetativa frente a la reproducción sexual en las plantas?",
     o:["Genera mayor variabilidad genética.","Permite obtener plantas genéticamente idénticas a la planta madre de forma más rápida.","Requiere obligatoriamente la intervención de dos plantas distintas.","Siempre produce semillas."],
     r:1, j:"La reproducción vegetativa permite obtener, de manera rápida, nuevas plantas genéticamente idénticas a la planta madre, sin depender de la polinización."},
    {p:"¿Qué es el ciclo menstrual?",
     o:["Un proceso exclusivo del embarazo.","El conjunto de cambios cíclicos que ocurren en el aparato reproductor femenino, generalmente cada 28 días, para preparar el cuerpo ante una posible fecundación.","Un proceso que ocurre solo una vez en la vida.","Un proceso exclusivamente hormonal masculino."],
     r:1, j:"El ciclo menstrual es un conjunto de cambios hormonales y físicos cíclicos en el aparato reproductor femenino, que prepara al cuerpo para una posible fecundación."},
    {p:"¿Cuál es la duración promedio de un ciclo menstrual típico?",
     o:["7 días.","14 días.","Aproximadamente 28 días.","60 días."],
     r:2, j:"Aunque puede variar entre mujeres, la duración promedio de un ciclo menstrual típico es de aproximadamente 28 días."},
    {p:"¿Qué proceso del ciclo menstrual consiste en la liberación de un óvulo maduro desde el ovario?",
     o:["Menstruación.","Ovulación.","Implantación.","Fecundación."],
     r:1, j:"La ovulación es el proceso mediante el cual el ovario libera un óvulo maduro, aproximadamente a la mitad del ciclo menstrual."},
    {p:"¿Dónde ocurre habitualmente la fecundación del óvulo por el espermatozoide en el ser humano?",
     o:["En el útero.","En las trompas de Falopio.","En el ovario.","En la vagina."],
     r:1, j:"La fecundación suele ocurrir en las trompas de Falopio, donde el óvulo liberado se encuentra con los espermatozoides."},
    {p:"¿Qué se forma inmediatamente después de la fecundación del óvulo por el espermatozoide?",
     o:["El embrión.","El cigoto.","El feto.","La placenta."],
     r:1, j:"Tras la unión del óvulo y el espermatozoide se forma el cigoto, la primera célula del nuevo ser humano, con la carga genética combinada de ambos progenitores."},
    {p:"¿En qué estructura del útero se implanta el cigoto para continuar su desarrollo?",
     o:["El cuello uterino.","El endometrio.","Las trompas de Falopio.","El ovario."],
     r:1, j:"El cigoto, tras dividirse varias veces, se implanta en el endometrio, la capa interna del útero, donde continúa su desarrollo."},
    {p:"¿A partir de qué semana aproximada de desarrollo se denomina feto al producto de la concepción, luego de la etapa embrionaria?",
     o:["A partir de la semana 2.","A partir de la semana 8 o 9.","A partir de la semana 20.","Solo al nacer."],
     r:1, j:"Aproximadamente a partir de la octava o novena semana de desarrollo, el embrión pasa a denominarse feto."},
    {p:"¿Qué órgano permite el intercambio de nutrientes, oxígeno y desechos entre la madre y el feto durante el embarazo?",
     o:["El ovario.","La placenta.","El endometrio.","La trompa de Falopio."],
     r:1, j:"La placenta es el órgano que permite el intercambio de nutrientes, oxígeno y desechos entre la circulación materna y la fetal durante el embarazo."},
    {p:"¿Cuáles son las principales etapas del ciclo de vida humano, en orden general?",
     o:["Adultez, niñez, vejez, nacimiento.","Concepción y desarrollo prenatal, nacimiento, infancia, adolescencia, adultez y vejez.","Solo nacimiento y muerte.","Fecundación, vejez y adolescencia únicamente."],
     r:1, j:"El ciclo de vida humano comprende, en orden general, la concepción y el desarrollo prenatal, el nacimiento, la infancia, la adolescencia, la adultez y la vejez."},
    {p:"¿Qué cambios fisiológicos caracterizan principalmente a la etapa de la adolescencia dentro del ciclo de vida humano?",
     o:["La pérdida progresiva de funciones corporales.","El desarrollo de los caracteres sexuales secundarios y la maduración del sistema reproductor, producto de la pubertad.","La formación del cigoto.","La implantación del embrión."],
     r:1, j:"La adolescencia está marcada por la pubertad, etapa en la que se desarrollan los caracteres sexuales secundarios y madura el sistema reproductor."}
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
    if (pct === 1){ titulo = 'Excelente'; veredicto = 'Dominas la reproducción celular, vegetativa y la reproducción humana.'; }
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
