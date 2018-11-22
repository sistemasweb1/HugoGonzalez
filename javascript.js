/*************************************************/
//Esto ayuda a mostrar informacion diferente en la misma pagina

//var estadoActual;

/*function onload(){
    document.getElementById("nombreEstado").innerHTML = estadoActual;
    
    HTMLDocument.apply
}*/

function change(change){
    var estados = [
        "Todos los artículos",      //00
        "Aguascalientes",           //01
        "Baja California Norte",    //02
        "Baja California Sur",      //03
        "Campeche",                 //04
        "Coahuila",                 //05
        "Colima",                   //06
        "Chiapas",                  //07
        "Chihuahua",                //08
        "Distrito Federal",         //09
        "Durango",                  //10
        "Guanajuato",               //11
        "Guerrero",                 //12
        "Hidalgo",                  //13
        "Jalisco",                  //14
        "México",                   //15
        "Michoacán",                //16
        "Morelos",                  //17
        "Nayarit",                  //18
        "Nuevo León",               //19
        "Oaxaca",                   //20
        "Puebla",                   //21
        "Querétaro",                //22
        "Quintana Roo",             //23
        "San Luis Potosí",          //24
        "Sinaloa",                  //25
        "Sonora",                   //26
        "Tabasco",                  //27
        "Tamaulipas",               //28
        "Tlaxcala",                 //29
        "Veracruz",                 //30
        "Yucatán",                  //31
        "Zacatecas",                //32
        "Artículos varios"          //33
    ]
    
    estadoActual = estados[change];
    document.getElementById("nombreEstado").innerHTML = estadoActual;
    
}

/*************************************************/
//Galeria

var slideIndex = 0;
showSlides(slideIndex);


//Next/previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    //captionText.innerHTML = dots[slideIndex-1].alt;
    
    var text;
    switch(n){
        //Default Inicio
        case 0:
            text = "Selecciona un artículo";
        break;
            
        //Imagen 1
        case 1: 
            text = showPrice(5) + "Incluye: <br>" + showElements(1);
        break;
        
        //Imagen 2
        case 2:
            text = showPrice(5) + "Incluye: <br>" + showElements(2);
        break;
        
        //Imagen 3
        case 3:
            text = showPrice(4) + "Incluye: <br>" + showElements(3);
        break;
        
        //Imagen 4
        case 4:
            text = showPrice(4) + "Incluye: <br>" + showElements(2);
        break;
            
        //Imagen 5
        case 5:
            text = showPrice(5) + "Incluye: <br>" + showElements(1);
        break;
            
        //Imagen 6
        case 6:
            text = showPrice(5) + "Incluye: <br>" + showElements(2);
        break;
        
        //Imagen 7
        case 7:
            text = showPrice(4) + "Incluye: <br>" + showElements(1);
        break;
            
        //Imagen 8
        case 8:
            text = showPrice(4) + "Incluye: <br>" + showElements(2);
        break;
            
        //Imagen 9
        case 9:
            text = showPrice(4) + "Incluye: <br>" + showElements(1);
        break;
            
        //Imagen 10
        case 10:
            text = showPrice(6) + "Incluye: <br>" + showElements(2);
        break;
            
        case 12:
            text = showPrice(1);
        break;
    }
    document.getElementById("textoResultado").innerHTML = text;
    document.getElementById("informacion").style.opacity = 1; 
}

/*************************************************/
//Vestuario

function showPrice(p){
    var precio = [
        "15$",      //0
        "20$",      //1
        "25$",      //2
        "50$",      //3
        "100$",     //4
        "150$",     //5
        "200$"];    //6
    var text;

    text = "Costo: " + precio[p] + "<br>";
    return text;
}

function showElements(n){
    var i, tamano;
    var text; //Es donde se va a guardar el texto final
    var elementos = [
        "falda",        //0
        "blusa",        //1
        "tocado",       //2
        "pantalon",     //3
        "sombrero",     //4
        "camisa",       //5
        "chaleco"];     //6
    tamano = elementos.length;
    
    
    text = "<ul style='list-style-type: none'>";
    switch(n){
        //Pantalon, sombrero y cammisa
        case 1:
            for(i = 0; i < tamano; i++){
                //Pantalon
                if(i == 3){
                    text += "<li>" + elementos[i] + "</li>";
                }
                
                //Sombrero
                if(i == 4){
                    text += "<li>" + elementos[i] + "</li>";
                }
                
                //Camisa
                if(i == 5){
                    text += "<li>" + elementos[i] + "</li>";
                }
            }
        break;
        
        //Falda, blusa y tocado
        case 2:
            for(i = 0; i < tamano; i++){
                //Falda
                if(i == 0){
                    text += "<li>" + elementos[i] + "</li>";
                }
                
                //Blusa
                if(i == 1){
                    text += "<li>" + elementos[i] + "</li>";
                }
                
                //Tocado
                if(i == 2){
                    text += "<li>" + elementos[i] + "</li>";
                }
            }
        break;
        
        //Pantalon, sombrero, camisa y chaleco
        case 3:
            for(i = 0; i < tamano; i++){
                //Pantalon
                if(i == 3){
                    text += "<li>" + elementos[i] + "</li>";
                }
                
                //Sombrero
                if(i == 4){
                    text += "<li>" + elementos[i] + "</li>";
                }
                
                //Camisa
                if(i == 5){
                    text += "<li>" + elementos[i] + "</li>";
                }
                
                //Chaleco
                if(i == 6){
                    text += "<li>" + elementos[i] + "</li>";
                }
            }
        break;
    }
    text += "<ul>";
    return text;
}

/*************************************************/
//Transparencia de la informacion

function transparencia(){ 
    document.getElementById("informacion").style.opacity = 0.3;    
}
