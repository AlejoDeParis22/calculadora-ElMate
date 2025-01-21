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



button.addEventListener('click',(e)=>{
    age = age.value
    neim = neim.value
    subtitle.innerHTML=(`Hola ${neim} me sorprende que tengas ${age} años, no estaras mintiendo, no?`)
    ingreso.className = 'not'
    principal.className = 'yes'
    let cliente = {'nobre':neim, 'edad':age}
    clientes.push(cliente)
    console.log(clientes)
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
