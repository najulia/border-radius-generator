var rect = document.querySelector('div');
var span = document.querySelector('.val');
var textoResultado = document.querySelector('#resultado');
var darkBtn = document.querySelector(".dark-theme");



var inputs = document.querySelectorAll("input");
var topleft = document.querySelector('#top-left')
var topright = document.querySelector('#top-right')
var bottomleft = document.querySelector('#bottom-left')
var bottomright = document.querySelector('#bottom-right')
var all = document.querySelector('#all');


 all.addEventListener("change", function(){    
    var valor = all.value; 
    rect.style.borderRadius = valor + 'px';

    var valor = all.value; 
    var resultado = 'border-radius: ' + valor +'px;' 
    textoResultado.innerHTML = resultado; 
    
    var valor = all.value; 
    var texto = valor + 'px' ; 
    span.innerHTML = texto; 
}); 


topright.addEventListener("change", function(){    
    var valor =topright.value; 
    rect.style.borderTopRightRadius = valor + 'px';

    var valor =topright.value; 
    var texto = valor + 'px' ; 
    span.innerHTML = texto; 
    mostraCodigo();
}); 

topleft.addEventListener("change", function(){    
    var valor =topleft.value; 
    rect.style.borderTopLeftRadius = valor + 'px';
    
    var valor =topleft.value; 
    var texto = valor + 'px' ; 
    span.innerHTML = texto; 
    mostraCodigo();
}); 

bottomright.addEventListener("change", function(){    
    var valor =bottomright.value; 
    rect.style.borderBottomRightRadius = valor + 'px';

    var valor =bottomright.value; 
    var texto = valor + 'px' ; 
    span.innerHTML = texto; 
    mostraCodigo();
}); 

bottomleft.addEventListener("change", function(){    
    var valor =bottomleft.value; 
    rect.style.borderBottomLeftRadius = valor + 'px';

    var valor = bottomleft.value; 
    var texto = valor + 'px' ; 
    span.innerHTML = texto; 
    mostraCodigo();
}); 

function mostraCodigo(){

    valores = [
        topleft.value + 'px',
        topright.value + 'px', 
        bottomleft.value + 'px', 
        bottomright.value + 'px', 

    ];
    
    var texto = 'border-radius: ' + valores.join(" ") + ';'; 
    textoResultado.innerHTML = texto; 
    
}

darkBtn.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    document.body.style.transition = '1s'; 
});