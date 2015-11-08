/**
 * Created by liuyejun on 15/10/16.
 */
/*
function change(){
    var num=document.getElementById("range");
    var location=document.getElementById("show");
    location.value=num.value;
}*/

$(document).ready(function () {
    var txt = $ (".CurrentTime");
    $ (".TimeController").change(function() {
        var me = $ (this);
        txt.val(me.val());

        //if the timeline change, all the unplay and unpreview tag will clean
        $(".unpreview").each(function(){$(this).removeClass("unpreview");})
        $(".unplay").each(function(){$(this).removeClass("unplay");})


    });
});

$(document).ready(function () {
    $ (".CurrentTime").change(function (){
        var v = $ (this).val();
        $(".TimeController").val(v);
        //scroll skip to the timeline position
        var i = parseFloat(v)*60;
        $ (".b_right").scrollLeft(i);
    });
});

