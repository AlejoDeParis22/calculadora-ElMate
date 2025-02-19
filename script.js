/* let clientes = []; // Inicializamos la variable vacía

fetch('clientes.json')
    .then(response => response.json())
    .then(data => {
        console.log('Clientes cargados:', data);
        clientes = data; // Se llena la variable con los datos cargados
    })
    .catch(error => console.error('Error al cargar clientes:', error));

let container = document.getElementById('signIn')
let button = document.getElementById('button')
let age = document.getElementById('age')
let neim = document.getElementById('name')
let subtitle = document.getElementById('subtitle')
let ingreso = document.querySelector('.sign')
let principal = document.querySelector('.main')
let time = document.getElementById('time')
let grams = document.getElementById('grams')
let color = document.getElementById('color')

const guardar = (clave,valor)=>{
    localStorage.setItem(clave,valor);
};




button.addEventListener('click',(e)=>{
    age = age.value
    neim = neim.value
    subtitle.innerHTML=(`Hola ${neim} me sorprende que tengas ${age} años, no estaras mintiendo, no?`)
    ingreso.className = 'not'
    principal.className = 'yes'
    let cliente = {'nobre':neim, 'edad':age}
    localStorage.setItem("clientes", JSON.stringify(clientes));
})


let calculate = document.getElementById('calculate')
calculate.addEventListener('click',()=>{
    time=time.value
    grams=grams.value
    color=color.value
    let total=(grams*20+time/17)*3
    total=Math.round(total)
    let response =  document.getElementById('response')
    response.innerHTML=`Tu proyecto tiene un tiempo de impresion de ${time} minutos, pesa ${grams} y es de color ${color}`
    let totalaso = document.getElementById('totalaso')
    totalaso.innerHTML=`Tiene un costo de $${total}`
})


let productos=[
    {id:1, nombre:"Ajedrez",imagen:"./images/ajedrez.jpeg", precio: 5800, descripcion:"Tablero y piezas de ajedrez estilo moderno, colores blanco y negro tamaño mini"},
    {id:2, nombre:"Cuadro 3D",imagen:"./images/arte.jpeg", precio: 6000, descripcion:"Cuadro decorativo con figura 3D, podes hacer el tuyo personalizado!"},
    {id:3, nombre:"Figura de buda",imagen:"./images/buda.jpeg", precio: 2000, descripcion:"Mini figura 3d de buda sentado"},
    {id:4, nombre:"Lapicero columna",imagen:"./images/lapiceroCol.jpeg", precio: 5000, descripcion:"Lapicero estilo columna romana tamaño mediano"},
    {id:5, nombre:"Llaveros columnitas",imagen:"./images/columnitas.jpeg", precio: 1500, descripcion:"Llaveros mini columnas romanas livianos con argolla incluida"},
    {id:6, nombre:"Llavero corazon",imagen:"./images/corazones.jpeg", precio: 1500, descripcion:"Llaveros romantico estilo aniversario, personaliza el tuyo!"},
    {id:7, nombre:"Fundas para celular",imagen:"./images/funda.jpeg", precio: 6000, descripcion:"Fundas artisticas para distintos modelos de celulares a pedido"},
    {id:8, nombre:"Maceta japonesa",imagen:"./images/japon.jpeg", precio: 5500, descripcion:"Maceta IKIGAI estilo japonesa para bonsai"},
    {id:9, nombre:"Maquetas",imagen:"./images/maqueta.jpeg", precio: 2000, descripcion:"Elementos a escala para maquetas arquitectonicas"},
    {id:10, nombre:"Llaveros mate",imagen:"./images/mates.jpeg", precio: 1500, descripcion:"Llaveros forma de mate clasico con argolla"},
    {id:11, nombre:"Porta sahumerio",imagen:"./images/sahumerio.jpeg", precio: 7000, descripcion:"Porta sahumerio invertido decorativo circular"},
    {id:12, nombre:"Posa celular",imagen:"./images/soporte.jpeg", precio: 4000, descripcion:"Posa celular personalizable"}
];

const pintar = ()=>{
    const contenedor = document.getElementById("catalogo");
    productos.forEach(producto =>{
        const div = document.createElement('div');
        div.className = 'card'
        div.innerHTML=`<img src=${producto.imagen}>
                            <div class="baja">
                                <h3>${producto.nombre}</h3>
                                <p>${producto.descripcion}</p>
                                <b>$${producto.precio}</b>
                            </div>`
        contenedor.appendChild(div)
    })
}

pintar()




 */

/* // Recuperar clientes desde localStorage al cargar la página
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

fetch('clientes.json')
    .then(response => response.json())
    .then(data => {
        console.log('Clientes cargados:', data);
        clientes = data;
        mostrarClientes();
    })
    .catch(error => console.error('Error al cargar clientes:', error));

let container = document.getElementById('signIn');
let button = document.getElementById('button');
let age = document.getElementById('age');
let neim = document.getElementById('name');
let subtitle = document.getElementById('subtitle');
let ingreso = document.querySelector('.sign');
let principal = document.querySelector('.main');
let time = document.getElementById('time');
let grams = document.getElementById('grams');
let color = document.getElementById('color');

// Función para mostrar clientes en pantalla
function mostrarClientes() {
    let clientesContainer = document.getElementById("clientes-container");
    clientesContainer.innerHTML = ""; // Limpiar antes de agregar nuevos datos
    clientes.forEach(cliente => {
        let p = document.createElement("p");
        p.textContent = `Nombre: ${cliente.nombre}, Edad: ${cliente.edad}`;
        clientesContainer.appendChild(p);
    });
}

// Capturar datos del formulario y guardarlos en localStorage
button.addEventListener('click', () => {
    let nuevoCliente = { nombre: neim.value, edad: age.value };
    clientes.push(nuevoCliente); // Agregar el nuevo cliente a la lista
    ingreso.className = 'not'
    principal.className = 'yes'
    localStorage.setItem("clientes", JSON.stringify(clientes)); // Guardar lista actualizada
    mostrarClientes();
    
    subtitle.innerHTML = `Hola ${neim.value}, me sorprende que tengas ${age.value} años, ¿no estarás mintiendo, no?`;
    ingreso.className = 'not';
    principal.className = 'yes';
});

let calculate = document.getElementById('calculate');
calculate.addEventListener('click', () => {
    let total = (grams.value * 20 + time.value / 17) * 3;
    total = Math.round(total);
    
    let response = document.getElementById('response');
    response.innerHTML = `Tu proyecto tiene un tiempo de impresión de ${time.value} minutos, pesa ${grams.value}g y es de color ${color.value}`;
    
    let totalaso = document.getElementById('totalaso');
    totalaso.innerHTML = `Tiene un costo de $${total}`;
});

let productos = [
    { id: 1, nombre: "Ajedrez", imagen: "./images/ajedrez.jpeg", precio: 5800, descripcion: "Tablero y piezas de ajedrez estilo moderno, colores blanco y negro tamaño mini" },
    { id: 2, nombre: "Cuadro 3D", imagen: "./images/arte.jpeg", precio: 6000, descripcion: "Cuadro decorativo con figura 3D, puedes hacer el tuyo personalizado!" },
    { id: 3, nombre: "Figura de buda", imagen: "./images/buda.jpeg", precio: 2000, descripcion: "Mini figura 3D de buda sentado" },
    { id: 4, nombre: "Lapicero columna", imagen: "./images/lapiceroCol.jpeg", precio: 5000, descripcion: "Lapicero estilo columna romana tamaño mediano" },
    { id: 5, nombre: "Llaveros columnitas", imagen: "./images/columnitas.jpeg", precio: 1500, descripcion: "Llaveros mini columnas romanas livianos con argolla incluida" },
    { id: 6, nombre: "Llavero corazón", imagen: "./images/corazones.jpeg", precio: 1500, descripcion: "Llaveros romántico estilo aniversario, ¡personaliza el tuyo!" },
    { id: 7, nombre: "Fundas para celular", imagen: "./images/funda.jpeg", precio: 6000, descripcion: "Fundas artísticas para distintos modelos de celulares a pedido" },
    { id: 8, nombre: "Maceta japonesa", imagen: "./images/japon.jpeg", precio: 5500, descripcion: "Maceta IKIGAI estilo japonesa para bonsái" },
    { id: 9, nombre: "Maquetas", imagen: "./images/maqueta.jpeg", precio: 2000, descripcion: "Elementos a escala para maquetas arquitectónicas" },
    { id: 10, nombre: "Llaveros mate", imagen: "./images/mates.jpeg", precio: 1500, descripcion: "Llaveros con forma de mate clásico con argolla" },
    { id: 11, nombre: "Porta sahumerio", imagen: "./images/sahumerio.jpeg", precio: 7000, descripcion: "Porta sahumerio invertido decorativo circular" },
    { id: 12, nombre: "Posa celular", imagen: "./images/soporte.jpeg", precio: 4000, descripcion: "Posa celular personalizable" }
];

const pintar = () => {
    const contenedor = document.getElementById("catalogo");
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<img src=${producto.imagen}>
                            <div class="baja">
                                <h3>${producto.nombre}</h3>
                                <p>${producto.descripcion}</p>
                                <b>$${producto.precio}</b>
                            </div>`;
        contenedor.appendChild(div);
    });
};

pintar();
 */

// Recuperar clientes desde localStorage al cargar la página
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
let toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {
    let clientesContainer = document.getElementById("clientes-container");
    if (clientesContainer.style.display === "none") {
        clientesContainer.style.display = "block"; // Mostrar la lista
        toggleButton.textContent = "Ocultar Clientes"; // Cambiar texto del botón
    } else {
        clientesContainer.style.display = "none"; // Ocultar la lista
        toggleButton.textContent = "Mostrar Clientes"; // Cambiar texto del botón
    }
});
let clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    clientes = []; // Vaciar el array de clientes
    localStorage.removeItem("clientes"); // Eliminar clientes de localStorage
    mostrarClientes(); // Actualizar la visualización
});

// Si no hay clientes en localStorage, cargar desde el JSON
if (clientes.length === 0) {
    fetch('clientes.json')
        .then(response => response.json())
        .then(data => {
            console.log('Clientes cargados desde JSON:', data);
            clientes = data; // Solo cargar del JSON si no hay clientes en localStorage
            mostrarClientes();
        })
        .catch(error => console.error('Error al cargar clientes:', error));
} else {
    mostrarClientes(); // Mostrar clientes existentes
}

let container = document.getElementById('signIn');
let button = document.getElementById('button');
let age = document.getElementById('age');
let neim = document.getElementById('name');
let subtitle = document.getElementById('subtitle');
let ingreso = document.querySelector('.sign');
let principal = document.querySelector('.main');
let time = document.getElementById('time');
let grams = document.getElementById('grams');
let color = document.getElementById('color');

// Función para mostrar clientes en pantalla
function mostrarClientes() {
    let clientesContainer = document.getElementById("clientes-container");
    clientesContainer.innerHTML = ""; // Limpiar antes de agregar nuevos datos
    clientes.forEach(cliente => {
        let p = document.createElement("p");
        p.textContent = `Nombre: ${cliente.nombre}, Edad: ${cliente.edad}`;
        clientesContainer.appendChild(p);
    });
}

// Capturar datos del formulario y guardarlos en localStorage
button.addEventListener('click', () => {
    let nuevoCliente = { nombre: neim.value, edad: age.value };
    clientes.push(nuevoCliente); // Agregar el nuevo cliente a la lista
    localStorage.setItem("clientes", JSON.stringify(clientes)); // Guardar lista actualizada
    mostrarClientes();
    
    subtitle.innerHTML = `Hola ${neim.value}, me sorprende que tengas ${age.value} años, ¿no estarás mintiendo, no?`;
    ingreso.className = 'not';
    principal.className = 'yes';
});

let calculate = document.getElementById('calculate');
calculate.addEventListener('click', () => {
    let total = (grams.value * 20 + time.value / 17) * 3;
    total = Math.round(total);
    
    let response = document.getElementById('response');
    response.innerHTML = `Tu proyecto tiene un tiempo de impresión de ${time.value} minutos, pesa ${grams.value}g y es de color ${color.value}`;
    
    let totalaso = document.getElementById('totalaso');
    totalaso.innerHTML = `Tiene un costo de $${total}`;
});

let productos = [
    { id: 1, nombre: "Ajedrez", imagen: "./images/ajedrez.jpeg", precio: 5800, descripcion: "Tablero y piezas de ajedrez estilo moderno, colores blanco y negro tamaño mini" },
    { id: 2, nombre: "Cuadro 3D", imagen: "./images/arte.jpeg", precio: 6000, descripcion: "Cuadro decorativo con figura 3D, puedes hacer el tuyo personalizado!" },
    { id: 3, nombre: "Figura de buda", imagen: "./images/buda.jpeg", precio: 2000, descripcion: "Mini figura 3D de buda sentado" },
    { id: 4, nombre: "Lapicero columna", imagen: "./images/lapiceroCol.jpeg", precio: 5000, descripcion: "Lapicero estilo columna romana tamaño mediano" },
    { id: 5, nombre: "Llaveros columnitas", imagen: "./images/columnitas.jpeg", precio: 1500, descripcion: "Llaveros mini columnas romanas livianos con argolla incluida" },
    { id: 6, nombre: "Llavero corazón", imagen: "./images/corazones.jpeg", precio: 1500, descripcion: "Llaveros romántico estilo aniversario, ¡personaliza el tuyo!" },
    { id: 7, nombre: "Fundas para celular", imagen: "./images/funda.jpeg", precio: 6000, descripcion: "Fundas artísticas para distintos modelos de celulares a pedido" },
    { id: 8, nombre: "Maceta japonesa", imagen: "./images/japon.jpeg", precio: 5500, descripcion: "Maceta IKIGAI estilo japonesa para bonsái" },
    { id: 9, nombre: "Maquetas", imagen: "./images/maqueta.jpeg", precio: 2000, descripcion: "Elementos a escala para maquetas arquitectónicas" },
    { id: 10, nombre: "Llaveros mate", imagen: "./images/mates.jpeg", precio: 1500, descripcion: "Llaveros con forma de mate clásico con argolla" },
    { id: 11, nombre: "Porta sahumerio", imagen: "./images/sahumerio.jpeg", precio: 7000, descripcion: "Porta sahumerio invertido decorativo circular" },
    { id: 12, nombre: "Posa celular", imagen: "./images/soporte.jpeg", precio: 4000, descripcion: "Posa celular personalizable" }
];

const pintar = () => {
    const contenedor = document.getElementById("catalogo");
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `<img src=${producto.imagen}>
                            <div class="baja">
                                <h3>${producto.nombre}</h3>
                                <p>${producto.descripcion}</p>
                                <b>$${producto.precio}</b>
                            </div>`;
        contenedor.appendChild(div);
    });
};

pintar();