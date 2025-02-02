let clientes=[
    {nombre:'Alejo', edad:22},
    {nombre:'Carlos', edad:45},
    {nombre:'Robin', edad:30}
]

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
    for (const user of clientes){
        guardar (neim, JSON.stringify(cliente))
    }
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




