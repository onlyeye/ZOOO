/**
 * Created by liuyejun on 15/10/12.
 */


//TABClick
$(document).ready(function(){
    $("#one").trigger("click");
});

function doClick(key){
    for(var i=1; i<=3 ;i++) {
        document.getElementById("panel" + i).style.display = "none";
    }
    document.getElementById("panel"+ key).style.display = "";
}


// ABC.click
$(document).ready(function(){
        $("#A").click(
            function(){
                $ (".tg").scrollTop(0);
                ABC_st="a";
                document.getElementById("A_label").style.color = "white";
                document.getElementById("B_label").style.color = "#fb8642";
                document.getElementById("C_label").style.color = "#fb8642";

                //$("#canvas-frame-A").css("opacity","1")
                //$("#canvas-frame-B").css("opacity","0")
                //$("#canvas-frame-C").css("opacity","0")

                $("#canvas-frame-A").css("display","")
                $("#canvas-frame-B").css("display","none")
                $("#canvas-frame-C").css("display","none")

                $("#FONT_RED").children("img").css("width", "40px");
                $("#FONT_RED").css("left", "125px");
                $("#FONT_RED").css("top", "65px");

                $("#FONT_GREEN").children("img").css("width", "30px");
                $("#FONT_GREEN").css("left", "50px");
                $("#FONT_GREEN").css("top", "101px");

                $("#FONT_BLUE").children("img").css("width", "30px");
                $("#FONT_BLUE").css("left", "200px");
                $("#FONT_BLUE").css("top", "101px");



            }
        );
        $("#B").click(
            function(){
                $ (".tg").scrollTop(181);
                ABC_st="b";
                document.getElementById("B_label").style.color = "white";
                document.getElementById("A_label").style.color = "#fb8642";
                document.getElementById("C_label").style.color = "#fb8642";

                //$("#canvas-frame-A").css("opacity","0")
                //$("#canvas-frame-B").css("opacity","1")
                //$("#canvas-frame-C").css("opacity","0")

                $("#canvas-frame-A").css("display","none")
                $("#canvas-frame-B").css("display","")
                $("#canvas-frame-C").css("display","none")

                $("#FONT_GREEN").children("img").css("width", "40px");
                $("#FONT_GREEN").css("left", "125px");
                $("#FONT_GREEN").css("top", "65px");

                $("#FONT_RED").children("img").css("width", "30px");
                $("#FONT_RED").css("left", "200px");
                $("#FONT_RED").css("top", "101px");

                $("#FONT_BLUE").children("img").css("width", "30px");
                $("#FONT_BLUE").css("left", "50px");
                $("#FONT_BLUE").css("top", "101px");




            }
        );
        $("#C").click(
            function(){
                $ (".tg").scrollTop(362);
                ABC_st="c";
                document.getElementById("C_label").style.color = "white";
                document.getElementById("A_label").style.color = "#fb8642";
                document.getElementById("B_label").style.color = "#fb8642";


                //$("#canvas-frame-A").css("opacity","0")
                //$("#canvas-frame-B").css("opacity","0")
                //$("#canvas-frame-C").css("opacity","1")

                $("#canvas-frame-A").css("display","none")
                $("#canvas-frame-B").css("display","none")
                $("#canvas-frame-C").css("display","")

                $("#FONT_GREEN").children("img").css("width", "30px");
                $("#FONT_GREEN").css("left", "200px");
                $("#FONT_GREEN").css("top", "101px");

                $("#FONT_RED").children("img").css("width", "30px");
                $("#FONT_RED").css("left", "50px");
                $("#FONT_RED").css("top", "101px");

                $("#FONT_BLUE").children("img").css("width", "40px");
                $("#FONT_BLUE").css("left", "125px");
                $("#FONT_BLUE").css("top", "65px");


            }
        );
    }
);

$(document).ready(function(){
        $("#A2").click(
            function(){
                ABC_st2="a";
                $ (".tg").scrollTop(0);
                document.getElementById("A_label_2").style.color = "white";
                document.getElementById("B_label_2").style.color = "#fb8642";
                document.getElementById("C_label_2").style.color = "#fb8642";

                //$("#canvas-frame-A").css("opacity","1")
                //$("#canvas-frame-B").css("opacity","0")
                //$("#canvas-frame-C").css("opacity","0")

                $("#canvas-frame-A").css("display","")
                $("#canvas-frame-B").css("display","none")
                $("#canvas-frame-C").css("display","none")

                $("#FONT_RED").children("img").css("width", "40px");
                $("#FONT_RED").css("left", "125px");
                $("#FONT_RED").css("top", "65px");

                $("#FONT_GREEN").children("img").css("width", "30px");
                $("#FONT_GREEN").css("left", "50px");
                $("#FONT_GREEN").css("top", "101px");

                $("#FONT_BLUE").children("img").css("width", "30px");
                $("#FONT_BLUE").css("left", "200px");
                $("#FONT_BLUE").css("top", "101px");



            }
        );
        $("#B2").click(
            function(){

                ABC_st2="b";
                $ (".tg").scrollTop(181);
                document.getElementById("B_label_2").style.color = "white";
                document.getElementById("A_label_2").style.color = "#fb8642";
                document.getElementById("C_label_2").style.color = "#fb8642";

                //$("#canvas-frame-A").css("opacity","0")
                //$("#canvas-frame-B").css("opacity","1")
                //$("#canvas-frame-C").css("opacity","0")

                $("#canvas-frame-A").css("display","none")
                $("#canvas-frame-B").css("display","")
                $("#canvas-frame-C").css("display","none")

                $("#FONT_GREEN").children("img").css("width", "40px");
                $("#FONT_GREEN").css("left", "125px");
                $("#FONT_GREEN").css("top", "65px");

                $("#FONT_RED").children("img").css("width", "30px");
                $("#FONT_RED").css("left", "200px");
                $("#FONT_RED").css("top", "101px");

                $("#FONT_BLUE").children("img").css("width", "30px");
                $("#FONT_BLUE").css("left", "50px");
                $("#FONT_BLUE").css("top", "101px");




            }
        );
        $("#C2").click(
            function(){

                ABC_st2="c";
                $ (".tg").scrollTop(362);
                document.getElementById("C_label_2").style.color = "white";
                document.getElementById("A_label_2").style.color = "#fb8642";
                document.getElementById("B_label_2").style.color = "#fb8642";

                //$("#canvas-frame-A").css("opacity","0")
                //$("#canvas-frame-B").css("opacity","0")
                //$("#canvas-frame-C").css("opacity","1")

                $("#canvas-frame-A").css("display","none")
                $("#canvas-frame-B").css("display","none")
                $("#canvas-frame-C").css("display","")

                $("#FONT_GREEN").children("img").css("width", "30px");
                $("#FONT_GREEN").css("left", "200px");
                $("#FONT_GREEN").css("top", "101px");

                $("#FONT_RED").children("img").css("width", "30px");
                $("#FONT_RED").css("left", "50px");
                $("#FONT_RED").css("top", "101px");

                $("#FONT_BLUE").children("img").css("width", "40px");
                $("#FONT_BLUE").css("left", "125px");
                $("#FONT_BLUE").css("top", "65px");





            }
        );

        $("#BG_radio").click(function(){
            if($("#BG_radio").attr("checked")){
                $("#BG_radio").attr("checked",false);
                $("#BG_radio_label_out").css("background-color","white")
                $(".BG_radio_label").css("color","#fb7a30")

            }else{
                $("#BG_radio").attr("checked",true);
                $("#BG_radio_label_out").css("background-color","#fb7a30")
                $(".BG_radio_label").css("color","white")
            }
        })
    }
);