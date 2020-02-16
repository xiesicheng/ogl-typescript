import { Renderer, Camera, Transform, Orbit, GLTFLoader } from '../../index';
const renderer = new Renderer({ dpr: 2 });
const gl = renderer.gl;
document.body.appendChild(gl.canvas);
gl.clearColor(1, 1, 1, 1);

const camera = new Camera(gl, { near: 1, far: 1000 });
camera.position.set(281, 127, 217);

// window.CAMERA = camera;

const controls = new Orbit(camera);
controls.target.y = 50;

function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
}
window.addEventListener('resize', resize, false);
resize();

const scene = new Transform();

(async function () {
    const gltf = await GLTFLoader.load(gl, `assets/gltf/old_scooter/scene.gltf`);
    console.log(gltf);

    gltf.scene.forEach(node => node.setParent(scene));
})();

requestAnimationFrame(update);
function update() {
    requestAnimationFrame(update);
    controls.update();
    renderer.render({ scene, camera, sort: false, frustumCull: false });
}


document.getElementsByClassName('Info')[0].innerHTML = 'Load GLTF (Graphics Language Transmission Format). Model by <a href="https://sketchfab.com/3d-models/old-scooter-5e9b5072b2224ba982366490ad5f31d9" target="_blank">Nadia Ribitis</a>';
document.title = 'OGL • Load GLTF';