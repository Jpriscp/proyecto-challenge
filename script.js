var textoEntrada = document.getElementById("texto-entrada");
var botonEncriptar = document.getElementById("boton-encriptar");
var botonDesencriptar = document.getElementById("boton-desencriptar");
var textoSalida = document.getElementById("texto-salida");
var botonCopiar = document.getElementById("boton-copiar");
var imagen = document.getElementById("figura");
var mensajeVacio = document.getElementById("mensaje-vacio");

function encriptar() {
    // Logica para encriptar el mensaje
    var mensaje = textoEntrada.value;

    if (validarMensaje(mensaje)) {
        var textoEncriptado = '';
        for (let i = 0; i < mensaje.length; i++) {
            switch (mensaje[i]) {
                case 'a':
                textoEncriptado +="1";
                break;
                case 'o':
                textoEncriptado += "2";
                break;
                case 'e':
                textoEncriptado += "3";
                break;
                case 'i':
                textoEncriptado += "4";
                break;
                case 'u':
                textoEncriptado += "5";
                break;
                default:
                textoEncriptado += mensaje[i];
            }
        }
        imagen.style.display = 'none';
        mensajeVacio.style.display = 'none'
        textoSalida.style.display = '';
        botonCopiar.style.display = '';
        
        textoSalida.textContent = textoEncriptado;
    } else  {
        alert("No se permiten mayusculas o caracteres especiales");
    }

    
}

function desencriptar() {
    var mensaje = textoEntrada.value;
    var mensajeDesencriptado = '';

    for (let i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
            case '1':
            mensajeDesencriptado +="a";
            break;
            case '2':
            mensajeDesencriptado += "o";
            break;
            case '3':
             mensajeDesencriptado += "e";
            break;
            case '4':
             mensajeDesencriptado += "i";
            break;
            case '5':
           mensajeDesencriptado += "u";
            break;
            default:
            mensajeDesencriptado += mensaje[i];
        }
    }
    textoSalida.textContent = mensajeDesencriptado;
}

function validarMensaje(mensaje) {
    const regex = /^[a-z0-9\s]+$/;
    if (regex.test(mensaje)) {
        return true;
    } else {
         return false;
    }
}

function copiar() {
    navigator.clipboard.writeText(textoSalida.textContent);
}

botonEncriptar.addEventListener('click', encriptar)
botonDesencriptar.addEventListener('click', desencriptar)
botonCopiar.addEventListener('click', copiar)
