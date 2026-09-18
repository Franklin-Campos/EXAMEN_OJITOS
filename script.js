(function(){
  const preguntas = [
    {p:"¿Cuál es el gas más abundante en la atmósfera terrestre?",
     o:["Oxígeno.","Nitrógeno.","Dióxido de carbono.","Argón."],
     r:1, j:"El nitrógeno representa aproximadamente el 78% de los gases atmosféricos, siendo el más abundante."},
    {p:"¿Cuál es la capa de la atmósfera más cercana a la superficie terrestre?",
     o:["Estratosfera.","Troposfera.","Mesosfera.","Termosfera."],
     r:1, j:"La troposfera es la capa más baja de la atmósfera, donde vivimos y se desarrollan los fenómenos meteorológicos."},
    {p:"¿En qué capa de la atmósfera se producen la mayoría de los fenómenos meteorológicos, como lluvias y vientos?",
     o:["Estratosfera.","Troposfera.","Mesosfera.","Exosfera."],
     r:1, j:"La troposfera concentra la mayor parte del vapor de agua y es donde se forman las nubes y ocurren los fenómenos climáticos."},
    {p:"¿En qué capa de la atmósfera se ubica la capa de ozono?",
     o:["Troposfera.","Estratosfera.","Mesosfera.","Termosfera."],
     r:1, j:"La capa de ozono se encuentra dentro de la estratosfera, aproximadamente entre 15 y 35 km de altitud."},
    {p:"¿Cuál es la función principal de la capa de ozono?",
     o:["Producir el viento.","Filtrar la radiación ultravioleta del sol.","Generar la presión atmosférica.","Formar las nubes."],
     r:1, j:"La capa de ozono absorbe gran parte de la radiación ultravioleta dañina proveniente del sol, protegiendo la vida en la Tierra."},
    {p:"¿Qué se entiende por efecto invernadero?",
     o:["El enfriamiento progresivo de la atmósfera.","La retención de calor en la atmósfera debido a ciertos gases.","La ausencia total de gases en la atmósfera.","El desplazamiento de los continentes."],
     r:1, j:"El efecto invernadero es el fenómeno por el cual ciertos gases atmosféricos retienen parte del calor irradiado por la Tierra, manteniendo su temperatura."},
    {p:"¿Cuál de los siguientes es un gas de efecto invernadero?",
     o:["Nitrógeno.","Oxígeno.","Dióxido de carbono.","Argón."],
     r:2, j:"El dióxido de carbono (CO2) es uno de los principales gases de efecto invernadero, junto con el metano y el vapor de agua."},
    {p:"¿Qué ocurre con la presión atmosférica a medida que aumenta la altitud?",
     o:["Aumenta.","Se mantiene constante.","Disminuye.","Desaparece por completo."],
     r:2, j:"A mayor altitud hay menor cantidad de aire sobre un punto determinado, por lo que la presión atmosférica disminuye."},
    {p:"¿Qué causa principalmente el viento?",
     o:["La rotación de la Luna.","Las diferencias de presión atmosférica.","La capa de ozono.","La radiación ultravioleta."],
     r:1, j:"El viento se origina por el desplazamiento de masas de aire desde zonas de alta presión hacia zonas de baja presión."},
    {p:"¿Cuál es la capa más externa de la atmósfera, en el límite con el espacio exterior?",
     o:["Troposfera.","Mesosfera.","Termosfera.","Exosfera."],
     r:3, j:"La exosfera es la capa más alejada de la superficie terrestre y constituye la transición hacia el espacio exterior."},
    {p:"Según la ley de la demanda, ¿qué ocurre generalmente cuando el precio de un bien aumenta?",
     o:["La cantidad demandada aumenta.","La cantidad demandada disminuye.","La cantidad demandada no cambia.","La oferta disminuye automáticamente."],
     r:1, j:"La ley de la demanda establece una relación inversa entre precio y cantidad demandada: a mayor precio, menor cantidad demandada, manteniendo lo demás constante."},
    {p:"Según la ley de la oferta, ¿qué ocurre generalmente cuando el precio de un bien aumenta?",
     o:["La cantidad ofrecida disminuye.","La cantidad ofrecida aumenta.","La cantidad ofrecida no cambia.","La demanda aumenta automáticamente."],
     r:1, j:"La ley de la oferta establece una relación directa entre precio y cantidad ofrecida: a mayor precio, mayor incentivo de los productores para ofrecer más."},
    {p:"¿Qué se conoce como punto de equilibrio en un mercado?",
     o:["El punto donde el precio es más alto.","El punto donde la oferta y la demanda coinciden.","El punto donde no hay ni oferta ni demanda.","El punto donde el gobierno fija el precio."],
     r:1, j:"El punto de equilibrio es aquel en el que la cantidad ofrecida es igual a la cantidad demandada."},
    {p:"¿Cómo se define el precio de equilibrio?",
     o:["El precio fijado únicamente por el Estado.","El precio en el que la cantidad ofrecida es igual a la cantidad demandada.","El precio más bajo posible en el mercado.","El precio que solo beneficia a los productores."],
     r:1, j:"El precio de equilibrio es aquel en el que coinciden la cantidad que los consumidores están dispuestos a comprar y la que los productores están dispuestos a vender."},
    {p:"¿Qué ocurre cuando existe un exceso de oferta en el mercado?",
     o:["El precio tiende a subir.","El precio tiende a bajar.","La demanda desaparece.","El mercado se cierra."],
     r:1, j:"Cuando la cantidad ofrecida supera a la demandada, los precios tienden a bajar hasta alcanzar nuevamente el equilibrio."},
    {p:"¿Qué ocurre cuando existe un exceso de demanda (escasez) en el mercado?",
     o:["El precio tiende a bajar.","El precio tiende a subir.","La oferta desaparece.","No hay ningún efecto en el precio."],
     r:1, j:"Cuando la cantidad demandada supera a la ofrecida, la escasez genera presión al alza sobre los precios."},
    {p:"¿Cuál de los siguientes factores puede desplazar la curva de demanda?",
     o:["El costo de producción.","El ingreso de los consumidores.","La tecnología de producción.","El número de vendedores."],
     r:1, j:"Cambios en el ingreso de los consumidores modifican su capacidad de compra, desplazando la curva de demanda."},
    {p:"¿Qué son los bienes sustitutos?",
     o:["Bienes que se consumen siempre juntos.","Bienes que pueden reemplazarse entre sí para satisfacer una misma necesidad.","Bienes que no tienen relación entre sí.","Bienes que solo produce el Estado."],
     r:1, j:"Los bienes sustitutos son aquellos que pueden reemplazar a otro para satisfacer la misma necesidad, como el té y el café."},
    {p:"¿Qué son los bienes complementarios?",
     o:["Bienes que se usan en conjunto para satisfacer una necesidad.","Bienes que compiten entre sí.","Bienes que no afectan la demanda de otros.","Bienes producidos exclusivamente por el gobierno."],
     r:0, j:"Los bienes complementarios son aquellos que se consumen conjuntamente, de modo que la demanda de uno influye en la del otro, como el automóvil y la gasolina."},
    {p:"¿Qué mide la elasticidad de la demanda?",
     o:["La cantidad total de bienes producidos.","La sensibilidad de la cantidad demandada ante cambios en el precio.","El número de compradores en el mercado.","La cantidad de impuestos aplicados a un bien."],
     r:1, j:"La elasticidad de la demanda mide qué tan sensible es la cantidad demandada de un bien ante variaciones en su precio."}
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
    if (pct === 1){ titulo = 'Excelente'; veredicto = 'Dominas los conceptos de la atmósfera y de oferta y demanda.'; }
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
