const fila = document.querySelector('.contenedor-carrusel');
const pelis = document.querySelectorAll('.peliculas');
const flechaIzq = document.getElementById('flecha-izquierda');
const flechaDer = document.getElementById('flecha-derecha');

/* comportamiento para las flechas izquierda y derecha */
/* Se desplaza el scroll y luego se busca el indicar activo para desactivarlo y */
/* con ello activar ya sea el indicador anterior o posterior segpún sea el caso */
flechaDer.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

flechaIzq.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
    const indicadorActivo = document.querySelector('.indicadores .activo');
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});
/* Se calcula cuantos indicadores se agregarán a la página */
/* Se crea el numero correspondiente de botones */
const numeroPaginas = Math.ceil(pelis.length / 4);
for (let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');
    if (i === 0) {
        indicador.classList.add('activo');
    }
    /* Se cambia el indicador activo de acuerdo al click del mouse */
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) =>{
        fila.scrollLeft = i*fila.offsetWidth;
        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
/* Se aplica el comportamiento hover programado y se elimina el mismo comportamiento del resto de las peliculas */    
    pelis.forEach((peliculas) => {
        peliculas.addEventListener('mouseenter', (e) => {
            const elemento = e.currentTarget;
            setTimeout(() =>{
                pelis.forEach(peliculas => peliculas.classList.remove('hover'));
                elemento.classList.add('hover');
            },113);
        });
        
    });
  /* Cuando el mouse se aparta del area del carrusel se elimina el comportamiento hover de todas las peliculas */  
    fila.addEventListener('mouseleave', () =>{
        pelis.forEach(peliculas => peliculas.classList.remove('hover'));
    });
}