const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener("click",eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
     <td>
        <img src="${elemento.imagen}" width=100 >
      </td>
       <td>
         ${elemento.titulo}
      </td>
       <td>
       ${elemento.precio}
      </td>
       <td>
       <a herf="#" class"borrar" data-id="${elemento.id}" > x </a>
      </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefalt();
    let elemento
    elementoId;
    if(e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');


    }
}

function vaciarCarrito() {
  lista.innerHTML = ""
}


function alerta(variable){
    alert(variable.id)
  }