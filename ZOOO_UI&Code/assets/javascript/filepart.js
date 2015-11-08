/**
 * Created by liuyejun on 15/10/25.
 */

var FileNum = 0;


$(document).ready(function(){
            $(".file_upload_2").change(function() {
                var filepath = $(".file_upload_2").val();
                //alert(filepath);
                var filename = filepath.slice(filepath.lastIndexOf('/') + 1);

                var newElems = document.createElement("div");
                newElems.classList.add("_File");
                newElems.id = "file" + FileNum;

                $("#filelist").prepend(newElems);
                var e1 = newElems.id;
                newElems = document.createElement("div");
                newElems.classList.add("_File_Name");
                newElems.id = "filename" + FileNum;
                newElems.textContent = filename;
                $("#"+e1).prepend(newElems);
                var e2 = newElems.id;
                newElems = document.createElement("button");
                newElems.classList.add("_File_plus");
                newElems.id = "fileplus" + FileNum;
                $("#"+e1).prepend(newElems);
                var e3 = newElems.id;
                newElems = document.createElement("div");
                newElems.classList.add("pathNameStorage");
                newElems.id = "pathNameStorage" + FileNum;
                $("#"+e1).append(newElems);
                newElems.textContent = filepath;
                var e4 = newElems.id;

                FileNum++;

            });
});


$(document).ready(function(){
    $(document).on("click","._File_plus",function(event){
        var filepath =$(this).parent().children(".pathNameStorage").text();
        var data = fs.readFileSync(filepath,"utf-8");
        var receive = data.toString();
        //alert("receive:\n"+receive);

        //current timeline;
        var s = $(".CurrentTime").val() * 60;

        while(receive.length>0){
            //slice the file
            var block_info = receive.slice(receive.indexOf('@')+1,receive.indexOf('#')); //获得子字符串
            receive = receive.slice(receive.indexOf('#')+1); //裁剪字符串
            //alert("blockinfo:"+block_info)
            //alert("剩下receive:"+receive)

            //根据block_info 创建BLOCK
            var newElems = document.createElement("div");  //新建div
            newElems.style.position = "absolute";
            newElems.classList.add("block");

            //Classname
            var temp = block_info.slice(block_info.indexOf('@')+1,block_info.indexOf('|'));
            newElems.classList.add(temp);
            block_info = block_info.slice(block_info.indexOf('|')+1); //delete classname
            //alert("className:"+temp)

            //path
            var path;
            if(temp == "block_a_sound"||temp =="block_b_sound"||temp =="block_c_sound"||temp =="block_BG_sound"){
                temp = block_info.slice(block_info.indexOf('@')+1,block_info.indexOf('|'));
                path = temp;
                block_info = block_info.slice(block_info.indexOf('|')+1); //delete path

            }

            //id
            newElems.id = "block_"+blockNum;
            blockNum++;
            temp = block_info.slice(0,block_info.indexOf('|'));
            block_info = block_info.slice(block_info.indexOf('|')+1); //delete id
            //alert("id:"+temp)

            //ACTION
            var action = block_info.slice(0,block_info.indexOf('|'));
            block_info = block_info.slice(block_info.indexOf('|')+1); //delete action
            //alert("ACTION:"+action)

            //TIME
            var time = block_info.slice(0,block_info.indexOf('|'));
            block_info = block_info.slice(block_info.indexOf('|')+1); //delete time
            //alert("TIME:"+time)

            //放置BLOCK 父类名字
            temp = block_info.slice(0,block_info.indexOf('|'));
            $("."+temp).prepend(newElems);
            block_info = block_info.slice(block_info.indexOf('|')+1); //delete PAREENT
            //alert("PARENT:"+temp)

            //LEFT
            temp = block_info.slice(0,block_info.indexOf('|'));
            temp = parseFloat(s) + parseFloat(temp); //根据起始位置
            newElems.style.left = temp + "px";
            block_info = block_info.slice(block_info.indexOf('|')+1); //delete left
            //alert("LEFT:"+temp)

            //length
            temp = block_info.slice(0,block_info.indexOf('|'));
            newElems.style.width = temp + "px";
            block_info = block_info.slice(block_info.indexOf('|')+1); //delete length
            //alert("LENGTH:"+temp)


            //Inside
            //加上动作时长部分
            var newblock = $("#" + newElems.id);
            var newT0 = document.createElement("div");
            var newT1 = document.createElement("div");
            var newT = document.createElement("div");
            newT0.classList.add("action");
            newT1.classList.add("time_length");
            newT.classList.add("block_content");
            newblock.append(newT);
            newblock.children("div").append(newT1);
            newblock.children("div").prepend(newT0);//将子结构放入DIV
            newT0.textContent = action;
            newT1.textContent = time;

            //Path
            var newPath = document.createElement("div");
            newPath.classList.add("pathNameStorage");
            $("#"+newElems.id).append(newPath);
            newPath.textContent = path;



            //加上控制部分

            var newButtons0 = document.createElement("button");
            var newButtons1 = document.createElement("button"); //新建button
            newButtons0.classList.add("block_left");
            newButtons1.classList.add("block_right");
            newblock.prepend(newButtons0);
            newblock.append(newButtons1);    //将子结构放入DIV



        }

        makeOrder();
    });
});








