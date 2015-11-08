var SoundLibNum = 0;
var SoundNum_a = 0;
var SoundNum_b = 0;
var SoundNum_c = 0;
var ABC_st2 = "a";
var SoundLen_a = $(".block_a_sound").length;
var SoundLen_b = $(".block_b_sound").length;
var SoundLen_c = $(".block_c_sound").length;

$(document).ready(function(){
        $(".radios2").click(
            function(){
                if($("#A2").is(':checked')){
                    ABC_st2="a";
                }else if($("#B2").is(':checked')){
                    ABC_st2="b";
                }else{
                    ABC_st2="c";
                }
            }
        );
    }
);

$(document).ready(function(){
        $(".file_upload").change(function(){
            var filepath=$(".file_upload").val();
            SoundLibNum++;
            //alert(filepath)
            var filename=filepath.slice( filepath.lastIndexOf('/')+1 );

            var newElems = document.createElement("div");
            newElems.classList.add("M_File");
            newElems.id = "mfile" + SoundLibNum;
            //alert(filename);
            $("#musiclist").prepend(newElems);
            var e1 = newElems.id;
            newElems = document.createElement("div");
            newElems.classList.add("M_File_Name");
            newElems.id = "mfilename" + SoundLibNum;
            newElems.textContent = filename;
            $("#"+e1).prepend(newElems);
            var e2 = newElems.id;
            newElems = document.createElement("button");
            newElems.classList.add("M_File_plus");
            newElems.id = "mfileplus" + SoundLibNum;
            $("#"+e1).prepend(newElems);
            var e3 = newElems.id;
            newElems = document.createElement("div");
            newElems.classList.add("pathNameStorage");
            newElems.id = "pathNameStorage" + SoundLibNum;
            $("#"+e1).append(newElems);
            newElems.textContent = filepath;
            var e4 = newElems.id;

            //$(".M_File_plus").click(function() {
            //        var plus  = $(this);
            //        var text = plus.parent().children(".M_File_Name").text();
            //        var newElems = document.createElement("div");
            //        newElems.classList.add("block");
            //        newElems.id = "block_" + blockNum;
            //        var txt = $(".CurrentTime");
            //
            //        $(".sound_tl_" + ABC_st2).prepend(newElems);
            //        if(ABC_st2=="a"){
            //            newElems.classList.add("block_" + ABC_st2 + "_sound");
            //            SoundNum_a++;
            //        }else if(ABC_st2=="b"){
            //            newElems.classList.add("block_" + ABC_st2 + "_sound");
            //            SoundNum_b++;
            //        }else{
            //            newElems.classList.add("block_" + ABC_st2 + "_sound");
            //            SoundNum_c++;
            //        }
            //        newElems.style.position = "absolute";
            //        var p = txt.val() * 60 - 10;
            //        newElems.style.left = p + "px";
            //
            //        //加上动作时长部分
            //        var newT0 = document.createElement("div");
            //        var newT1= document.createElement("div");
            //        var newT = document.createElement("div");
            //        newT0.classList.add("action");
            //        newT1.classList.add("time_length");
            //        newT.classList.add("block_content");
            //        $("#"+newElems.id).append(newT);
            //        $("#"+newElems.id).children("div").append(newT1);
            //        $("#"+newElems.id).children("div").prepend(newT0);//将子结构放入DIV
            //        var length = (newElems.offsetWidth/60-1/3).toFixed(2) + "s"
            //        newT0.textContent = text;
            //        newT1.textContent = length;
            //
            //        //加上控制部分
            //
            //        var newButtons0 = document.createElement("button");
            //        var newButtons1 = document.createElement("button"); //新建button
            //        newButtons0.classList.add("block_left");
            //        newButtons1.classList.add("block_right");
            //        $("#"+newElems.id).prepend(newButtons0);
            //        $("#"+newElems.id).append(newButtons1);    //将子结构放入DIV
            //
            //        blockNum++;
            //
            //
            //    }
            //);



        });
});

$(document).ready(function(){

    $(document).on("click",".M_File_plus",function(event){
        var text = $(this).parent().children(".M_File_Name").text();
        var text2 = $(this).parent().children(".pathNameStorage").text();
        var newElems = document.createElement("div");
        newElems.classList.add("block");
        newElems.id = "block_" + blockNum;
        var txt = $(".CurrentTime");

        if($(".BG_radio").attr("checked")){
            $(".BGSound_tl_0").prepend(newElems);
            newElems.classList.add("block_BG_sound");

        }else{
            $(".sound_tl_" + ABC_st2).prepend(newElems);
            if(ABC_st2=="a"){
                newElems.classList.add("block_" + ABC_st2 + "_sound");
                SoundNum_a++;
            }else if(ABC_st2=="b"){
                newElems.classList.add("block_" + ABC_st2 + "_sound");
                SoundNum_b++;
            }else{
                newElems.classList.add("block_" + ABC_st2 + "_sound");
                SoundNum_c++;
            }
        }

        newElems.style.position = "absolute";
        var p = txt.val() * 60 - 10;
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
        newT0.textContent = text;

        //music path
        var newPath = document.createElement("div");
        newPath.classList.add("pathNameStorage");
        $("#"+newElems.id).append(newPath);
        newPath.textContent = text2;

        var audio_temp = document.createElement("audio");
        audio_temp.src = text2;

        audio_temp.addEventListener('loadedmetadata', function() {
            var l_t = parseFloat(audio_temp.duration).toFixed(2);

            var l = l_t*60 + 20;
            $("#"+newElems.id).css("width",l+"px");
            newT1.textContent = l_t + "s";

        });




        //加上控制部分

        var newButtons0 = document.createElement("button");
        var newButtons1 = document.createElement("button"); //新建button
        newButtons0.classList.add("block_left");
        newButtons1.classList.add("block_right");
        $("#"+newElems.id).prepend(newButtons0);
        $("#"+newElems.id).append(newButtons1);    //将子结构放入DIV



        blockNum++;
    })

});

