$(function(){
    // Augmenter la hauteur de la div
   $('#increaseHeight').click(function(){
       $('#coloredDiv').css('height', '+=50px');
   });
   // Diminuer sa hauteur
   $('#decreaseHeight').click(function(){
    $('#coloredDiv').css('height', '-=50px');
});
    // La faire disparaître
    $('#disappear').click(function(){
        $('#coloredDiv').hide();
    });
    // Changer sa couleur
    $('#changeColor').click(function(){
        $('#coloredDiv').css('background-color', 'cadetblue');
    });
    // Revenir à la couleur initiale
    $('#resetColor').click(function(){
        $('#coloredDiv').css('background-color', 'burlywood');
    });
    // La faire réapparaître 
    $('#reappear').click(function(){
        $('#coloredDiv').show();
    });
});