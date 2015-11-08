/**
 * Created by liuyejun on 15/10/18.
 */
var ABC_st = "a"; //button ABC status
var HeadNum_a = 0;var HeadNum_b = 0;var HeadNum_c = 0;
var MouthNum_a = 0;var MouthNum_b = 0;var MouthNum_c = 0;
var LHNum_a = 0;var LHNum_b = 0;var LHNum_c = 0;
var RHNum_a = 0;var RHNum_b = 0;var RHNum_c = 0;
var BodyNum_a = 0;var BodyNum_b = 0;var BodyNum_c = 0;
var PNum_a = 0;var PNum_b = 0;var PNum_c = 0;
var BaseNum = 0;
var blockNum = 0;


var HeadLen_a = $(".block_a_head").length;var HeadLen_b = $(".block_b_head").length;var HeadLen_c = $(".block_c_head").length;
var MouthLen_a = $(".block_a_mouth").length;var MouthLen_b = $(".block_b_mouth").length;var MouthLen_c = $(".block_c_mouth").length;
var LHLen_a = $(".block_a_lh").length;var LHLen_b = $(".block_b_lh").length;var LHLen_c = $(".block_c_lf").length;
var RHLen_a = $(".block_a_rh").length;var RHLen_b = $(".block_b_rh").length;var RHLen_c = $(".block_c_rh").length;
var BodyLen_a = $(".block_a_body").length;var BodyLen_b = $(".block_b_body").length;var BodyLen_c = $(".block_c_body").length;
var PLen_a = $(".block_a_p").length;var PLen_b = $(".block_b_p").length;var PLen_c = $(".block_c_p").length;
var BaseLen = $(".block_base").length;
var BlockLen = $(".block").length;


var onTime = $(".TimeController").val();

var block = 0;
var blockorder = 0; //序号
var send ="";       //储存的字符串
var cmd ="";        //执行的字符串
var isp = 0;


var fsname ='';
var fspath ='';
var fsnum = 0;