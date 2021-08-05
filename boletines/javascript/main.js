

//DOM
//querySelector / querySelectorAll
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
  console.log(link);
});


let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener('click',function(){
    console.log(this);
  })
});
*/

//Obtener los objetos de la clase close

let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link) {

  //Agregar un evento click a cada uno de ellos.
  link.addEventListener("click", function(ev){
    ev.preventDefault();
      let content = document.querySelector('.content');


    //Quitarle las clases de animacion que ya tiene
    content.classList.remove('fadeInDown');
    content.classList.remove('animate__fadeInDown');

    //Agregar clases para animar su salida  fadeOutUp
    content.classList.add('fadeOutUp');
    content.classList.add('animate__fadeOutUp');


    setTimeout(function(){
    location.href = "/";
    },600);




    return false;
  });

});
