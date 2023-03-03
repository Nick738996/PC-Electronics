function calcularVenta(){  
    var valorCompra = parseInt(document.getElementById("valor-compra").value);
    console.log(valorCompra);
    var porcentaje = parseInt(document.getElementById("valor-utilidad").value);
    var porcentajeReal = (porcentaje/100);
    const iva = 0.19;
    var valorIva = valorCompra*iva;
    var ganancia = valorCompra*porcentajeReal;
    var valorVenta = parseInt(valorCompra+ganancia+valorIva);
    console.log(valorVenta);
    document.getElementById("valor-venta").value = valorVenta;
    document.getElementById("ganancia").value = ganancia;
}


function calcularEquivalencia(){
    var unidadPartida = document.getElementById("unidad-partida").value;
    var valorConvertir = parseFloat(document.getElementById("datos-convertir").value);


    if(unidadPartida=="Byte"){
    document.getElementById("valor-byte").value = valorConvertir; 
    document.getElementById("valor-kilobyte").value = valorConvertir/1000; 
    document.getElementById("valor-megabyte").value = valorConvertir/1000000; 
    document.getElementById("valor-gigabyte").value = valorConvertir/1000000000; 
    document.getElementById("valor-terabyte").value = valorConvertir/1000000000000; 
    } 
    if(unidadPartida=="Kilobyte"){
    document.getElementById("valor-byte").value = valorConvertir*1000; 
    document.getElementById("valor-kilobyte").value = valorConvertir; 
    document.getElementById("valor-megabyte").value = valorConvertir/1000; 
    document.getElementById("valor-gigabyte").value = valorConvertir/1000000; 
    document.getElementById("valor-terabyte").value = valorConvertir/1000000000;    
    }
    if(unidadPartida=="Megabyte"){
        document.getElementById("valor-byte").value = valorConvertir*1000000; 
        document.getElementById("valor-kilobyte").value = valorConvertir*1000; 
        document.getElementById("valor-megabyte").value = valorConvertir; 
        document.getElementById("valor-gigabyte").value = valorConvertir/1000; 
        document.getElementById("valor-terabyte").value = valorConvertir/1000000;    
    }
    if(unidadPartida=="Gigabyte"){
        document.getElementById("valor-byte").value = valorConvertir*1000000000; 
        document.getElementById("valor-kilobyte").value = valorConvertir*1000000; 
        document.getElementById("valor-megabyte").value = valorConvertir*1000; 
        document.getElementById("valor-gigabyte").value = valorConvertir; 
        document.getElementById("valor-terabyte").value = valorConvertir/1000;    
    }
    if(unidadPartida=="Terabyte"){
        document.getElementById("valor-byte").value = valorConvertir*1000000000000; 
        document.getElementById("valor-kilobyte").value = valorConvertir*1000000000; 
        document.getElementById("valor-megabyte").value = valorConvertir*1000000; 
        document.getElementById("valor-gigabyte").value = valorConvertir*1000; 
        document.getElementById("valor-terabyte").value = valorConvertir;    
    }
    else if(unidadPartida==""){
        alert("Elija una unidad de partida");
    }
}

let limpiarBoton = document.getElementById("limpiar");
let inputs = document.querySelectorAll("input");

limpiarBoton.addEventListener("click", () => {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");
});
    
