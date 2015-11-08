/**
 * Created by liuyejun on 15/10/17.
 */



//Head.Slider
$(document).ready(function(){
    $(".HeadInput").change(function(){
        if($(".HeadInput").val()==0){
            $("#down1").css("color","#ff8933");
            $("#up1").css("color","#ebebeb");
        }else if($(".HeadInput").val()==1){
            $("#down1").css("color","#ebebeb");
            $("#up1").css("color","#ebebeb");
        }else{
            $("#down1").css("color","#ebebeb");
            $("#up1").css("color","#ff8933");
    }

    });
});

//Head.button
$(document).ready(function () {
        $(".Head_plus").click(
            function() {
                var newElems = document.createElement("div");  //新建div
                var st = $(".HeadInput").val();             //里面的文字
                newElems.classList.add("block");            //设置类
                newElems.id = "block_" + blockNum;          //设置ID
                var txt = $(".CurrentTime");                //获得位置

                if (txt.val() == "") {
                    alert("You Should Choose Time!")
                }
                else {
                    $(".head_tl_" + ABC_st).prepend(newElems);  //将div 放入
                    if (ABC_st == "a") {
                        newElems.classList.add("block_" + ABC_st + "_head");
                        HeadNum_a++;
                    } else if (ABC_st == "b") {
                        newElems.classList.add("block_" + ABC_st + "_head");
                        HeadNum_b++;
                    } else {
                        newElems.classList.add("block_" + ABC_st + "_head");
                        HeadNum_c++;
                    }
                    newElems.style.position = "absolute";
                    var p = txt.val() * 60 - 10;
                    newElems.style.left = p + "px";

                }


                //加上动作时长部分
                var newT0 = document.createElement("div");
                var newT1 = document.createElement("div");
                var newT = document.createElement("div");
                newT0.classList.add("action");
                newT1.classList.add("time_length");
                newT.classList.add("block_content");
                $("#" + newElems.id).append(newT);
                $("#" + newElems.id).children("div").append(newT1);
                $("#" + newElems.id).children("div").prepend(newT0);//将子结构放入DIV
                var length = (newElems.offsetWidth / 60 - 1 / 3).toFixed(2) + "s"

                if (st == 0) {
                    newT0.textContent = "DOWN";
                }else if(st == 1){
                    newT0.textContent = "FRONT";
                }else{
                    newT0.textContent = "UP";
                }
                newT1.textContent = length;

                //加上控制部分

                var newButtons0 = document.createElement("button");
                var newButtons1 = document.createElement("button"); //新建button
                newButtons0.classList.add("block_left");
                newButtons1.classList.add("block_right");
                $("#"+newElems.id).prepend(newButtons0);
                $("#"+newElems.id).append(newButtons1);    //将子结构放入DIV

                blockNum++;


            }
        );

});

//Mouth.Slider
$(document).ready(function(){
    $(".MouthInput").change(function(){
        if($(".MouthInput").val()==0){
            $("#down2").css("color","#ff8933");
            $("#up2").css("color","#ebebeb");
        }else{
            $("#down2").css("color","#ebebeb");
            $("#up2").css("color","#ff8933");
        }
    });
});

//Mouth.button
$(document).ready(function () {
    $(".Mouth_plus").click(
        function() {
            var newElems = document.createElement("div");
            var st = $(".MouthInput").val();
            newElems.id = "block_" + blockNum;          //设置ID
            newElems.classList.add("block");
            var txt = $(".CurrentTime");

                $(".mouth_tl_" + ABC_st).prepend(newElems);
                if(ABC_st=="a"){
                    newElems.classList.add("block_" + ABC_st + "_mouth");
                    MouthNum_a++;
                }else if(ABC_st=="b"){
                    newElems.classList.add("block_" + ABC_st + "_mouth");
                    MouthNum_b++;
                }else{
                    newElems.classList.add("block_" + ABC_st + "_mouth");
                    MouthNum_c++;
                }
                newElems.style.position = "absolute";
                var p = txt.val() * 60-10;
                newElems.style.left = p + "px";


            //加上动作时长部分
            var newT0 = document.createElement("div");
            var newT1= document.createElement("div");
            var newT = document.createElement("div");
            newT0.classList.add("action");
            newT1.classList.add("time_length");
            newT.classList.add("block_content");
            $("#"+newElems.id).append(newT);
            $("#"+newElems.id).children("div").append(newT1);
            $("#"+newElems.id).children("div").prepend(newT0);//将子结构放入DIV
            var length = (newElems.offsetWidth/60-1/3).toFixed(2) + "s"

            if (st == 0) {
                newT0.textContent = "CLOSE";
            }else{
                newT0.textContent = "OPEN";
            }
            newT1.textContent = length;

            //加上控制部分

            var newButtons0 = document.createElement("button");
            var newButtons1 = document.createElement("button"); //新建button
            newButtons0.classList.add("block_left");
            newButtons1.classList.add("block_right");
            $("#"+newElems.id).prepend(newButtons0);
            $("#"+newElems.id).append(newButtons1);    //将子结构放入DIV

            blockNum++;


        }
    );

});

//LeftHand. angle-slider
$(document).ready(function(){
    $(".LHInput").change(function(){
        var txt= $ (this).val();
        document.getElementById("angle1").textContent = txt+"°";
    });
});

//LeftHand.button
$(document).ready(function () {
    $(".LH_plus").click(
        function() {
            var newElems = document.createElement("div");
            var st = $(".LHInput").val();
            newElems.classList.add("block");
            newElems.id = "block_" + blockNum;          //设置ID
            var txt = $(".CurrentTime");

            $(".lefthand_tl_" + ABC_st).prepend(newElems);
            if(ABC_st=="a"){
                newElems.classList.add("block_" + ABC_st + "_lh");
                LHNum_a++;
            }else if(ABC_st=="b"){
                newElems.classList.add("block_" + ABC_st + "_lh");
                LHNum_b++;
            }else{
                newElems.classList.add("block_" + ABC_st + "_lh");
                LHNum_c++;
            }
            newElems.style.position = "absolute";
            var p = txt.val() * 60-10;
            newElems.style.left = p + "px";         // 位置

            //加上动作时长部分
            var newT0 = document.createElement("div");
            var newT1= document.createElement("div");
            var newT = document.createElement("div");
            newT0.classList.add("action");
            newT1.classList.add("time_length");
            newT.classList.add("block_content");
            $("#"+newElems.id).append(newT);
            $("#"+newElems.id).children("div").append(newT1);
            $("#"+newElems.id).children("div").prepend(newT0);//将子结构放入DIV
            var length = (newElems.offsetWidth/60-1/3).toFixed(2) + "s"
            newT0.textContent = st+"°";
            newT1.textContent = length;

            //加上控制部分

            var newButtons0 = document.createElement("button");
            var newButtons1 = document.createElement("button"); //新建button
            newButtons0.classList.add("block_left");
            newButtons1.classList.add("block_right");
            $("#"+newElems.id).prepend(newButtons0);
            $("#"+newElems.id).append(newButtons1);    //将子结构放入DIV

            blockNum++;



        }
    );

});

//RightHand. angle-slider
$(document).ready(function(){
    $(".RHInput").change(function(){
        var txt= $ (this).val();
        document.getElementById("angle2").textContent = txt+"°";
    });
});

//RightHand.button
$(document).ready(function () {
    $(".RH_plus").click(
        function() {
            var newElems = document.createElement("div");
            var st = $(".RHInput").val();
            newElems.classList.add("block");
            newElems.id = "block_" + blockNum;          //设置ID
            var txt = $(".CurrentTime");

            $(".righthand_tl_" + ABC_st).prepend(newElems);
            if(ABC_st=="a"){
                newElems.classList.add("block_" + ABC_st + "_rh");
                RHNum_a++;
            }else if(ABC_st=="b"){
                newElems.classList.add("block_" + ABC_st + "_rh");
                RHNum_b++;
            }else{
                newElems.classList.add("block_" + ABC_st + "_rh");
                RHNum_c++;
            }
            newElems.style.position = "absolute";
            var p = txt.val() * 60-10;
            newElems.style.left = p + "px";

            //加上动作时长部分
            var newT0 = document.createElement("div");
            var newT1= document.createElement("div");
            var newT = document.createElement("div");
            newT0.classList.add("action");
            newT1.classList.add("time_length");
            newT.classList.add("block_content");
            $("#"+newElems.id).append(newT);
            $("#"+newElems.id).children("div").append(newT1);
            $("#"+newElems.id).children("div").prepend(newT0);//将子结构放入DIV
            var length = (newElems.offsetWidth/60-1/3).toFixed(2) + "s"
            newT0.textContent = st+"°";
            newT1.textContent = length;

            //加上控制部分

            var newButtons0 = document.createElement("button");
            var newButtons1 = document.createElement("button"); //新建button
            newButtons0.classList.add("block_left");
            newButtons1.classList.add("block_right");
            $("#"+newElems.id).prepend(newButtons0);
            $("#"+newElems.id).append(newButtons1);    //将子结构放入DIV

            blockNum++;


        }
    );

});

//Body. angle-slider
$(document).ready(function(){
    $(".BodyInput").change(function(){
        var txt= $ (this).val();
        document.getElementById("angle3").textContent = txt+"°";
    });
});

//Body.button
$(document).ready(function () {
    $(".Body_plus").click(
        function() {
            var newElems = document.createElement("div");
            var st = $(".BodyInput").val();
            newElems.classList.add("block");
            newElems.id = "block_" + blockNum;          //设置ID
            var txt = $(".CurrentTime");

            $(".body_tl_" + ABC_st).prepend(newElems);
            if(ABC_st=="a"){
                newElems.classList.add("block_" + ABC_st + "_body");
                BodyNum_a++;
            }else if(ABC_st=="b"){
                newElems.classList.add("block_" + ABC_st + "_body");
                BodyNum_b++;
            }else{
                newElems.classList.add("block_" + ABC_st + "_body");
                BodyNum_c++;
            }
            newElems.style.position = "absolute";
            var p = txt.val() * 60-10;
            newElems.style.left = p + "px";

            //加上动作时长部分
            var newT0 = document.createElement("div");
            var newT1= document.createElement("div");
            var newT = document.createElement("div");
            newT0.classList.add("action");
            newT1.classList.add("time_length");
            newT.classList.add("block_content");
            $("#"+newElems.id).append(newT);
            $("#"+newElems.id).children("div").append(newT1);
            $("#"+newElems.id).children("div").prepend(newT0);//将子结构放入DIV
            var length = (newElems.offsetWidth/60-1/3).toFixed(2) + "s"
            newT0.textContent = st+"°";
            newT1.textContent = length;

            //加上控制部分

            var newButtons0 = document.createElement("button");
            var newButtons1 = document.createElement("button"); //新建button
            newButtons0.classList.add("block_left");
            newButtons1.classList.add("block_right");
            $("#"+newElems.id).prepend(newButtons0);
            $("#"+newElems.id).append(newButtons1);    //将子结构放入DIV

            blockNum++;


        }
    );

});

//Panel. angle-slider
$(document).ready(function(){
    $(".PInput").change(function(){
        var txt= $ (this).val();
        document.getElementById("angle4").textContent = txt+"°";
    });
});

//Panel.button
$(document).ready(function () {
    $(".Panel_plus").click(
        function() {
            var newElems = document.createElement("div");
            var st = $(".PInput").val();
            newElems.classList.add("block");
            newElems.id = "block_" + blockNum;          //设置ID
            var txt = $(".CurrentTime");

            $(".panel_tl_" + ABC_st).prepend(newElems);
            if(ABC_st=="a"){
                newElems.classList.add("block_" + ABC_st + "_p");
                PNum_a++;
            }else if(ABC_st=="b"){
                newElems.classList.add("block_" + ABC_st + "_p");
                PNum_b++;
            }else{
                newElems.classList.add("block_" + ABC_st + "_p");
                PNum_c++;
            }
            newElems.style.position = "absolute";
            var p = txt.val() * 60-10;
            newElems.style.left = p + "px";

            //加上动作时长部分
            var newT0 = document.createElement("div");
            var newT1= document.createElement("div");
            var newT = document.createElement("div");
            newT0.classList.add("action");
            newT1.classList.add("time_length");
            newT.classList.add("block_content");
            $("#"+newElems.id).append(newT);
            $("#"+newElems.id).children("div").append(newT1);
            $("#"+newElems.id).children("div").prepend(newT0);//将子结构放入DIV
            var length = (newElems.offsetWidth/60-1/3).toFixed(2) + "s"
            newT0.textContent = st+"°";
            newT1.textContent = length;

            //加上控制部分

            var newButtons0 = document.createElement("button");
            var newButtons1 = document.createElement("button"); //新建button
            newButtons0.classList.add("block_left");
            newButtons1.classList.add("block_right");
            $("#"+newElems.id).prepend(newButtons0);
            $("#"+newElems.id).append(newButtons1);    //将子结构放入DIV

            blockNum++;


        }
    );

});

//BASE. angle-slider
$(document).ready(function(){
    $(".BaseInput").change(function(){
        var txt= $ (this).val();
        document.getElementById("angle5").textContent = txt+"°";
        $ (".tg").scrollTop(450);
    });
});

//BASE.button
$(document).ready(function () {
    $(".Base_plus").click(
        function() {
            $ (".tg").scrollTop(450);
            
            var newElems = document.createElement("div");
            var st = $(".BaseInput").val();
            newElems.classList.add("block");
            newElems.classList.add("block_base");
            newElems.id = "block_" + blockNum;          //设置ID

            var txt = $(".CurrentTime");

            $(".Base_tl_0").prepend(newElems);
            BaseNum++;
            newElems.style.position = "absolute";
            var p = txt.val() * 60-10;
            newElems.style.left = p + "px";


            //加上动作时长部分
            var newT0 = document.createElement("div");
            var newT1= document.createElement("div");
            var newT = document.createElement("div");
            newT0.classList.add("action");
            newT1.classList.add("time_length");
            newT.classList.add("block_content");
            $("#"+newElems.id).append(newT);
            $("#"+newElems.id).children("div").append(newT1);
            $("#"+newElems.id).children("div").prepend(newT0);//将子结构放入DIV
            var length = (newElems.offsetWidth/60-1/3).toFixed(2) + "s"
            newT0.textContent = st+"°";
            newT1.textContent = length;

            //加上控制部分

            var newButtons0 = document.createElement("button");
            var newButtons1 = document.createElement("button"); //新建button
            newButtons0.classList.add("block_left");
            newButtons1.classList.add("block_right");
            $("#"+newElems.id).prepend(newButtons0);
            $("#"+newElems.id).append(newButtons1);    //将子结构放入DIV

            blockNum++;





        }
    );

});


