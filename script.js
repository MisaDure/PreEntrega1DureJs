

function carrito(){
    let pedido = prompt('Productos en stock : 1. CAFE 2 AGUA 3. AZUCAR \nEscribír "COMPRAR" para finalizar');
    let azucar = 200;
    let cafe = 150;
    let agua = 100
    let carrito = 0;
    let cantidadTotal = 0;
    let cantidadAgua = 0;
    let cantidadCafe = 0;
    let cantidadAzucar = 0;

    while(pedido != "COMPRAR"){
        if(pedido == "AZUCAR"){
            carrito = carrito + azucar;
            cantidadAzucar = cantidadAzucar + 1;
            cantidadTotal = cantidadTotal + 1;
        }else if(pedido == "AGUA"){
            carrito = carrito + agua;
            cantidadAgua = cantidadAgua + 1;
            cantidadTotal = cantidadTotal + 1;
        }else if(pedido == "CAFE"){
            carrito = carrito + cafe;
            cantidadCafe = cantidadCafe + 1;
            cantidadTotal = cantidadTotal + 1;
        }else{ 
            alert("Sin stock");
        }

        alert("Agua x" + cantidadAgua + "\nCafe x" + cantidadCafe + "\nAzucar x" + cantidadAzucar + "\n\nTotal: " + carrito +" \nProductos " + cantidadTotal);
        
        pedido = prompt('Ingresar otro producto, para finalizar la compra escribir "COMPRAR"')
    }
}

carrito();