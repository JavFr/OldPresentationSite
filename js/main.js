$(document).ready(function(){
    /*
    $("#complete-cube").click(function(){
        $("#complete-cube").css({'visibility': "hidden"})
        $("#cube-2").removeClass('all-as-cube-1');
        $("#cube-3").removeClass('all-as-cube-1');
        $("#cube-4").removeClass('all-as-cube-1');
        $("#cube-5").removeClass('all-as-cube-1');
        $("#cube-6").removeClass('all-as-cube-1');
        $('main').css({'grid-gap': '20px'});
    });
    $("#cube-1").click(function(){      
        $("#cube-2").addClass('all-as-cube-1');
        $("#cube-3").addClass('all-as-cube-1');
        $("#cube-4").addClass('all-as-cube-1');
        $("#cube-5").addClass('all-as-cube-1');
        $("#cube-6").addClass('all-as-cube-1');
        $('main').css({'grid-gap': '0'});
        $("#complete-cube").css({"background": "#ff595e", 'visibility': "visible"})
    });
    $("#cube-2").click(function(){      
        $("#cube-1").addClass('all-as-cube-2');
        $("#cube-3").addClass('all-as-cube-2');
        $("#cube-4").addClass('all-as-cube-2');
        $("#cube-5").addClass('all-as-cube-2');
        $("#cube-6").addClass('all-as-cube-2');
        $('main').css({'grid-gap': '0'});
        $("#complete-cube").css({"background": "#ffca3a", 'visibility': "visible"})
    });
    */
   $("#cube-1").click(function(){      
    $('main').css({'grid-gap': '0'});
    $("#complete-cube").css({"background": "#ff595e", 'z-index': "999"});
    $("#info-cube-1").addClass('show-info').removeClass('hide-info');
   });
   $("#cube-2").click(function(){      
    $('main').css({'grid-gap': '0'});
    $("#complete-cube").css({"background": "#ffca3a", 'z-index': "999"});
    $("#info-cube-2").addClass('show-info').removeClass('hide-info');
   });
   $("#cube-3").click(function(){      
    $('main').css({'grid-gap': '0'});
    $("#complete-cube").css({"background": "#06d6a0", 'z-index': "999"});
    $("#info-cube-3").addClass('show-info').removeClass('hide-info');
   });
   $("#cube-4").click(function(){      
    $('main').css({'grid-gap': '0'});
    $("#complete-cube").css({"background": "#1982c4", 'z-index': "999"});
    $("#info-cube-4").addClass('show-info').removeClass('hide-info');
   });
   $("#cube-5").click(function(){      
    $('main').css({'grid-gap': '0'});
    $("#complete-cube").css({"background": "#6a4c93", 'z-index': "999"});
    $("#info-cube-5").addClass('show-info').removeClass('hide-info');
   });
   $("#cube-6").click(function(){      
    $('main').css({'grid-gap': '0'});
    $("#complete-cube").css({"background": "#8ac926", 'z-index': "999"});
    $("#info-cube-6").addClass('show-info').removeClass('hide-info');
   });
    $("#complete-cube").click(function(){
        $("#info-cube-1").addClass('hide-info').removeClass('show-info');
        $("#info-cube-2").addClass('hide-info').removeClass('show-info');
        $("#info-cube-3").addClass('hide-info').removeClass('show-info');
        $("#info-cube-4").addClass('hide-info').removeClass('show-info');
        $("#info-cube-5").addClass('hide-info').removeClass('show-info');
        $("#info-cube-6").addClass('hide-info').removeClass('show-info');
        $("#complete-cube").css({'z-index': "-1", "background": "transparent"})
        $('main').css({'grid-gap': '15px'});
    });
});

