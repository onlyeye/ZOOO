/**
 * Created by liuyejun on 15/10/30.
 */

// to make the commandline of the motor: @order#motorPangleTtime\r\n Ddelaytime
function blockPTD(block){
    //增加角度字符串
    var text = block.children(".block_content").children(".action").text();
    //alert(text)
    var angle = 0;
    if(text == "UP"){
        send = send +"P0500";
    }else if (text == "DOWN"){
        send = send +"P2500";
    }else if (text == "FRONT"){
        send = send +"P1500";
    }else{

        var motion = 0
        if(isp==1){//上电机

            angle = text.slice(0,text.indexOf("°"));
            angle = parseFloat(angle)*11.11;

            if(angle<0){//-180~0
                motion = (2500 + angle).toFixed(0);
                if(motion>1000){
                    send = send + "P" +motion
                }else{
                    send = send + "P0"+motion
                }
            }else{ //0~180
                send = send +"P2500";
            }

        }else if(isp==2){ //下电机

            angle = text.slice(0,text.indexOf("°"));
            angle = parseFloat(angle)*11.11;
            if(angle>0){//0~180
                motion = (2500 + angle).toFixed(0);
                if(motion>1000){
                    send = send + "P" +motion
                }else{
                    send = send + "P0"+motion
                }
            }else{ //-180~0
                send = send +"P0500";
            }
        }else if(isp==3){ // 同方向
            //alert("同方向")
            angle = text.slice(0,text.indexOf("°"));
            angle = parseFloat(angle)*11.11;
            motion = (1500 + angle).toFixed(0);
            if(motion<1000){
                send = send + "P0" +motion
            }else{
                send = send + "P"+motion
            }
        }else if(isp==0) { // 异方向
            //alert("异方向")
            angle = text.slice(0, text.indexOf("°"));
            angle = parseFloat(angle)*11.11;
            motion = (1500 - angle).toFixed(0);
            if (motion < 1000) {
                send = send + "P0" + motion
            } else {
                send = send + "P" + motion
            }
        }
    }

    //增加时间字符串
    var text2 = block.children(".block_content").children(".time_length").text();
    var time = text2.slice(0,text.indexOf("s"))
    //alert(time)
    time = (parseFloat(time)*1000).toFixed(0)
    //alert(time)
    if( time<10 ){
        send = send +"T00000" + time;
    }else if( time<100 ){
        send = send +"T0000" + time;
    }else if( time<1000 ){
        send = send +"T000" + time;
    }else if( time<10000 ){
        send = send +"T00" + time;
    }else if( time<100000 ){
        send = send +"T0" + time;
    }else if( time<1000000 ){
        send = send +"T" + time;
    }

    send = send + "\\"+"r"+"\\"+"n";

    //增加延迟时间
    var delaypx = 0;//起始的PX值
    var delaytime = 0; //起始的毫秒数

    if(blockorder ==0){
        delaypx = block.position().left+10;
    }else{
        delaypx = block.position().left-$(".block"+(blockorder-1)).position().left
    }

    delaytime = (delaypx/0.06).toFixed(0);

    if( delaytime<10 ){
        send = send +"D00000" + delaytime;
    }else if( delaytime<100 ){
        send = send +"D0000" + delaytime;
    }else if( delaytime<1000 ){
        send = send +"D000" + delaytime;
    }else if( delaytime<10000 ){
        send = send +"D00" + delaytime;
    }else if( delaytime<100000 ){
        send = send +"D0" + delaytime;
    }else if( delaytime<1000000 ){
        send = send +"D" + delaytime;
    }

    //send = send + 'E';
}

function blockstring(block){


    // 生成序号字符串
    if(blockorder<10){
        send = send + "@00"+ blockorder;
    }else if(blockorder<100){
        send = send + "@0"+ blockorder;
    }else{
        send = send + "@" + blockorder;
    }
    //A
    //是不是A的Head:电机#01
    if(block.hasClass("block_a_head")){
        isp = 0;
        send = send + "#01";
        blockPTD(block);
    }
    //是不是A的Mouth:电机#02
    else if(block.hasClass("block_a_mouth")){
        isp = 0;
        send = send + "#02";
        blockPTD(block);
    }
    //是不是A的LeftHand:电机#03
    else if(block.hasClass("block_a_lh")){
        isp = 0;
        send = send + "#03";
        blockPTD(block);
    }
    //是不是A的RightHand:电机#04
    else if(block.hasClass("block_a_rh")){
        isp = 3;
        send = send + "#04";
        blockPTD(block);
    }
    //是不是A的Body:电机#05
    else if(block.hasClass("block_a_body")){
        isp = 3;
        send = send + "#05";
        blockPTD(block);
    }
    //是不是A的Panel:电机#06
    else if(block.hasClass("block_a_p")){
        isp = 1;
        send = send + "#06";
        blockPTD(block);
        isp = 2;
        send = send + "#07";
        blockPTD(block);

    }

    //B
    //是不是B的Head:电机#08
    else if(block.hasClass("block_b_head")){
        isp = 0;
        send = send + "#08";
        blockPTD(block);
    }
    //是不是B的Mouth:电机#09
    else if(block.hasClass("block_b_mouth")){
        isp = 0;
        send = send + "#09";
        blockPTD(block);
    }
    //是不是B的LeftHand:电机#10
    else if(block.hasClass("block_b_lh")){
        isp = 0;
        send = send + "#10";
        blockPTD(block);
    }
    //是不是B的RightHand:电机#11
    else if(block.hasClass("block_b_rh")){
        isp = 3;
        send = send + "#11";
        blockPTD(block);
    }
    //是不是B的Body:电机#12
    else if(block.hasClass("block_b_body")){
        isp = 3;
        send = send + "#12";
        blockPTD(block);
    }
    //是不是B的Panel:电机#13
    else if(block.hasClass("block_b_p")){
        isp = 1;
        send = send + "#13";
        blockPTD(block);
        isp = 2;
        send = send + "#14";
        blockPTD(block);
    }

    //C
    //是不是C的Head:电机#15
    else if(block.hasClass("block_c_head")){
        isp = 0;
        send = send + "#15";
        blockPTD(block);

    }
    //是不是C的Mouth:电机#16
    else if(block.hasClass("block_c_mouth")){
        isp = 0;
        send = send + "#16";
        blockPTD(block);
    }
    //是不是C的LeftHand:电机#17
    else if(block.hasClass("block_c_lh")){
        isp = 0;
        send = send + "#17";
        blockPTD(block);
    }
    //是不是C的RightHand:电机#18
    else if(block.hasClass("block_c_rh")){
        isp = 3;
        send = send + "#18";
        blockPTD(block);
    }
    //是不是C的Body:电机#19
    else if(block.hasClass("block_c_body")){
        isp = 3;
        send = send + "#19";
        blockPTD(block);
    }
    //是不是C的Panel:电机#20
    else if(block.hasClass("block_c_p")){
        isp = 1;
        send = send + "#20";
        blockPTD(block);
        isp = 2;
        send = send + "#21";
        blockPTD(block);
    }

    //Base
    //是不是Base:电机#22
    else if(block.hasClass("block_base")){
        isp = 1;
        send = send + "#22";
        blockPTD(block);
        isp = 2;
        send = send + "#23";
        blockPTD(block);
    }

    //alert(send);

}
