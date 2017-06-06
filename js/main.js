function accion() {
    //alert("funciona");
   	var elemento = Array.from(document.getElementsByClassName("normal"));
   	elemento.forEach(function(el){
	el.setAttribute("class", "normal01");
  });
}

function principal() {
    var elemento= document.getElementById("detalle");
    elemento.addEventListener("click", accion);
};

principal();
