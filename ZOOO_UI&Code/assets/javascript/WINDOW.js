/**
 * Created by liuyejun on 15/10/21.
 */

// Load native UI library
var gui = require('nw.gui'); //or global.window.nwDispatcher.requireNwGui() (see https://github.com/rogerwang/node-webkit/issues/707)

// Get the current window
var win = gui.Window.get();

//win.maximize();


function fullscreen(){
    elem=document.body;
    if(elem.webkitRequestFullScreen){
        elem.webkitRequestFullScreen();
    }else if(elem.mozRequestFullScreen){
        elem.mozRequestFullScreen();
    }else if(elem.requestFullScreen){
        elem.requestFullscreen();
    }else{
        //浏览器不支持全屏API或已被禁用
    }
}
function exitFullscreen(){
    var elem=document;
    if(elem.webkitCancelFullScreen){
        elem.webkitCancelFullScreen();
    }else if(elem.mozCancelFullScreen){
        elem.mozCancelFullScreen();
    }else if(elem.cancelFullScreen){
        elem.cancelFullScreen();
    }else if(elem.exitFullscreen){
        elem.exitFullscreen();
    }else{
        //浏览器不支持全屏API或已被禁用
    }
}

var winfull = false
$(document).ready(function(){

    $("#Max").click(function(){
        if(winfull){
            exitFullscreen();
            winfull = false;
        }else{
            fullscreen();
            winfull = true;
        }

    })
    $("#Min").click(function(){
        win.minimize();

    })
    $("#Close").click(function(){
        if (confirm("确认关闭程序吗？")) {
            //alert("确定");
            window.close();
        }
        else {
            //alert("取消");
        }
        //process.exit();

    })

    $(window).on('dragover', function (e) {
        e.preventDefault();
        e.originalEvent.dataTransfer.dropEffect = 'none';
    });
    $(window).on('drop', function (e) {
        e.preventDefault();
    });


    $(document).on('dragstart', 'img', function (e) {
        e.preventDefault();
    });
})