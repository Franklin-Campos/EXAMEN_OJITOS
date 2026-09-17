(function(){
  const preguntas = [
    {p:"¿Cuál de las siguientes afirmaciones describe mejor a un sujeto de derecho?",
     o:["Es únicamente una persona mayor de edad.","Es quien puede ser titular de derechos y obligaciones.","Es únicamente quien puede votar.","Es una persona que necesariamente posee bienes."],
     r:1, j:"Un sujeto de derecho es aquel a quien el ordenamiento jurídico reconoce como titular de derechos y obligaciones."},
    {p:"¿Cuál de los siguientes es considerado un derecho de la persona?",
     o:["Derecho al nombre.","Derecho a ser elegido presidente.","Derecho a ocupar un cargo público.","Derecho a participar en elecciones."],
     r:0, j:"El nombre constituye un derecho de la persona y permite su identificación e individualización."},
    {p:"¿Cuál es la finalidad principal del nombre?",
     o:["Determinar la nacionalidad de una persona.","Determinar su capacidad jurídica.","Identificar e individualizar a la persona.","Determinar su condición económica."],
     r:2, j:"El nombre permite distinguir e identificar jurídicamente a una persona frente a los demás."},
    {p:"Una persona puede ser titular de un derecho, pero no necesariamente ejercerlo personalmente. Esto demuestra la diferencia entre:",
     o:["Nombre y ciudadanía.","Nacionalidad y personalidad.","Capacidad de goce y capacidad de ejercicio.","Persona natural y ciudadanía."],
     r:2, j:"La capacidad de goce se refiere a la posibilidad de ser titular de derechos, mientras que la capacidad de ejercicio se relaciona con ejercerlos personalmente."},
    {p:"¿Cuál de las siguientes situaciones corresponde principalmente a la capacidad de ejercicio?",
     o:["Ser titular de una propiedad.","Tener derecho a la identidad.","Celebrar personalmente determinados actos jurídicos.","Tener un nombre."],
     r:2, j:"La capacidad de ejercicio está relacionada con la posibilidad de realizar personalmente actos jurídicos y ejercer derechos."},
    {p:"¿Cuál de las siguientes afirmaciones sobre el concebido es correcta?",
     o:["No tiene ningún reconocimiento jurídico.","Es sujeto de derecho en todo cuanto le favorece.","Tiene ciudadanía desde la concepción.","Tiene capacidad plena de ejercicio."],
     r:1, j:"El concebido es reconocido jurídicamente como sujeto de derecho en todo aquello que le favorece."},
    {p:"El concebido se diferencia de la persona natural principalmente porque:",
     o:["El concebido todavía no ha nacido.","El concebido no puede tener ningún derecho.","La persona natural no es sujeto de derecho.","La persona natural necesariamente es ciudadana."],
     r:0, j:"El concebido es el ser humano aún no nacido, mientras que la persona natural es el ser humano considerado jurídicamente después del nacimiento."},
    {p:"¿Cuál de los siguientes ejemplos representa mejor la capacidad de goce?",
     o:["Una persona firma personalmente un contrato.","Una persona puede ser titular de una propiedad.","Una persona vota en una elección.","Una persona solicita personalmente un préstamo."],
     r:1, j:"La capacidad de goce está relacionada con la posibilidad de ser titular de derechos, como el derecho de propiedad."},
    {p:"¿Cuál de los siguientes ejemplos representa mejor la capacidad de ejercicio?",
     o:["Ser titular de una herencia.","Tener derecho al nombre.","Celebrar personalmente un contrato cuando la ley lo permite.","Tener derecho a la identidad."],
     r:2, j:"Celebrar personalmente un contrato constituye un acto relacionado con el ejercicio de derechos."},
    {p:"¿Cuál de las siguientes afirmaciones es correcta respecto de una persona menor de edad?",
     o:["Deja de ser sujeto de derecho.","No puede ser titular de ningún derecho.","Puede ser titular de derechos, aunque el ejercicio de determinados derechos esté sujeto a reglas legales.","No tiene capacidad jurídica."],
     r:2, j:"La minoría de edad no elimina la condición de sujeto de derecho. Existen reglas específicas respecto del ejercicio de determinados derechos."},
    {p:"¿Qué concepto está relacionado principalmente con la participación política de una persona?",
     o:["Nombre.","Ciudadanía.","Capacidad de goce.","Personalidad."],
     r:1, j:"La ciudadanía está relacionada con el ejercicio de derechos políticos y la participación en la vida pública."},
    {p:"¿Cuál es la principal diferencia entre nacionalidad y ciudadanía?",
     o:["La nacionalidad se relaciona con el vínculo con un Estado y la ciudadanía con el ejercicio de derechos políticos.","La nacionalidad solamente corresponde a mayores de edad.","La ciudadanía determina el nombre de una persona.","No existe ninguna diferencia entre ambas."],
     r:0, j:"Aunque están relacionadas, son conceptos diferentes: la nacionalidad expresa un vínculo jurídico con un Estado, mientras que la ciudadanía se relaciona con derechos políticos."},
    {p:"¿Cuál de las siguientes afirmaciones es INCORRECTA?",
     o:["El nombre permite identificar a una persona.","El concebido es sujeto de derecho en cuanto le favorece.","La capacidad de goce permite ser titular de derechos.","Solo los ciudadanos pueden ser sujetos de derecho."],
     r:3, j:"No es necesario ser ciudadano para ser sujeto de derecho. Las personas pueden ser titulares de derechos civiles independientemente del ejercicio de derechos políticos."},
    {p:"Si una persona tiene derecho a recibir una herencia, pero necesita cumplir determinadas condiciones legales para ejercer ese derecho, estamos diferenciando principalmente:",
     o:["Ciudadanía y nacionalidad.","Capacidad de goce y capacidad de ejercicio.","Nombre y domicilio.","Persona y concebido."],
     r:1, j:"La titularidad del derecho corresponde a la capacidad de goce, mientras que su ejercicio está relacionado con la capacidad de ejercicio."},
    {p:"¿Cuál de las siguientes opciones presenta una relación correcta?",
     o:["Nombre → participación política.","Ciudadanía → identificación personal.","Capacidad de goce → titularidad de derechos.","Concebido → persona que necesariamente ya nació."],
     r:2, j:"La capacidad de goce consiste en la aptitud para ser titular de derechos y obligaciones."},
    {p:"¿Por qué el concebido recibe protección jurídica?",
     o:["Porque ya ejerce todos los derechos políticos.","Porque es considerado sujeto de derecho en todo cuanto le favorece.","Porque ya posee capacidad plena de ejercicio.","Porque necesariamente posee DNI."],
     r:1, j:"El ordenamiento jurídico reconoce al concebido como sujeto de derecho en aquello que le favorece."},
    {p:"¿Cuál de estas afirmaciones diferencia correctamente capacidad jurídica y ciudadanía?",
     o:["Ambas significan exactamente lo mismo.","La capacidad jurídica se relaciona con derechos y obligaciones; la ciudadanía, principalmente con derechos políticos.","La ciudadanía permite tener nombre y la capacidad jurídica permite votar.","La capacidad jurídica solamente existe después de los 18 años."],
     r:1, j:"Son conceptos distintos. La capacidad jurídica está vinculada con la titularidad y ejercicio de derechos y obligaciones; la ciudadanía se relaciona principalmente con derechos políticos."},
    {p:"¿Cuál de las siguientes situaciones está relacionada directamente con el derecho al nombre?",
     o:["Una persona es identificada mediante sus nombres y apellidos.","Una persona participa en una elección.","Una persona adquiere una propiedad.","Una persona cumple una obligación tributaria."],
     r:0, j:"El nombre cumple principalmente una función de identificación e individualización de la persona."},
    {p:"Señala la alternativa que contiene únicamente afirmaciones correctas: I. El concebido es sujeto de derecho en todo cuanto le favorece. II. La capacidad de goce está relacionada con la titularidad de derechos. III. La ciudadanía está relacionada con los derechos políticos.",
     o:["Solo I.","Solo II.","I y II.","I, II y III."],
     r:3, j:"Las tres afirmaciones son correctas y corresponden a conceptos fundamentales del tema."},
    {p:"¿Cuál de las siguientes opciones resume mejor la relación entre los conceptos estudiados?",
     o:["Persona natural → sujeto de derecho → titular de derechos y obligaciones.","Ciudadanía → derecho al nombre → capacidad de ejercicio.","Concebido → ciudadanía → derechos políticos.","Nombre → nacionalidad → capacidad jurídica."],
     r:0, j:"La persona natural es sujeto de derecho y, como tal, puede ser titular de derechos y obligaciones. Los demás conceptos cumplen funciones jurídicas diferentes."}
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
    if (pct === 1){ titulo = 'Excelente'; veredicto = 'Dominas los conceptos de sujeto de derecho y ciudadanía.'; }
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
