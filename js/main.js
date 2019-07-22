


$('html').attr('lang', userLang);
$(document).ready(function(){

    /*Open Cube info when it's click*/
    $("#cube-1").click(function(){      
        toogleCube("cube-1", "#ff595e");
    });
    $("#cube-2").click(function(){      
        toogleCube("cube-2", "#ffca3a");
    });
    $("#cube-3").click(function(){      
        toogleCube("cube-3", "#06d6a0");
    });
    $("#cube-4").click(function(){      
        toogleCube("cube-4", "#1982c4");
    });
    $("#cube-5").click(function(){      
        toogleCube("cube-5", "#6a4c93");
    });
    $("#cube-6").click(function(){      
        toogleCube("cube-6", "#8ac926");
    });
    /* Hide the cube info whe is click, or when escape key is pressed*/
    $("#complete-cube").click(function(){hideCompleteCube()});

    $(document).on('keydown', function(event) {
        if (event.key == "Escape") {
            hideCompleteCube();
        }
    });

    /*Allow to open Cubes with Enter Key*/
    $("#cube-1").on('keydown', function(event) {
        if (event.key == "Enter") {
            toogleCube("cube-1", "#ff595e");
        }
    });
    $("#cube-2").on('keydown', function(event) {
        if (event.key == "Enter") {
            toogleCube("cube-2", "#ffca3a");
        }
    });
    $("#cube-3").on('keydown', function(event) {
        if (event.key == "Enter") {
            toogleCube("cube-3", "#06d6a0");
        }
    });
    $("#cube-4").on('keydown', function(event) {
        if (event.key == "Enter") {
            toogleCube("cube-4", "#1982c4");
        }
    });
    $("#cube-5").on('keydown', function(event) {
        if (event.key == "Enter") {
            toogleCube("cube-5", "#6a4c93");
        }
    });
    $("#cube-6").on('keydown', function(event) {
        if (event.key == "Enter") {
            toogleCube("cube-6", "#8ac926");
        }
    });
    /*Language Buttons*/
    $('#setEn').click(function(){changeLang('en')});
    $('#setEs').click(function(){changeLang('es')});
    /*Font Buttons*/
    $('#standarFont').click(function(){
        setFont("'Montserrat', sans-serif");
        $("#dyslexicFont").show();
        $('#standarFont').hide();
    });
    $('#dyslexicFont').click(function(){
        setFont("OpenDyslexic");
        $("#dyslexicFont").hide();
        $('#standarFont').show();
    });

});

function hideCompleteCube (){
        $("#info-cube-1").addClass('hide-info').removeClass('show-info');
        $("#info-cube-2").addClass('hide-info').removeClass('show-info');
        $("#info-cube-3").addClass('hide-info').removeClass('show-info');
        $("#info-cube-4").addClass('hide-info').removeClass('show-info');
        $("#info-cube-5").addClass('hide-info').removeClass('show-info');
        $("#info-cube-6").addClass('hide-info').removeClass('show-info');
        $("#complete-cube").css({'z-index': "-1", "background": "transparent"})
        $('main').css({'grid-gap': '15px'});
}

function toogleCube(cube, background){
    $('main').css({'grid-gap': '0'});
    $("#complete-cube").css({"background": background,'z-index': "999"}); 
    $("#info-"+cube).addClass('show-info').removeClass('hide-info');
    rechargeMeters();
}
function rechargeMeters(){
    $(".meter > span").each(function() {
        $(this)
          .data("origWidth", $(this).width())
          .width(0)
          .animate({
            width: $(this).data("origWidth") // or + "%" if fluid
          }, 1200);
      });
}
function changeLang(language){
    $("html").attr('lang', language);
}
function setFont(font){
    $('*').css({'font-family': font});
}
