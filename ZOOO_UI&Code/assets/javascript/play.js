/**
 * Created by liuyejun on 15/10/18.
 */

var fs = require("fs");

var SerialPort = require("serialport").SerialPort;
var serialport;
var audio;

// open the serialport to arduino
$(document).ready(function(){
    $(".LINK").click(function(){
        serialport = new SerialPort("/dev/cu.usbmodem1411",{
                baudrate: 9600},
            function(err){
                if(err){
                    alert("can not open the port");
                    $(".LINK").removeClass("CONNECT");
                    $(".LINK").addClass("UNCONNECT");
                    //$(".LINK").css("background-image","url(../../resource/images/UNCONNECT.png)")
                }else{
                    //$(".LINK").css("background-image","url(../../resource/images/CONNECT.png)");
                    alert("connect!")
                    $(".LINK").removeClass("UNCONNECT");
                    $(".LINK").addClass("CONNECT");
                    //start();
                }

            });
    });
});


function cleanOrder(){
    //序号清零

    var cleanorder = 0;
    while(cleanorder< blockorder){
        $(".block").each(function(){
            if($(".block").hasClass("block"+cleanorder)){
                $(".block").removeClass("block"+cleanorder);
                cleanorder++;
            }
        })
    }// clean the order class

    blockorder = 0;

}

function makeOrder(){
    /* ---- 遍历所有BLOCK 排序记录*/
     //冒泡排序
     cleanOrder();
     //给每一个BLOCK加一个未读的标签
     $(".block").each(function(){$(this).addClass("unread");})

     // 遍历
     while($(".unread").length != 0){
        var pointer = 0;
        //遍历未读Block
        $(".unread").each(function(){
            var present = $(this);
            //alert("在查找:"+present.attr("id"));
            if(pointer==0){
                 pointer=present;//alert("指针起始为:"+pointer.attr("id"));
            }else if(present.position().left<pointer.position().left){
                pointer = present;//alert("指针改变到:"+pointer.attr("id"));
            }
     //alert("指针还在:"+pointer.attr("id"));
        })
        pointer.addClass("block"+blockorder);//最前面的，是第"+blockorder+"个block!!!!")
        pointer.attr("id","block_"+blockorder); //修改ID

     blockorder++;
     pointer.removeClass("unread");
     }
    //alert("排序完成！")

    blockNum = blockorder;
    blockorder = 0;
}

// to make the txt for save and read the block of action

function blocksave(block){
    send = send + "@";
    if(block.hasClass("block_a_head")){
        send = send + "block_a_head" +"|";
    }else if(block.hasClass("block_a_mouth")){
        send = send + "block_a_mouth" +"|";
    }else if(block.hasClass("block_a_lh")){
        send = send + "block_a_lh" +"|";
    }else if(block.hasClass("block_a_rh")){
        send = send + "block_a_rh" +"|";
    }else if(block.hasClass("block_a_body")){
        send = send + "block_a_body" +"|";
    }else if(block.hasClass("block_a_p")){
        send = send + "block_a_p" +"|";
    }else if(block.hasClass("block_b_head")){
        send = send + "block_b_head" +"|";
    }else if(block.hasClass("block_b_mouth")){
        send = send + "block_b_mouth" +"|";
    }else if(block.hasClass("block_b_lh")){
        send = send + "block_b_lh" +"|";
    }else if(block.hasClass("block_b_rh")){
        send = send + "block_b_rh" +"|";
    }else if(block.hasClass("block_b_body")){
        send = send + "block_b_body" +"|";
    }else if(block.hasClass("block_b_p")){
        send = send + "block_b_p" +"|";
    }else if(block.hasClass("block_c_head")){
        send = send + "block_c_head" +"|";
    }else if(block.hasClass("block_c_mouth")){
        send = send + "block_c_mouth" +"|";
    }else if(block.hasClass("block_c_lh")){
        send = send + "block_c_lh" +"|";
    }else if(block.hasClass("block_c_rh")){
        send = send + "block_c_rh" +"|";
    }else if(block.hasClass("block_c_body")){
        send = send + "block_c_body" +"|";
    }else if(block.hasClass("block_c_p")){
        send = send + "block_c_p" +"|";
    }else if(block.hasClass("block_base")){
        send = send + "block_base" +"|";
    }else if(block.hasClass("block_a_sound")){
        send = send + "block_a_sound" +"|";
        send = send + block.children(".pathNameStorage").text() +"|";
    }else if(block.hasClass("block_b_sound")){
        send = send + "block_b_sound" +"|";
        send = send + block.children(".pathNameStorage").text() +"|";
    }else if(block.hasClass("block_c_sound")){
        send = send + "block_c_sound" +"|";
        send = send + block.children(".pathNameStorage").text() +"|";
    }else if(block.hasClass("block_BG_sound")){
        send = send + "block_BG_sound" +"|";
        send = send + block.children(".pathNameStorage").text() +"|";
    }

    send = send + block.attr("id") +"|";
    send = send + block.children(".block_content").children(".action").text() +"|";
    send = send + block.children(".block_content").children(".time_length").text() +"|";
    send = send + block.parent()[0].className+"|"; //parent
    send = send + block.position().left +"|";
    send = send + block.width() +"|";
    send = send + "#";
}

//music

function playSound(block){
    if(block.hasClass("block_a_sound")){
        var soundPath = block.children(".pathNameStorage").text();
        //alert(soundPath);

        audio = document.getElementById("zoooAudio");
        if (audio != null && audio.canPlayType)
        {
            audio.src = soundPath;
            audio.play();
            audio.volume = 1;

        }
    }

    else if(block.hasClass("block_b_sound")){
        var soundPath = block.children(".pathNameStorage").text();
        //alert(soundPath);

        audio = document.getElementById("zoooAudio2");
        if (audio != null && audio.canPlayType)
        {
            audio.src = soundPath;
            audio.play();
            audio.volume = 1;

        }
    }

    else if(block.hasClass("block_c_sound")){
        var soundPath = block.children(".pathNameStorage").text();
        //alert(soundPath);

        audio = document.getElementById("zoooAudio3");
        if (audio != null && audio.canPlayType)
        {
            audio.src = soundPath;
            audio.play();
            audio.volume = 1;

        }
    }

    else if(block.hasClass("block_BG_sound")){
        var soundPath = block.children(".pathNameStorage").text();
        //alert(soundPath);

        audio = document.getElementById("zoooAudio4");
        if (audio != null && audio.canPlayType)
        {
            audio.src = soundPath;
            audio.play();
            audio.volume = 1;

        }
    }
}

function stopSound(){
    document.getElementById("zoooAudio").pause();
    document.getElementById("zoooAudio2").pause();
    document.getElementById("zoooAudio3").pause();
    document.getElementById("zoooAudio4").pause();
}

// to make the commandline of the motor: @order#motorPangleTtime\r\n Ddelaytime:one by one and plus E as the end flag
function blockcmdPTD(block){
    //增加角度字符串
    var text = block.children(".block_content").children(".action").text();
    var angle = text.slice(0, text.indexOf("°"));

    var text2 = block.children(".block_content").children(".time_length").text();
    var time = text2.slice(0,text.indexOf("s"));
    time = (parseFloat(time)*1000).toFixed(0);

    if(text == "UP"){
        if(block.hasClass("block_b_head")){
            cmd = cmd +"P1200";
        }else{
            cmd = cmd +"P1800";
        }
    }else if (text == "DOWN"){
        if(block.hasClass("block_b_head")){
            cmd = cmd +"P1800";
        }else{
            cmd = cmd +"P1200";
        }
    }else if (text == "FRONT"){
        cmd = cmd +"P1500";
    }else if(text == "CLOSE"){
        if(block.hasClass("block_c_mouth")){
            cmd = cmd +"P1350";
        }else if(block.hasClass("block_a_mouth")){
            cmd = cmd +"P1720";
        }else{
            cmd = cmd +"P1800";
        }
    }else if(text == "OPEN"){
        if(block.hasClass("block_c_mouth")){
            cmd = cmd +"P0900";
        }else if(block.hasClass("block_a_mouth")){
            cmd = cmd +"P2000";
        }else{
            cmd = cmd +"P2200";
        }
    }else{
        angle = parseFloat(angle);

        var motion = 0;

        if(isp == "UP") {//
            //if(block.hasClass("block_b_p")){angle = -angle;}
            angle = angle*10.5;

            if (angle > 0) {//0-180
                motion = (500 + angle).toFixed(0);
                if (motion < 1000) {
                    cmd = cmd + "P0" + motion
                } else {
                    cmd = cmd + "P" + motion
                }
            } else { //-180-0
                cmd = cmd + "P0500";
            }
        }
        else if (isp == "DOWN") {
            //if(block.hasClass("block_b_p")){angle = -angle;}
            angle = angle*10.5;
            if (angle < 0) {//-180-0
                motion = (2400 + angle).toFixed(0);
                if (motion < 1000) {
                    cmd = cmd + "P0" + motion
                } else {
                    cmd = cmd + "P" + motion
                }
            } else {
                cmd = cmd + "P2400";
            }
        }
        else if(isp==0){ // RIGHTHAND
            //alert("同方向")
            angle = angle*11.6;
            motion = (1500 + angle).toFixed(0);
            if(motion<1000){
                cmd = cmd + "P0" +motion
            }else{
                cmd = cmd + "P"+motion
            }
        }
        else if(isp==1) { // LEFTHAND
            //alert("异方向")
            angle = angle*10;
            motion = (1600 - angle).toFixed(0);
            if (motion < 1000) {
                cmd = cmd + "P0" + motion
            } else {
                cmd = cmd + "P" + motion
            }
        }
        else if(isp==2) { // BODY
            //alert("异方向")
            angle = angle*11;

            if(block.hasClass("block_b_body")||block.hasClass("block_c_body")){
                angle = -angle
            }

            motion = (1500 - angle).toFixed(0);
            if (motion < 1000) {
            cmd = cmd + "P0" + motion
            } else {
            cmd = cmd + "P" + motion
            }
        }
    }

    //增加时间字符串

    if( time<10 ){
        cmd = cmd +"T00000" + time;
    }else if( time<100 ){
        cmd = cmd +"T0000" + time;
    }else if( time<1000 ){
        cmd = cmd +"T000" + time;
    }else if( time<10000 ){
        cmd = cmd +"T00" + time;
    }else if( time<100000 ){
        cmd = cmd +"T0" + time;
    }else if( time<1000000 ){
        cmd = cmd +"T" + time;
    }

    cmd = cmd + "\\"+"r"+"\\"+"n";

    /*
    //增加延迟时间
    var delaypx = 0;//起始的PX值
    var delaytime = 0; //起始的毫秒数

    if(blockorder ==0){
        delaypx = block.position().left+10;
    }else{
        delaypx = block.position().left-$(".block"+(blockorder-1)).position().left
    }

    delaytime = (delaypx/0.06).toFixed(0);
    if(delaytime<0){delaytime=-delaytime;}

    if( delaytime<10 ){
        cmd = cmd +"D00000" + delaytime;
    }else if( delaytime<100 ){
        cmd = cmd +"D0000" + delaytime;
    }else if( delaytime<1000 ){
        cmd = cmd +"D000" + delaytime;
    }else if( delaytime<10000 ){
        cmd = cmd +"D00" + delaytime;
    }else if( delaytime<100000 ){
        cmd = cmd +"D0" + delaytime;
    }else if( delaytime<1000000 ){
        cmd = cmd +"D" + delaytime;
    }
    */

    cmd = cmd + "D000000";

    cmd = cmd +'E';
}

function blockcmd(block){


    // 生成序号字符串
    if(blockorder<10){
        cmd = "@00"+ blockorder;
    }else if(blockorder<100){
        cmd = "@0"+ blockorder;
    }else{
        cmd = "@" + blockorder;
    }

    var text = block.children(".block_content").children(".action").text();

    //A
    //是不是A的Head:电机#01
    if(block.hasClass("block_a_head")){
        cmd = cmd + "#14";
        blockcmdPTD(block);
    }
    //是不是A的Mouth:电机#024
    else if(block.hasClass("block_a_mouth")){
        cmd = cmd + "#15";
        blockcmdPTD(block);
    }
    //是不是A的LeftHand:电机#03
    else if(block.hasClass("block_a_lh")){
        isp = 1;
        cmd = cmd + "#16";
        blockcmdPTD(block);
    }
    //是不是A的RightHand:电机#04
    else if(block.hasClass("block_a_rh")){
        isp = 0;
        cmd = cmd + "#17";
        blockcmdPTD(block);
    }
    //是不是A的Body:电机#05
    else if(block.hasClass("block_a_body")){
        isp = 2;
        cmd = cmd + "#18";
        blockcmdPTD(block);
    }
    //是不是A的Panel:电机#06
    else if(block.hasClass("block_a_p")){
        isp = "UP";
        cmd = cmd + "#19";
        blockcmdPTD(block);

        blockorder++;
        if(blockorder<10){
            cmd = cmd +"@00"+ blockorder;
        }else if(blockorder<100){
            cmd = cmd +"@0"+ blockorder;
        }else{
            cmd = cmd +"@" + blockorder;
        }

        isp = "DOWN";
        cmd = cmd + "#20";
        blockcmdPTD(block);

    }

    //B
    //是不是B的Head:电机#08
    else if(block.hasClass("block_b_head")){
        isp = 0;
        cmd = cmd + "#26";
        blockcmdPTD(block);
    }
    //是不是B的Mouth:电机#09
    else if(block.hasClass("block_b_mouth")){
        isp = 0;
        cmd = cmd + "#27";
        blockcmdPTD(block);
    }
    //是不是B的LeftHand:电机#10
    else if(block.hasClass("block_b_lh")){
        isp = 1;
        cmd = cmd + "#28";
        blockcmdPTD(block);
    }
    //是不是B的RightHand:电机#11
    else if(block.hasClass("block_b_rh")){
        isp = 0;
        cmd = cmd + "#29";
        blockcmdPTD(block);
    }
    //是不是B的Body:电机#12
    else if(block.hasClass("block_b_body")){
        isp = 2;
        cmd = cmd + "#30";
        blockcmdPTD(block);
    }
    //是不是B的Panel:电机#13
    else if(block.hasClass("block_b_p")){
        isp = "UP";
        cmd = cmd + "#31";
        blockcmdPTD(block);

        blockorder++;
        if(blockorder<10){
            cmd = cmd +"@00"+ blockorder;
        }else if(blockorder<100){
            cmd = cmd +"@0"+ blockorder;
        }else{
            cmd = cmd +"@" + blockorder;
        }

        isp = "DOWN";
        cmd = cmd + "#32";
        blockcmdPTD(block);

    }

    //C
    //是不是C的Head:电机#15
    else if(block.hasClass("block_c_head")){
        isp = 0;
        cmd = cmd + "#03";
        blockcmdPTD(block);

    }
    //是不是C的Mouth:电机#16
    else if(block.hasClass("block_c_mouth")){
        isp = 0;
        cmd = cmd + "#04";
        blockcmdPTD(block);
    }
    //是不是C的LeftHand:电机#17
    else if(block.hasClass("block_c_lh")){
        isp = 1;
        cmd = cmd + "#05";
        blockcmdPTD(block);
    }
    //是不是C的RightHand:电机#18
    else if(block.hasClass("block_c_rh")){
        isp = 0;
        cmd = cmd + "#06";
        blockcmdPTD(block);
    }
    //是不是C的Body:电机#19
    else if(block.hasClass("block_c_body")){
        isp = 2;
        cmd = cmd + "#07";
        blockcmdPTD(block);
    }
    //是不是C的Panel:电机#20 #25
    else if(block.hasClass("block_c_p")){
        isp = "UP";
        cmd = cmd + "#08";
        blockcmdPTD(block);

        blockorder++;
        if(blockorder<10){
            cmd = cmd +"@00"+ blockorder;
        }else if(blockorder<100){
            cmd = cmd +"@0"+ blockorder;
        }else{
            cmd = cmd +"@" + blockorder;
        }

        isp = "DOWN";
        cmd = cmd + "#09";
        blockcmdPTD(block);

    }

    //Base
    //是不是Base:电机#22
    else if(block.hasClass("block_base")){
        isp = "UP";
        cmd = cmd + "#22";
        blockcmdPTD(block);

        blockorder++;
        if(blockorder<10){
            cmd = cmd +"@00"+ blockorder;
        }else if(blockorder<100){
            cmd = cmd +"@0"+ blockorder;
        }else{
            cmd = cmd +"@" + blockorder;
        }

        isp = "DOWN";
        cmd = cmd + "#23";
        blockcmdPTD(block);

    }
    //传给串口

    //alert(cmd);
    serialport.open(function(err){
        if(err){
            alert("can't connect to serialport!");
        }else {
            serialport.write(cmd);
        }
    });


}

//play
function play(){
    var TimelineElem = $(".TimeController");
    onTime = TimelineElem.val();
    var value = parseFloat(onTime);
    value = (value + 0.1).toFixed(1);
    TimelineElem.val(value);
    $(".CurrentTime").val(value);

    //search all block

    $(".unplay").each(function () {
            if ((($(this).position().left + 10) / 60).toFixed(1) == parseFloat(onTime)) { //if the timeline meet block
                var elem = $(this);
                var id = "#" + elem.attr("id");
                elem = $(id);

                //alert("时间线遇到动作！PERFECT！"+id)
                if(elem.hasClass("block_a_sound")||elem.hasClass("block_b_sound")||elem.hasClass("block_c_sound")||elem.hasClass("block_BG_sound")) {
                    playSound(elem);

                }else{
                    blockcmd(elem); //传动作

                }
                blockorder++;
                elem.removeClass("unplay");
            }
    });

}


// 3d ROTATE
function RotateY(mangle,mtime,object){

    var o;
    var t = parseInt(mtime);
    var a = parseFloat(mangle);
    //alert(a);


    function rotateY(){
        if(t == 0){
            clearInterval(o);
        }
        object.rotateY(a * Math.PI / 180);
        //alert(t);
        t--;
    }
    //
    o = setInterval(rotateY,10);

}

function RotateX(mangle,mtime,object){

    var o;
    var t = parseInt(mtime);
    var a = parseFloat(mangle);
    //alert(a);


    function rotateX(){
        if(t == 0){
            clearInterval(o);
        }
        object.rotateX(a * Math.PI / 180);
        //alert(t);
        t--;

    }
    //
    o = setInterval(rotateX,10);

}
// preview
function preview(){
    var TimelineElem = $(".TimeController");
    onTime = TimelineElem.val();
    var value = parseFloat(onTime);
    value = (value + 0.1).toFixed(1);
    TimelineElem.val(value);
    $(".CurrentTime").val(value);

    $(".block").each(function(){
        $(this).addClass("unpreview");
    })

    $(".unpreview").each(function () {
        if((($(this).position().left+10)/60).toFixed(1) == parseFloat(onTime)){
            var elem = $(this);
            var id = "#"+elem.attr("id");
            elem = $(id);
            //alert("时间线遇到动作！PERFECT！"+id)

            //Base盘转
            if(elem.hasClass("block_base")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle =  text.slice(0,text.indexOf("°"))
                var time = text2.slice(0,text.indexOf("s"))
                angle = parseFloat(angle);
                angle = 0-angle;
                //alert(angle+" :"+text2)
                var t = "transform "+text2
                //alert(t)


                $("#Base_0").css("transition", "transform");
                $("#Base_0").css("transition-duration", text2);
                $("#Base_0").css("transition-timing-function", "linear");
                $("#Base_0").css("transform", "rotate(" + angle + "deg)");


            }


            //A盘转
            else if(elem.hasClass("block_a_p")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = text.slice(0,text.indexOf("°"))
                var time = text2.slice(0,text.indexOf("s"))
                angle = parseFloat(angle);
                angle = 0-angle;


                $("#BASE_RED").css("transition", "transform");
                $("#BASE_RED").css("transition-duration", text2);
                $("#BASE_RED").css("transition-timing-function", "linear");
                $("#BASE_RED").css("transform", "rotate(" + angle + "deg)");
                //panel_A_st = angle;

            }

            //B盘转
            else if(elem.hasClass("block_b_p")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = text.slice(0,text.indexOf("°"))
                var time = text2.slice(0,text.indexOf("s"))
                angle = parseFloat(angle);
                angle = 0-angle+120;
                //alert(text2)

                $("#BASE_GREEN").css("transition", "transform");
                $("#BASE_GREEN").css("transition-duration", elem.children(".block_content").children(".time_length").text());
                $("#BASE_GREEN").css("transition-timing-function", "linear");
                $("#BASE_GREEN").css("transform", "rotate(" + angle + "deg)");
                //panel_B_st = angle;

            }

            //C盘转
            else if(elem.hasClass("block_c_p")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = text.slice(0,text.indexOf("°"))
                var time = text2.slice(0,text.indexOf("s"))
                angle = parseFloat(angle);
                angle = 0-angle-120;

                $("#BASE_BLUE").css("transition", "transform");
                $("#BASE_BLUE").css("transition-duration", text2);
                $("#BASE_BLUE").css("transition-timing-function", "linear");
                $("#BASE_BLUE").css("transform", "rotate(" + angle + "deg)");
                //panel_C_st = angle;

            }

            //A-body转
            else if(elem.hasClass("block_a_body")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = text.slice(0,text.indexOf("°"))
                var time = text2.slice(0,text.indexOf("s"))
                angle = parseFloat(angle);
                var d_angle = angle - parseFloat(body_angle_a);
                body_angle_a = angle;
                angle = 0-angle;

                $("#body_red").css("transition", "transform");
                $("#body_red").css("transition-duration", text2);
                $("#body_red").css("transition-timing-function", "linear");
                $("#body_red").css("transform", "rotate(" + angle + "deg)");


                //skull
                var mtime = parseFloat(time)*100;//多少10ms
                var mangle = d_angle/mtime; //每100ms 转多少度

                RotateY(mangle,mtime,body_a_3d);




            }

            //B-body转
            else if(elem.hasClass("block_b_body")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = text.slice(0,text.indexOf("°"))
                var time = text2.slice(0,text.indexOf("s"))
                angle = parseFloat(angle);
                var d_angle = angle - body_angle_b;
                body_angle_b = angle;
                angle = 0-angle;

                $("#body_green").css("transition", "transform");
                $("#body_green").css("transition-duration", text2);
                $("#body_green").css("transition-timing-function", "linear");
                $("#body_green").css("transform", "rotate(" + angle + "deg)");

                //skull
                var mtime = parseFloat(time)*100;//多少100ms
                var mangle = d_angle/mtime; //每10ms 转多少度

                RotateY(mangle,mtime,body_b_3d);

            }

            //C-body转
            else if(elem.hasClass("block_c_body")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = text.slice(0,text.indexOf("°"))
                var time = text2.slice(0,text.indexOf("s"))
                angle = parseFloat(angle);
                var d_angle = angle - body_angle_c;
                body_angle_c = angle;
                angle = 0-angle;

                $("#body_blue").css("transition", "transform");
                $("#body_blue").css("transition-duration", text2);
                $("#body_blue").css("transition-timing-function", "linear");
                $("#body_blue").css("transform", "rotate(" + angle + "deg)");

                //skull
                var mtime = parseFloat(time)*100;//多少100ms
                var mangle = d_angle/mtime; //每10ms 转多少度

                RotateY(mangle,mtime,body_c_3d);


            }

            else if(elem.hasClass("block_a_head")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = 0;
                if(text == "UP"){
                    angle = -20;
                }else if(text == "FRONT"){
                    angle = 0;
                }else{
                    angle = 15;
                }
                var time = text2.slice(0,text.indexOf("s"))
                angle = parseFloat(angle);
                var d_angle = angle - head_angle_a;
                head_angle_a = angle;

                //skull
                var mtime = parseFloat(time)*10;//多少100ms
                var mangle = d_angle/mtime; //每10ms 转多少度

                RotateX(mangle,mtime,head_a_3d);

            }

            else if(elem.hasClass("block_b_head")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = 0;
                if(text == "UP"){
                    angle = -20;
                }else if(text == "FRONT"){
                    angle = 0;
                }else{
                    angle = 15;
                }
                var time = text2.slice(0,text.indexOf("s"))
                angle = parseFloat(angle);
                var d_angle = angle - head_angle_b;
                head_angle_b = angle;

                //skull
                var mtime = parseFloat(time)*100;//多少100ms
                var mangle = d_angle/mtime; //每10ms 转多少度

                RotateX(mangle,mtime,head_b_3d);

            }

            else if(elem.hasClass("block_c_head")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = 0;
                if(text == "UP"){
                    angle = -20;
                }else if(text == "FRONT"){
                    angle = 0;
                }else{
                    angle = 15;
                }
                var time = text2.slice(0,text.indexOf("s"))
                angle = parseFloat(angle);
                var d_angle = angle - head_angle_c;
                head_angle_c = angle;


                //skull
                var mtime = parseFloat(time)*100;//多少100ms
                var mangle = d_angle/mtime; //每10ms 转多少度

                RotateX(mangle,mtime,head_c_3d);

            }

            else if(elem.hasClass("block_a_mouth")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = 0;
                if(text == "CLOSE"){
                    angle = 0;
                }else{
                    angle = 15;
                }
                var time = text2.slice(0,text.indexOf("s"))
                angle = parseFloat(angle);
                var d_angle = angle - mouth_angle_a;
                mouth_angle_a = angle;

                //skull
                var mtime = parseFloat(time)*100;//多少100ms
                var mangle = d_angle/mtime; //每10ms 转多少度

                RotateX(mangle,mtime,mouth_a_3d);

            }
            else if(elem.hasClass("block_b_mouth")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = 0;
                if(text == "CLOSE"){
                    angle = 0;
                }else{
                    angle = 15;
                }
                var time = text2.slice(0,text.indexOf("s"))
                angle = parseFloat(angle);
                var d_angle = angle - parseFloat(mouth_angle_b);
                mouth_angle_b = angle;

                //skull
                var mtime = parseFloat(time)*100;//多少100ms
                var mangle = d_angle/mtime; //每10ms 转多少度

                RotateX(mangle,mtime,mouth_b_3d);

            }
            else if(elem.hasClass("block_c_mouth")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = 0;
                if(text == "CLOSE"){
                    angle = 0;
                }else{
                    angle = 15;
                }
                var time = text2.slice(0,text.indexOf("s"))
                angle = parseFloat(angle);
                var d_angle = angle - mouth_angle_c;
                mouth_angle_c = angle;

                //skull
                var mtime = parseFloat(time)*100;//多少100ms
                var mangle = d_angle/mtime; //每10ms 转多少度

                RotateX(mangle,mtime,mouth_c_3d);

            }
            else if(elem.hasClass("block_a_lh")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = text.slice(0,text.indexOf("°"))
                var time = text2.slice(0,text.indexOf("s"))
                angle = -parseFloat(angle);
                var d_angle = angle - left_angle_a;
                left_angle_a = angle;

                //skull
                var mtime = parseFloat(time)*100;//多少100ms
                var mangle = d_angle/mtime; //每10ms 转多少度

                RotateX(mangle,mtime,left_a_3d);

            }
            else if(elem.hasClass("block_b_lh")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = text.slice(0,text.indexOf("°"))
                var time = text2.slice(0,text.indexOf("s"))
                angle = -parseFloat(angle);
                var d_angle = angle - left_angle_b;
                left_angle_b = angle;

                //skull
                var mtime = parseFloat(time)*100;//多少100ms
                var mangle = d_angle/mtime; //每10ms 转多少度

                RotateX(mangle,mtime,left_b_3d);

            }
            else if(elem.hasClass("block_c_lh")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = text.slice(0,text.indexOf("°"))
                var time = text2.slice(0,text.indexOf("s"))
                angle = -parseFloat(angle);
                var d_angle = angle - left_angle_c;
                left_angle_c = angle;

                //skull
                var mtime = parseFloat(time)*100;//多少100ms
                var mangle = d_angle/mtime; //每10ms 转多少度

                RotateX(mangle,mtime,left_c_3d);

            }

            else if(elem.hasClass("block_a_rh")) {

                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = text.slice(0,text.indexOf("°"))
                var time = text2.slice(0,text.indexOf("s"))
                angle = -parseFloat(angle);
                var d_angle = angle - right_angle_a;
                right_angle_a = angle;

                //skull
                var mtime = parseFloat(time)*100;//多少100ms
                var mangle = d_angle/mtime; //每10ms 转多少度

                RotateX(mangle,mtime,right_a_3d);

            }
            else if(elem.hasClass("block_b_rh")) {
                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = text.slice(0,text.indexOf("°"))
                var time = text2.slice(0,text.indexOf("s"))
                angle = -parseFloat(angle);
                var d_angle = angle - right_angle_b;
                right_angle_b = angle;

                //skull
                var mtime = parseFloat(time)*100;//多少100ms
                var mangle = d_angle/mtime; //每10ms 转多少度

                RotateX(mangle,mtime,right_b_3d);
            }

            else if(elem.hasClass("block_c_rh")) {

                var text = elem.children(".block_content").children(".action").text()
                var text2 = elem.children(".block_content").children(".time_length").text()
                var angle = text.slice(0,text.indexOf("°"))
                var time = text2.slice(0,text.indexOf("s"))
                angle = -parseFloat(angle);
                var d_angle = angle - right_angle_c;
                right_angle_c = angle;

                //skull
                var mtime = parseFloat(time)*100;//多少100ms
                var mangle = d_angle/mtime; //每10ms 转多少度

                RotateX(mangle,mtime,right_c_3d);

            }
            else if(elem.hasClass("block_a_sound")||elem.hasClass("block_b_sound")||elem.hasClass("block_c_sound")||elem.hasClass("block_BG_sound")){
                playSound(elem);
            }

            elem.removeClass("unpreview");
        }

        // }
    })
}

// preview pause: the image and 3D return to the beginning

function stopPreview(){
    // skull复原

    body_a_3d.rotateY(-body_angle_a * Math.PI / 180);
    body_angle_a = 0;
    body_b_3d.rotateY(-body_angle_b * Math.PI / 180);
    body_angle_b = 0;
    body_c_3d.rotateY(-body_angle_c * Math.PI / 180);
    body_angle_c = 0;

    head_a_3d.rotateX(-head_angle_a * Math.PI / 180);
    head_angle_a = 0;
    head_b_3d.rotateX(-head_angle_b * Math.PI / 180);
    head_angle_b = 0;
    head_c_3d.rotateX(-head_angle_c * Math.PI / 180);
    head_angle_c = 0;

    mouth_a_3d.rotateX(-mouth_angle_a * Math.PI / 180);
    mouth_angle_a = 0;
    mouth_b_3d.rotateX(-mouth_angle_b * Math.PI / 180);
    mouth_angle_b = 0;
    mouth_c_3d.rotateX(-mouth_angle_c * Math.PI / 180);
    mouth_angle_c = 0;

    left_a_3d.rotateX(-left_angle_a * Math.PI / 180);
    left_angle_a = 0;
    left_b_3d.rotateX(-left_angle_b * Math.PI / 180);
    left_angle_b = 0;
    left_c_3d.rotateX(-left_angle_c * Math.PI / 180);
    left_angle_c = 0;

    right_a_3d.rotateX(-right_angle_a * Math.PI / 180);
    right_angle_a = 0;
    right_b_3d.rotateX(-right_angle_b * Math.PI / 180);
    right_angle_b = 0;
    right_c_3d.rotateX(-right_angle_c * Math.PI / 180);
    right_angle_c = 0;



    // 转盘复原

    $("#Base_0").css("transform", "rotate(0deg)");
    $("#BASE_RED").css("transform", "rotate(0deg)");
    $("#BASE_GREEN").css("transform", "rotate(120deg)");
    $("#BASE_BLUE").css("transform", "rotate(-120deg)");
    $("#body_red").css("transform", "rotate(0deg)");
    $("#body_green").css("transform", "rotate(0deg)");
    $("#body_blue").css("transform", "rotate(0deg)");

    $("#Base_0").css("transition-duration", "0s");
    $("#BASE_RED").css("transition-duration", "0s");
    $("#BASE_GREEN").css("transition-duration", "0s");
    $("#BASE_BLUE").css("transition-duration", "0s");
    $("#body_red").css("transition-duration", "0s");
    $("#body_green").css("transition-duration", "0s");
    $("#body_blue").css("transition-duration", "0s");

    //所有未预览标签归零

    $(".unpreview").each(function(){$(this).removeClass("unpreview");})
}


$(document).ready(function(){
    $(".PLAY").click(           //PLAY BUTTON CLICK
        function(){
            alert("Now start PLAY the story!")
            if($(".block").length ==0){alert("Please insert the STORY!")}
            else{
                //给每一个BLOCK加一个未读的标签
                $(".block").each(function(){$(this).addClass("unplay");})

                var i = setInterval("play()",100);

                $(".PAUSE").click(function(){
                    clearInterval(i)
                    stopSound();

                });

                $(".STOP").click(function(){
                    clearInterval(i)

                    //时间线归零
                    $(".TimeController").val(0);
                    $(".CurrentTime").val(0);
                    stopSound();

                    $(".unplay").each(function(){$(this).removeClass("unplay");}) //delete the unplay flag

                })

            }

        }
    );
});




$(document).ready(function(){
    $(".PREVIEW").click(           //PREVIEW BUTTON CLICK
            function(){
                //alert("Now start preview the story!")
                if($(".block").length ==0){alert("Please insert the STORY!")}
                else{
                    //给每一个BLOCK加一个未读的标签
                    $(".block").each(function(){$(this).addClass("unpreview");})

                    var i = setInterval("preview()",100);
                    $(".PAUSE").click(function(){
                        clearInterval(i);
                        stopSound();

                    })

                    $(".STOP").click(function(){
                        clearInterval(i)
                        //时间线归零
                        $(".TimeController").val(0);
                        $(".CurrentTime").val(0);
                        stopPreview();
                        stopSound();


                    })
                }

            }
    );
});






$(document).ready(function(){
    $(document).on("click",".UPLOAD",function(event){          //PLAY BUTTON CLICK
            if($(".block").length ==0){
                alert("Please insert the STORY!")
            }
            else{


                    //alert("保存文件！")
                    if (!confirm("Are you sure to save the story？")) {
                    }else{

                        $("#fileSave").trigger("click");
                    }



            }
    });

    $(document).on("change","#fileSave",function(event){

        fspath = $("#fileSave").val();
        alert(fspath);
        if(fspath == ""){
        }else{
            $(".block").each(function(){
                blocksave($(this));     //读入所有block数据给send
            });

            fs.writeFile(fspath, send, function (err) {
                if (err) {
                    alert("Unsuccessful save!")
                } else {
                    send = "";
                    alert("File Saved!");
                }
            });
        }

    });
});



$(document).ready(function(){
    $(".CLEAN").click(           //PLAY BUTTON CLICK
        function(){
            if (confirm("Are you sure to clean the story？")) {
                //
                $(".block").remove();
                HeadNum_a = 0;
                HeadNum_b = 0;
                HeadNum_c = 0;
                MouthNum_a = 0;
                MouthNum_b = 0;
                MouthNum_c = 0;
                LHNum_a = 0;
                LHNum_b = 0;
                LHNum_c = 0;
                RHNum_a = 0;
                RHNum_b = 0;
                RHNum_c = 0;
                BodyNum_a = 0;
                BodyNum_b = 0;
                BodyNum_c = 0;
                PNum_a = 0;
                PNum_b = 0;
                PNum_c = 0;
                BaseNum = 0;

                blockNum = 0;

            }else {

            }

        });

    $(".STOP").click(function(){
        //时间线归零
        $(".TimeController").val(0);
        $(".CurrentTime").val(0);
        if($(".block").length>0){
        }

    })
});

