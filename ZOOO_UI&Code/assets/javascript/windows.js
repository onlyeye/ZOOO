/**
 * Created by liuyejun on 15/10/19.
 */


//w1

$(document).ready(function(){
    if($(".block_base").val()==1){
        alert("meet");
        $(".Base_0").animation();
    }

})


//w2

$(document).ready(function() {

    $("#FONT_RED").css("transition", "all");
    $("#FONT_RED").css("transition-duration","1s");
    $("#FONT_RED").css("transition-timing-function", "ease-in-out");

    $("#FONT_GREEN").css("transition", "all");
    $("#FONT_GREEN").css("transition-duration","1s");
    $("#FONT_GREEN").css("transition-timing-function", "ease-in-out");

    $("#FONT_BLUE").css("transition", "all");
    $("#FONT_BLUE").css("transition-duration","1s");
    $("#FONT_BLUE").css("transition-timing-function", "ease-in-out");

    $("#FONT_RED").children("img").css("transition", "all");
    $("#FONT_RED").children("img").css("transition-duration","1s");
    $("#FONT_RED").children("img").css("transition-timing-function", "ease-in-out");

    $("#FONT_GREEN").children("img").css("transition", "all");
    $("#FONT_GREEN").children("img").css("transition-duration","1s");
    $("#FONT_GREEN").children("img").css("transition-timing-function", "ease-in-out");

    $("#FONT_BLUE").children("img").css("transition", "all");
    $("#FONT_BLUE").children("img").css("transition-duration","1s");
    $("#FONT_BLUE").children("img").css("transition-timing-function", "ease-in-out");


    $("#FONT_RED").click(function(){
        $("#A").trigger("click");
        $("#A2").trigger("click");




    });

    $("#FONT_GREEN").click(function(){
        $("#B").trigger("click");
        $("#B2").trigger("click");

    });

    $("#FONT_BLUE").click(function(){
        $("#C").trigger("click");
        $("#C2").trigger("click");


    });

    $("#Base_0_img").click(function(){
        $ (".tg").scrollTop(450);

    });

    $("#Font_0_img").click(function(){
        $ (".tg").scrollTop(450);

    });

    $("#BASE_RED").click(function(){
        $("#A").trigger("click");
        $("#A2").trigger("click");
    });

    $("#BASE_GREEN").click(function(){
        $("#B").trigger("click");
        $("#B2").trigger("click");

    });

    $("#BASE_BLUE").click(function(){
        $("#C").trigger("click");
        $("#C2").trigger("click");

    });


});



