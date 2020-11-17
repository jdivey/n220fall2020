//Application level stuff
//Cluttering the global newspace
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var camera, scene;
//create the scene
scene = createScene();
engine.runRenderLoop(function() {
    scene.render();
})


function createScene() {
    var scene = new BABYLON.Scene(engine);

    camera = new BABYLON.UniversalCamera("UC", new BABYLON.Vector3(0,0,0), scene);

    return scene;
}



