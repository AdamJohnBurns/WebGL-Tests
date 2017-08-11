import './helloWorld.scss';
import BABYLON from './../../node_modules/babylonjs/dist/preview release/babylon.js';

let canvas = document.getElementById('renderCanvas'); // canvas element to render to
let engine = new BABYLON.Engine(canvas, true); // load instance of the engine

function createScene () {
  // create scene to render 3d objects to
  let scene = new BABYLON.Scene(engine);

  // create camera in above scene at specified vector coordinates
  let camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);

  // target the camera towards the scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  // attach camera to the html canvas
  camera.attachControl(canvas, false);

  // create a simple light
  let light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

  // create a basic sphere mesh and adjust its position
  let sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
  sphere.position.y = 1;

  // create a basic quad Mesh
  let ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

  return scene;
}

let scene = createScene();

// start main rendering loop
engine.runRenderLoop(() => {
  scene.render();
});

// resize the scene when window resizes
window.addEventListener('resize', () => {
  engine.resize();
});
