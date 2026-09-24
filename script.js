(function(){
  const preguntas = [
    {p:"¿Qué significa el prefijo 'sub-' en palabras como 'subterráneo' o 'submarino'?",
     o:["Encima de.","Debajo de.","Alrededor de.","Después de."],
     r:1, j:"El prefijo 'sub-' indica una posición inferior o debajo de algo, como en 'subterráneo' (bajo tierra)."},
    {p:"¿Qué significa el prefijo 'ante-' en palabras como 'anteponer' o 'antesala'?",
     o:["Delante de, antes.","Detrás de.","Dentro de.","Contra."],
     r:0, j:"El prefijo 'ante-' indica anterioridad en el espacio o en el tiempo, como en 'antesala' (la sala anterior a otra)."},
    {p:"¿Qué significa el prefijo 'inter-' en palabras como 'internacional' o 'intercambio'?",
     o:["Fuera de.","Entre, en medio de.","Alrededor.","Después de."],
     r:1, j:"El prefijo 'inter-' significa 'entre' o 'en medio de', como en 'internacional' (entre naciones)."},
    {p:"¿Qué significa el prefijo 'trans-' (o 'tras-') en palabras como 'transportar' o 'trasladar'?",
     o:["A través de, de un lado a otro.","Debajo de.","Antes de.","Contra."],
     r:0, j:"El prefijo 'trans-' indica movimiento a través de un espacio o de un lado a otro, como en 'transportar'."},
    {p:"¿Qué significa el prefijo 'extra-' en palabras como 'extraordinario' o 'extraterrestre'?",
     o:["Dentro de.","Fuera de, más allá de.","Junto a.","Antes de."],
     r:1, j:"El prefijo 'extra-' significa 'fuera de' o 'más allá de', como en 'extraterrestre' (fuera de la Tierra)."},
    {p:"¿Qué significa el prefijo 'circun-' en palabras como 'circunnavegar' o 'circundar'?",
     o:["Alrededor de.","Debajo de.","Después de.","Contra."],
     r:0, j:"El prefijo 'circun-' significa 'alrededor de', como en 'circunnavegar' (navegar alrededor de algo)."},
    {p:"¿Qué significa el prefijo 'contra-' en palabras como 'contraataque' o 'contradecir'?",
     o:["A favor de.","En oposición a.","Junto con.","Dentro de."],
     r:1, j:"El prefijo 'contra-' indica oposición o resistencia frente a algo, como en 'contradecir' (decir lo opuesto)."},
    {p:"¿Qué significa el prefijo 'pos-' (o 'post-') en palabras como 'posguerra' o 'posponer'?",
     o:["Antes de.","Después de.","Debajo de.","Alrededor de."],
     r:1, j:"El prefijo 'pos-' indica posterioridad en el tiempo, como en 'posguerra' (después de la guerra)."},
    {p:"¿Qué significa el prefijo 'co-' (o 'con-') en palabras como 'coautor' o 'convivir'?",
     o:["En contra de.","Junto con, en compañía de.","Fuera de.","Antes de."],
     r:1, j:"El prefijo 'co-' indica compañía o unión, como en 'coautor' (autor junto con otro)."},
    {p:"¿Qué significa el prefijo español 'entre-' en palabras como 'entreabrir' o 'entretiempo'?",
     o:["Encima de.","Un estado intermedio, entre dos cosas.","Fuera de.","Contra."],
     r:1, j:"El prefijo 'entre-' indica un estado intermedio o parcial, como en 'entreabrir' (abrir a medias)."},
    {p:"¿Qué se entiende por sinonimia contextual?",
     o:["Palabras que tienen sonido idéntico pero distinto significado.","Palabras que solo funcionan como sinónimas dentro de un contexto específico, aunque en otros contextos no lo sean.","Palabras que se escriben igual pero se pronuncian distinto.","Palabras de origen latino con significado opuesto."],
     r:1, j:"La sinonimia contextual ocurre cuando dos palabras se comportan como sinónimas únicamente dentro de un contexto determinado, sin serlo de forma general."},
    {p:"En la oración 'El actor interpretó su papel con gran talento', la palabra 'papel' se relaciona en ese contexto con 'personaje' o 'rol'. Esto ejemplifica:",
     o:["Homonimia.","Sinonimia contextual.","Paronimia.","Homografía."],
     r:1, j:"En ese contexto específico, 'papel' funciona como sinónimo de 'personaje', aunque en otros contextos 'papel' signifique algo distinto (como la hoja de papel)."},
    {p:"¿Qué son las palabras homónimas?",
     o:["Palabras que tienen distinto significado pero se escriben o pronuncian igual, sin relación etimológica entre sí.","Palabras que significan exactamente lo mismo.","Palabras derivadas de un mismo prefijo.","Palabras que solo se diferencian por el género."],
     r:0, j:"La homonimia agrupa palabras de origen distinto que coinciden en su forma escrita, oral, o ambas, aunque tengan significados diferentes."},
    {p:"¿Qué caracteriza a las palabras homófonas?",
     o:["Se escriben igual y se pronuncian igual.","Se pronuncian igual pero se escriben de manera diferente.","Se escriben igual pero se pronuncian diferente.","No tienen ninguna relación de sonido."],
     r:1, j:"Las palabras homófonas suenan igual al pronunciarse, pero se escriben de forma distinta y tienen significados diferentes."},
    {p:"¿Cuál de los siguientes pares de palabras es un ejemplo de homofonía?",
     o:["Vaca (animal) y baca (portaequipajes del auto).","Banco (asiento) y banco (entidad financiera).","Amo (que ama) y amo (dueño).","Papa (tubérculo) y Papa (líder de la Iglesia)."],
     r:0, j:"'Vaca' y 'baca' se pronuncian igual pero se escriben de manera diferente y tienen significados distintos, por lo que son palabras homófonas."},
    {p:"¿Qué caracteriza a las palabras homógrafas?",
     o:["Se pronuncian igual pero se escriben diferente.","Se escriben igual y, generalmente, también se pronuncian igual, aunque tienen significados distintos.","Tienen significados idénticos.","Pertenecen siempre a la misma familia léxica."],
     r:1, j:"Las palabras homógrafas comparten la misma escritura (y por lo general la misma pronunciación), pero tienen significados distintos según el contexto."},
    {p:"¿Cuál de los siguientes pares de palabras es un ejemplo de homografía?",
     o:["Vaca y baca.","Banco (asiento para sentarse) y banco (entidad financiera).","Hola y ola.","Tubo y tuvo."],
     r:1, j:"'Banco' se escribe igual en ambos casos y tiene significados distintos según el contexto, lo que ejemplifica la homografía."},
    {p:"¿Qué son las palabras parónimas?",
     o:["Palabras que tienen exactamente el mismo significado.","Palabras que se parecen mucho en su forma (escritura o pronunciación) pero tienen significados distintos.","Palabras que se pronuncian y se escriben de manera idéntica.","Prefijos de origen latino."],
     r:1, j:"La paronimia se da entre palabras que son muy parecidas en su forma, sin ser idénticas, pero que tienen significados diferentes."},
    {p:"¿Cuál de los siguientes pares de palabras es un ejemplo de paronimia?",
     o:["Adoptar y adaptar.","Vaca y baca.","Banco y banco.","Casa y caza."],
     r:0, j:"'Adoptar' y 'adaptar' son palabras muy parecidas en su forma, pero con significados distintos, lo que ejemplifica la paronimia."},
    {p:"¿Cuál de las siguientes opciones distingue correctamente la homofonía de la homografía?",
     o:["La homofonía se refiere a palabras que suenan igual pero se escriben diferente; la homografía, a palabras que se escriben igual.","Ambas son exactamente lo mismo.","La homofonía se refiere a la escritura y la homografía al sonido.","Ninguna de ellas se relaciona con la pronunciación."],
     r:0, j:"La homofonía se centra en la coincidencia del sonido entre palabras que se escriben distinto, mientras que la homografía se centra en la coincidencia de la escritura."}
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
    if (pct === 1){ titulo = 'Excelente'; veredicto = 'Dominas los prefijos y las relaciones léxico-semánticas de independencia.'; }
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
