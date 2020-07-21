  
  alert("Bienvenidos a mi sitio");

    

    let confirma = 'Estas seguro de querer avanzar.';
    let resultado = confirm(confirma);
   
if (resultado){
    document.querySelector('h2').innerHTML = "Qué alegría que quieras continuar tu visita por este maravilloso sitio.";
    let nombre = prompt('Igrese su nombre');




    } else {
       document.querySelector('h2').innerHTML = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio";
    }