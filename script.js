

function encriptar(){
    var texto = document.getElementById("texto").value;
    var textoValido = /^[a-zA-z\s]+$/; //se crea una variable con una expresion regular
    var textoEncriptado = texto
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");

    if (texto.length == "")  {
        Swal.fire({
            icon: 'error',
            text: 'Ingresa una palabra o un texto',
                })          
    }else{
        if (!textoValido.test(texto)) {
            Swal.fire({ 
                icon: 'warning',
                text: 'No se permiten acéntos ni caracteres especiales',
            })
        }else{
                Swal.fire({ 
                    icon: 'success',
                    text: 'Texto Encriptado con Exito',
                })
                document.getElementById("mensaje").value = textoEncriptado;
                document.getElementById("texto").value = "";
        }

    } 
}
                       
function desencriptar(){
    var texto = document.getElementById("texto").value;
    var textoValido = /^[a-zA-z\s]+$/;
    var textoDesencriptado = texto
                            .replace(/ai/img, "a")
                            .replace(/enter/img, "e")
                            .replace(/imes/img, "i")
                            .replace(/ober/img, "o")
                            .replace(/ufat/img, "u");

   if (texto.length == "")  {
        Swal.fire({
            icon: 'error',
            text: 'Ingresa una palabra o un texto',
                })          
    }else{
        if (!textoValido.test(texto)) {
            Swal.fire({ 
                icon: 'warning',
                text: 'No se permiten acéntos ni caracteres especiales',
            })
        }else{
                Swal.fire({ 
                    icon: 'success',
                    text: 'Texto Desencriptado con Exito',
                })
                document.getElementById("mensaje").value = textoDesencriptado;
                document.getElementById("texto").value = "";
        }

    } 

}

function limpiar(){
    var texto = document.getElementById("texto").value = "";
    var mensaje = document.getElementById("mensaje").value = "";

}

function copiar(){
    var copiarTexto = document.getElementById("mensaje");
    var mensaje = document.getElementById("mensaje").value;

    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999);
    document.execCommand("copy");

    Swal.fire({
        icon: 'success',
        text: 'Texto copiado al portapapeles',
            })
    document.getElementById("mensaje").value = "";

    if(mensaje.length == ""){
        Swal.fire({
            icon: 'error',
            text: 'No hay texto para copiar',
                })
    }

}


function enableDarkMode(){
    var main_body = document.body;
    var estado = event.target.checked;
    main_body.classList.toggle("dark-mode")

    if(estado == true){
        button[copiar] = '<img class="logo" src="" alt="" >';
    }
}
