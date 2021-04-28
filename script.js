$(function(){
    $("#brown").click(function(){
        $("#text").css("color", "brown");
    });
    $("#burlywood").click(function(){
        $("#text").css("color", "burlywood");
    });
    $("#cadetblue").click(function(){
        $("#text").css("color", "cadetblue");
    }); 
});



// OR en stockant l'id de chaque div pour éviter les répétitions
/*
$('.color').click(function(){
    // Variable qui récupère la valeur de l'attribut id pour chaque div .color
    var divColor = $(this).attr('id');
    // Modification de la couleur du texte suivant l'id ciblé dans la variable
    $('#text').css('color', divColor);
});
*/



// En JS vanilla, on aurait : 
/*
let text = document.getElementById("text");
let div1 = document.getElementById("brown");
let div2 = document.getElementById("burlywood");
let div3 = document.getElementById("cadetblue");


div1.addEventListener("click", () => {
    text.style.color = "brown";
});

div2.addEventListener("click", () => {
    text.style.color = "burlywood";
});

div3.addEventListener("click", () => {
    text.style.color = "cadetblue";
});*/