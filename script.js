(function(){
  const preguntas = [
    {p:"¿Qué se entiende por mercado en economía?",
     o:["Un lugar físico exclusivamente donde se venden alimentos.","El conjunto de compradores y vendedores que interactúan para intercambiar bienes o servicios.","Una empresa dedicada a la producción.","El total de impuestos que paga un país."],
     r:1, j:"El mercado es el espacio, físico o virtual, en el que compradores y vendedores interactúan para intercambiar bienes y servicios."},
    {p:"Según la ley de la demanda, ¿qué relación existe entre el precio y la cantidad demandada?",
     o:["Relación directa.","Relación inversa.","No existe relación.","Relación exclusivamente constante."],
     r:1, j:"La ley de la demanda establece una relación inversa: cuando el precio sube, la cantidad demandada tiende a disminuir, y viceversa."},
    {p:"Según la ley de la oferta, ¿qué relación existe entre el precio y la cantidad ofrecida?",
     o:["Relación directa.","Relación inversa.","No existe relación.","Relación exclusivamente constante."],
     r:0, j:"La ley de la oferta establece una relación directa: cuando el precio sube, los productores tienen mayor incentivo para ofrecer más cantidad."},
    {p:"¿Qué se conoce como equilibrio de mercado?",
     o:["El momento en que solo existe oferta.","El punto en el que la cantidad ofrecida es igual a la cantidad demandada.","El momento en que el gobierno fija el precio.","El punto donde no hay compradores."],
     r:1, j:"El equilibrio de mercado se alcanza en el punto donde la cantidad que los productores ofrecen coincide exactamente con la cantidad que los consumidores demandan."},
    {p:"¿Qué ocurre cuando el precio de un bien está por encima del precio de equilibrio?",
     o:["Se genera escasez.","Se genera un excedente u oferta excesiva.","El precio permanece igual.","La demanda aumenta indefinidamente."],
     r:1, j:"Un precio superior al de equilibrio incentiva a los productores a ofrecer más de lo que los consumidores están dispuestos a comprar, generando un excedente."},
    {p:"¿Qué ocurre cuando el precio de un bien está por debajo del precio de equilibrio?",
     o:["Se genera un excedente.","Se genera escasez (exceso de demanda).","La oferta aumenta sin límite.","No hay ningún efecto."],
     r:1, j:"Un precio inferior al de equilibrio incentiva a más consumidores a comprar de lo que los productores están dispuestos a ofrecer, generando escasez."},
    {p:"¿Cuál de los siguientes factores puede desplazar la curva de oferta hacia la derecha (aumento de la oferta)?",
     o:["Un incremento en el costo de las materias primas.","Una mejora tecnológica que reduce los costos de producción.","Una disminución del número de productores.","Un aumento de impuestos a los productores."],
     r:1, j:"Una mejora tecnológica reduce los costos de producción, permitiendo a los productores ofrecer una mayor cantidad al mismo precio."},
    {p:"¿Cuál de los siguientes factores puede desplazar la curva de demanda hacia la derecha (aumento de la demanda)?",
     o:["Una disminución del ingreso de los consumidores.","Un aumento en las preferencias o gustos de los consumidores por ese bien.","Un aumento del precio del bien mismo.","Una reducción del número de compradores."],
     r:1, j:"Si un bien se pone más de moda o es más preferido por los consumidores, su demanda aumenta a cualquier nivel de precio."},
    {p:"¿Qué son los bienes sustitutos en el análisis de la demanda?",
     o:["Bienes que se consumen siempre juntos.","Bienes que pueden reemplazarse entre sí para satisfacer una necesidad similar.","Bienes que no tienen relación entre sí.","Bienes que produce exclusivamente el Estado."],
     r:1, j:"Los bienes sustitutos son aquellos que pueden reemplazar a otro para satisfacer la misma necesidad, como el té y el café."},
    {p:"¿Qué mide la elasticidad precio de la demanda?",
     o:["El número total de vendedores en el mercado.","La sensibilidad de la cantidad demandada ante variaciones en el precio.","La cantidad de impuestos que paga un producto.","El tamaño de una empresa."],
     r:1, j:"La elasticidad precio de la demanda mide qué tan sensible es la cantidad demandada de un bien ante cambios en su precio."},
    {p:"¿Qué se entiende por empresa en el ámbito económico?",
     o:["Una institución exclusivamente estatal.","Una unidad económica que organiza factores de producción para producir bienes o prestar servicios, generalmente con fines de lucro.","Un organismo que solo distribuye impuestos.","Un conjunto de consumidores."],
     r:1, j:"La empresa es una unidad económica que combina capital, trabajo y otros recursos para producir bienes o prestar servicios."},
    {p:"Según su tamaño, ¿cómo se clasifican comúnmente las empresas en el Perú?",
     o:["Microempresa, pequeña empresa, mediana empresa y gran empresa.","Empresa pública y empresa mixta únicamente.","Empresa nacional y empresa extranjera únicamente.","Empresa formal e informal únicamente."],
     r:0, j:"En el Perú, las empresas suelen clasificarse por su tamaño en microempresa, pequeña empresa, mediana empresa y gran empresa, según su nivel de ventas y número de trabajadores."},
    {p:"¿Qué diferencia principal existe entre una empresa pública y una empresa privada?",
     o:["La empresa pública pertenece al Estado, mientras que la privada pertenece a particulares.","Ambas pertenecen siempre al Estado.","La empresa privada no puede generar utilidades.","No existe ninguna diferencia entre ambas."],
     r:0, j:"La empresa pública es propiedad y está bajo control del Estado, mientras que la empresa privada pertenece a personas naturales o jurídicas particulares."},
    {p:"Según el sector económico al que pertenecen, ¿en qué sector se ubican las empresas dedicadas a la extracción de recursos naturales, como la minería o la agricultura?",
     o:["Sector primario.","Sector secundario.","Sector terciario.","Sector cuaternario."],
     r:0, j:"El sector primario agrupa las actividades de extracción directa de recursos naturales, como la agricultura, la pesca y la minería."},
    {p:"¿En qué sector económico se ubican las empresas dedicadas a la transformación de materias primas en productos elaborados, como la industria manufacturera?",
     o:["Sector primario.","Sector secundario.","Sector terciario.","Sector público."],
     r:1, j:"El sector secundario comprende las actividades que transforman materias primas en productos elaborados, como la industria y la manufactura."},
    {p:"¿En qué sector económico se ubican las empresas dedicadas a la prestación de servicios, como el comercio, la educación o el transporte?",
     o:["Sector primario.","Sector secundario.","Sector terciario.","Sector agrícola."],
     r:2, j:"El sector terciario agrupa las actividades de prestación de servicios, como el comercio, la educación, la salud y el transporte."},
    {p:"¿Qué caracteriza a una Empresa Individual de Responsabilidad Limitada (E.I.R.L.)?",
     o:["Está conformada por varios socios que responden de forma ilimitada.","Es constituida por una sola persona natural, cuya responsabilidad se limita al patrimonio de la empresa.","Solo puede pertenecer al Estado.","No puede tener fines de lucro."],
     r:1, j:"La E.I.R.L. es una forma de organización empresarial constituida por una sola persona, cuya responsabilidad frente a las deudas se limita al patrimonio de la empresa."},
    {p:"¿Qué caracteriza a una sociedad anónima (S.A.) como forma jurídica de empresa?",
     o:["Su capital está dividido en acciones y los socios responden limitadamente hasta el monto de su aporte.","Solo puede tener un único dueño.","No puede cotizar en bolsa bajo ninguna circunstancia.","Es exclusiva de empresas del Estado."],
     r:0, j:"En la sociedad anónima, el capital social está dividido en acciones y la responsabilidad de los socios se limita al monto de su aporte."},
    {p:"¿Cuál de los siguientes criterios se utiliza comúnmente para clasificar el tamaño de una empresa?",
     o:["El color de su logotipo.","El nivel de ventas anuales y/o el número de trabajadores.","La antigüedad exclusiva del propietario.","El número de sucursales que tiene en el extranjero únicamente."],
     r:1, j:"El tamaño de una empresa suele clasificarse considerando principalmente su nivel de ventas anuales y el número de trabajadores que emplea."},
    {p:"¿Cuál es el objetivo principal que persigue una empresa con fines de lucro?",
     o:["Prestar servicios gratuitos a la comunidad.","Obtener beneficios o utilidades a través de la producción o comercialización de bienes y servicios.","Repartir subsidios del Estado.","Administrar justicia."],
     r:1, j:"Una empresa con fines de lucro busca principalmente generar beneficios económicos mediante la producción o comercialización de bienes y servicios."}
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
    if (pct === 1){ titulo = 'Excelente'; veredicto = 'Dominas el mercado (oferta, demanda y equilibrio) y los tipos de empresa.'; }
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
