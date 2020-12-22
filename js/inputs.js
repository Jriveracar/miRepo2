function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

function valideKey(evt){
    
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
}
 
var total=0;

function sumar(valor) {
  total += valor*1.19;
  document.getElementById('txtTotal').value = total;
}

function restar(valor) {
  total-=valor*1.19;
  document.getElementById('txtTotal').value = total;
}


function mostrarTotal(){
  total = document.getElementById('txtTotal').value;
  nombre = document.getElementById('txtNombre').value;
  apellido = document.getElementById('txtApellido').value;
  alert(total + nombre+ apellido);

  //document.getElementById('nomCliente').value = nombre + " " + apellido;
  document.getElementById("nomCliente").innerHTML = "Sr: " + nombre + " " + apellido;
}