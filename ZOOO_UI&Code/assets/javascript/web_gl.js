/**
 * Created by liuyejun on 15/10/26.
 */

var rendererA;
var rendererB;
var rendererC;

function initThreeA() {
    width = document.getElementById('canvas-frame-A').clientWidth;
    height = document.getElementById('canvas-frame-A').clientHeight;
    rendererA = new THREE.WebGLRenderer({
        antialias : true
    });
    rendererA.setSize(width, height);
    document.getElementById('canvas-frame-A').appendChild(rendererA.domElement);
    rendererA.setClearColor(0xFFFFFF, 1.0);
}

function initThreeB() {
    width = document.getElementById('canvas-frame-B').clientWidth;
    height = document.getElementById('canvas-frame-B').clientHeight;
    rendererB = new THREE.WebGLRenderer({
        antialias : true
    });
    rendererB.setSize(width, height);
    document.getElementById('canvas-frame-B').appendChild(rendererB.domElement);
    rendererB.setClearColor(0xFFFFFF, 1.0);
}

function initThreeC() {
    width = document.getElementById('canvas-frame-C').clientWidth;
    height = document.getElementById('canvas-frame-C').clientHeight;
    rendererC = new THREE.WebGLRenderer({
        antialias : true
    });
    rendererC.setSize(width, height);
    document.getElementById('canvas-frame-C').appendChild(rendererC.domElement);
    rendererC.setClearColor(0xFFFFFF, 1.0);
}

var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 50;
    camera.position.y = 200;
    camera.position.z = 500;
    camera.up.x = 0;
    camera.up.y = 1;
    camera.up.z = 0;
    camera.lookAt({
        x : 0,
        y : 0,
        z : 0
    });
}

var sceneA;
var sceneB;
var sceneC;
function initSceneA() {
    sceneA = new THREE.Scene();
}
function initSceneB() {
    sceneB = new THREE.Scene();
}
function initSceneC() {
    sceneC = new THREE.Scene();
}

var light;
var light0
function initLightA() {

    light0 = new THREE.AmbientLight(0xE15E5E);
    sceneA.add(light0);

    light = new THREE.PointLight(0x686868);
    light.position.set(0, 0 ,300);
    sceneA.add(light);
}

function initLightB() {

    light0 = new THREE.AmbientLight(0x729251);
    sceneB.add(light0);

    light = new THREE.PointLight(0x686868);
    light.position.set(0, 0 ,300);
    sceneB.add(light);
}

function initLightC() {

    light0 = new THREE.AmbientLight(0x147BA0);
    sceneC.add(light0);

    light = new THREE.PointLight(0x686868);
    light.position.set(0, 0 ,300);
    sceneC.add(light);
}


var body_a_3d;var head_a_3d;var mouth_a_3d;var left_a_3d;var right_a_3d;
var body_b_3d;var head_b_3d;var mouth_b_3d;var left_b_3d;var right_b_3d;
var body_c_3d;var head_c_3d;var mouth_c_3d;var left_c_3d;var right_c_3d;

var head_a_3d_child;var mouth_a_3d_child;var left_a_3d_child; var right_a_3d_child;
var head_b_3d_child;var mouth_b_3d_child;var left_b_3d_child; var right_b_3d_child;
var head_c_3d_child;var mouth_c_3d_child;var left_c_3d_child; var right_c_3d_child;

var body_angle_a = 0;var body_angle_b = 0;var body_angle_c = 0;
var head_angle_a = 0;var head_angle_b = 0;var head_angle_c = 0;
var mouth_angle_a = 0;var mouth_angle_b = 0;var mouth_angle_c = 0;
var left_angle_a = 0;var left_angle_b = 0;var left_angle_c = 0;
var right_angle_a = 0;var right_angle_b = 0;var right_angle_c = 0;

function initObjectA() {
    var geometry = new THREE.CylinderGeometry(0,60,300,20,0)
    var material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    body_a_3d = new THREE.Mesh( geometry,material);
    sceneA.add(body_a_3d);
    body_a_3d.position.set(0,0,0);

    geometry = new THREE.CubeGeometry(150,30,10)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    mouth_a_3d = new THREE.Mesh( geometry,material);
    sceneA.add(mouth_a_3d);
    mouth_a_3d.position.set(0,-70,0);

    geometry = new THREE.CubeGeometry(150,100,10)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    head_a_3d = new THREE.Mesh( geometry,material);
    sceneA.add(head_a_3d);
    head_a_3d.position.set(0,100,0);

    geometry = new THREE.CubeGeometry(20,20,10)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    left_a_3d = new THREE.Mesh( geometry,material);
    sceneA.add(left_a_3d);
    left_a_3d.position.set(-40,-30,0);

    geometry = new THREE.CubeGeometry(20,20,10)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    right_a_3d = new THREE.Mesh( geometry,material);
    sceneA.add(right_a_3d);
    right_a_3d.position.set(40,-30,0);

    // 孩子
    geometry = new THREE.CubeGeometry(150,100,150)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    head_a_3d_child = new THREE.Mesh( geometry,material);
    sceneA.add(head_a_3d_child);
    head_a_3d_child.position.set(0,0,45);

    geometry = new THREE.CubeGeometry(150,30,150)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    mouth_a_3d_child = new THREE.Mesh( geometry,material);
    sceneA.add(mouth_a_3d_child);
    mouth_a_3d_child.position.set(0,0,45);

    geometry = new THREE.CubeGeometry(20,20,90)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    left_a_3d_child = new THREE.Mesh( geometry,material);
    sceneA.add(left_a_3d_child);
    left_a_3d_child.position.set(0,0,45);

    geometry = new THREE.CubeGeometry(20,20,90)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    right_a_3d_child = new THREE.Mesh( geometry,material);
    sceneA.add(right_a_3d_child);
    right_a_3d_child.position.set(0,0,45);

    head_a_3d_child.parent = head_a_3d;
    mouth_a_3d_child.parent = mouth_a_3d;
    mouth_a_3d.parent = head_a_3d;
    head_a_3d.parent = body_a_3d;
    left_a_3d.parent = body_a_3d;
    right_a_3d.parent = body_a_3d;
    left_a_3d_child.parent = left_a_3d;
    right_a_3d_child.parent = right_a_3d;

}
function initObjectB() {
    var geometry = new THREE.CylinderGeometry(0,60,300,20,0)
    var material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    body_b_3d = new THREE.Mesh( geometry,material);
    sceneB.add(body_b_3d);
    body_b_3d.position.set(0,0,0);

    geometry = new THREE.CubeGeometry(150,30,10)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    mouth_b_3d = new THREE.Mesh( geometry,material);
    sceneB.add(mouth_b_3d);
    mouth_b_3d.position.set(0,-70,0);

    geometry = new THREE.CubeGeometry(150,100,10)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    head_b_3d = new THREE.Mesh( geometry,material);
    sceneB.add(head_b_3d);
    head_b_3d.position.set(0,100,0);
    //cube3.rotateX(-20 * Math.PI / 180);

    geometry = new THREE.CubeGeometry(20,20,10)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    left_b_3d = new THREE.Mesh( geometry,material);
    sceneB.add(left_b_3d);
    left_b_3d.position.set(-40,-30,0);

    geometry = new THREE.CubeGeometry(20,20,10)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    right_b_3d = new THREE.Mesh( geometry,material);
    sceneB.add(right_b_3d);
    right_b_3d.position.set(40,-30,0);

// 孩子
    geometry = new THREE.CubeGeometry(150,100,150)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    head_b_3d_child = new THREE.Mesh( geometry,material);
    sceneB.add(head_b_3d_child);
    head_b_3d_child.position.set(0,0,45);

    geometry = new THREE.CubeGeometry(150,30,150)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    mouth_b_3d_child = new THREE.Mesh( geometry,material);
    sceneB.add(mouth_b_3d_child);
    mouth_b_3d_child.position.set(0,0,45);

    geometry = new THREE.CubeGeometry(20,20,90)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    left_b_3d_child = new THREE.Mesh( geometry,material);
    sceneB.add(left_b_3d_child);
    left_b_3d_child.position.set(0,0,45);

    geometry = new THREE.CubeGeometry(20,20,90)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    right_b_3d_child = new THREE.Mesh( geometry,material);
    sceneB.add(right_b_3d_child);
    right_b_3d_child.position.set(0,0,45);

    head_b_3d_child.parent = head_b_3d;
    mouth_b_3d_child.parent = mouth_b_3d;
    mouth_b_3d.parent = head_b_3d;
    head_b_3d.parent = body_b_3d;
    left_b_3d.parent = body_b_3d;
    right_b_3d.parent = body_b_3d;
    left_b_3d_child.parent = left_b_3d;
    right_b_3d_child.parent = right_b_3d;


}
function initObjectC() {
    var geometry = new THREE.CylinderGeometry(0,60,300,20,0)
    var material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    body_c_3d = new THREE.Mesh( geometry,material);
    sceneC.add(body_c_3d);
    body_c_3d.position.set(0,0,0);

    geometry = new THREE.CubeGeometry(150,30,10)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    mouth_c_3d = new THREE.Mesh( geometry,material);
    sceneC.add(mouth_c_3d);
    mouth_c_3d.position.set(0,-70,0);

    geometry = new THREE.CubeGeometry(150,100,10)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    head_c_3d = new THREE.Mesh( geometry,material);
    sceneC.add(head_c_3d);
    head_c_3d.position.set(0,100,0);
    //cube3.rotateX(-20 * Math.PI / 180);

    geometry = new THREE.CubeGeometry(20,20,10)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    left_c_3d = new THREE.Mesh( geometry,material);
    sceneC.add(left_c_3d);
    left_c_3d.position.set(-40,-30,0);

    geometry = new THREE.CubeGeometry(20,20,10)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    right_c_3d = new THREE.Mesh( geometry,material);
    sceneC.add(right_c_3d);
    right_c_3d.position.set(40,-30,0);

    mouth_c_3d.parent = head_c_3d;
    head_c_3d.parent = body_c_3d;
    left_c_3d.parent = body_c_3d;
    right_c_3d.parent = body_c_3d;

    // 孩子
    geometry = new THREE.CubeGeometry(150,100,150)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    head_c_3d_child = new THREE.Mesh( geometry,material);
    sceneC.add(head_c_3d_child);
    head_c_3d_child.position.set(0,0,45);

    geometry = new THREE.CubeGeometry(150,30,150)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    mouth_c_3d_child = new THREE.Mesh( geometry,material);
    sceneC.add(mouth_c_3d_child);
    mouth_c_3d_child.position.set(0,0,45);

    geometry = new THREE.CubeGeometry(20,20,90)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    left_c_3d_child = new THREE.Mesh( geometry,material);
    sceneC.add(left_c_3d_child);
    left_c_3d_child.position.set(0,0,45);

    geometry = new THREE.CubeGeometry(20,20,90)
    material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
    right_c_3d_child = new THREE.Mesh( geometry,material);
    sceneC.add(right_c_3d_child);
    right_c_3d_child.position.set(0,0,45);

    head_c_3d_child.parent = head_c_3d;
    mouth_c_3d_child.parent = mouth_c_3d;
    mouth_c_3d.parent = head_c_3d;
    head_c_3d.parent = body_c_3d;
    left_c_3d.parent = body_c_3d;
    right_c_3d.parent = body_c_3d;
    left_c_3d_child.parent = left_c_3d;
    right_c_3d_child.parent = right_c_3d;


}

function threeStartA() {
    initThreeA();
    initCamera();
    initSceneA();
    initLightA();
    initObjectA();
    //animation();
    renderA();

}
function threeStartB() {
    initThreeB();
    initCamera();
    initSceneB();
    initLightB();
    initObjectB();
    //animation();
    renderB();

}
function threeStartC() {
    initThreeC();
    initCamera();
    initSceneC();
    initLightC();
    initObjectC();
    //animation();
    renderC();

}


function renderA()
{
    rendererA.render(sceneA, camera);
    requestAnimationFrame(renderA);
}
function renderB()
{
    rendererB.render(sceneB, camera);
    requestAnimationFrame(renderB);
}
function renderC()
{
    rendererC.render(sceneC, camera);
    requestAnimationFrame(renderC);
}



$(document).ready(function(){
    threeStartA();
    threeStartB();
    threeStartC();
})