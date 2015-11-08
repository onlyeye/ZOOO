/**
 * Created by liuyejun on 15/10/19.
 */

// into edit part

$(document).ready(function() {

    var isbuttonmove = false;
    $(document).on("dblclick",".block",function(event){
        $(this).remove();
    })



    $(document).on("mousedown",".block_right",function(event){
        isbuttonmove = true;
        var elem = $(this)
        var id="#"+ elem.parent().attr("id");
        var elemparent = $(id);
        var isMove = true;
        //elem.css("background-color","white");
        var mouse_x = event.pageX;
        var length = elemparent.width();

        $(document).mousemove(function(event){
            elem.css("cursor","pointer");
            if(isMove){
                if((elem.offset().left-elemparent.offset().left)>=10){
                    elemparent.css("width",length + event.pageX - mouse_x+"px");
                    elemparent.children(".block_content").children(".time_length").html(((elemparent.width()-20)/60).toFixed(2)+"s");
                }else {
                    elemparent.css("width",10+"px");
                }
            }
        }).mouseup(function(event){
            isMove = false;
            isbuttonmove = false;
            elem.css("background-color","rgba(0, 0, 0, 0.6)");
        });

    });


    $(document).on("mousedown",".block_left",function(event){
        isbuttonmove = true;
        isbuttonmove = true;
        var elem = $(this)
        var id="#"+ elem.parent().attr("id");
        var elemparent = $(id);
        var isMove = true;
        elem.css("background-color","white");
        var mouse_x = event.pageX;
        var abs_x = elemparent.position().left;
        var length = elemparent.width();

        //alert(elemparent.offset().left+"----"+elem.offset().left)
        $(document).mousemove(function(event){
            elem.css("cursor","pointer");
            if(isMove){
                if((elemparent.children(".block_right").offset().left-elem.offset().left)>=10) {
                    elemparent.css("width", length - (event.pageX - mouse_x) + "px");
                    elemparent.css("left",abs_x + event.pageX - mouse_x+"px");
                    elemparent.children(".block_content").children(".time_length").html(((elemparent.width()-20)/60).toFixed(2) + "s");
                }else {
                    elemparent.css("width",10+"px");
                }
            }
        }).mouseup(function(event){
            isMove = false;
            isbuttonmove = false;
            elem.css("background-color","rgba(0, 0, 0, 0.6)");
        });

    });

    //block drag

    $(document).on("mousedown",".block_content",function(event){
        var elemchild = $(this);
        var id="#"+ elemchild.parent().attr("id");
        var elem = $(id);
        var isMove = true;
        elem.css("cursor","move");
        elem.css("border","1px solid #ff8933");
        elem.css("background-color","white");
        elem.css("height","23px");
        elem.css("color","#ff8933");
        var mouse_x = event.pageX;
        var abs_x = elem.position().left;

        $(document).mousemove(function(event){
            elem.css("cursor","move");
            if(isMove){
                elem.css("left",abs_x + event.pageX - mouse_x+"px");
            }
        }).mouseup(function(event){
            isMove = false;
            elem.css("border","0");
            elem.css("background-color","#ff8933");
            elem.css("height","25px");
            elem.css("color","white");
        });

    });


});