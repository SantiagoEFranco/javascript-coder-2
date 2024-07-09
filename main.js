function saludar(){
    let nombre = prompt("Ingresa tu nombre aqui")
    if(nombre == ""){
        alert("Vuelve a ingresar tu nombre")
    }else{
        alert("Bienvenidx! " + nombre + " a continuacion te mostraremos el menú")
    }
}
saludar()

const hamburguesas = [
    {nombre:"CheeseBurguer" , precio:9800 , id:1},
    {nombre:"TripleBacon" , precio:10000, id:2}, 
    {nombre:"Tradicional" , precio:8500, id:3},
    {nombre:"Napolitana" , precio:11500, id:4},
    {nombre:"DelBarrio" , precio:8500, id:5},
    {nombre:"ACAB" , precio:12000, id:6},
    {nombre:"DobleCheddar" , precio:9200, id:7},
    {nombre:"Snake" , precio:11400, id:8}
]


function showMenu(){
   for(const stock of hamburguesas){  
    alert("Opcion n°"+stock.id+" - "+stock.nombre + ": " +  stock.precio )  
} 
}

showMenu()


function comprar (){
    const opcion = prompt("ingrese el N° de su opcion aqui")
    const resultado = hamburguesas.find((burguer)=> burguer.id == opcion)
    alert("Se agregó " + resultado.nombre + " al carrito de compras")
   const papas = prompt("Quieres que te lo enviemos?" + " ingresa SI o NO")
   if(papas == "si"){
     alert("el valor de su compra con envio es de : " + parseInt(resultado.precio += 800)+ " Muchas gracias!!")
   }else{
    alert("Ok el valor de su compra es de: " + resultado.precio + " Muchas gracias!!")
   }
}

comprar()
























