
import { Renderer, Camera, Transform, Program, Mesh, Vec2 } from '../../index';
import { Plane, Sphere, Box, Orbit, Raycast } from '../../Extras';

const vertex = /* glsl */ `
            precision highp float;
            precision highp int;

            attribute vec3 position;
            attribute vec3 normal;

            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
            uniform mat3 normalMatrix;

            varying vec3 vNormal;

            void main() {
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

const fragment = /* glsl */ `
            precision highp float;
            precision highp int;

            uniform float uHit;

            varying vec3 vNormal;

            void main() {
                vec3 normal = normalize(vNormal);
                float lighting = dot(normal, normalize(vec3(-0.3, 0.8, 0.6)));
                vec3 color = mix(vec3(0.2, 0.8, 1.0), vec3(1.0, 0.2, 0.8), uHit);
                gl_FragColor.rgb = color + lighting * 0.1;
                gl_FragColor.a = 1.0;
            }
        `;

type HitableMesh = Mesh & { isHit?: boolean; };

const renderer = new Renderer({ dpr: 2 });
const gl = renderer.gl;
document.body.appendChild(gl.canvas);
gl.clearColor(1, 1, 1, 1);

const camera = new Camera(gl);
camera.position.set(2, 1, 5);

const orbit = new Orbit(camera);

function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
}
window.addEventListener('resize', resize, false);
resize();

const scene = new Transform();

const planeGeometry = new Plane(gl);
const sphereGeometry = new Sphere(gl);
const cubeGeometry = new Box(gl);

const program = new Program(gl, {
    vertex,
    fragment,
    cullFace: null,
    uniforms: {
        uHit: { value: 0 },
    },
});

const plane = new Mesh(gl, { geometry: planeGeometry, program });
plane.position.set(0, 1.3, 0);
plane.setParent(scene);

const sphere = new Mesh(gl, { geometry: sphereGeometry, program });
sphere.setParent(scene);

const cube = new Mesh(gl, { geometry: cubeGeometry, program });
cube.position.set(0, -1.3, 0);
cube.setParent(scene);

// assign update functions to each mesh so they can share a program but
// still have unique uniforms by updating them just before being drawn
function updateHitUniform({ mesh }) {
    program.uniforms.uHit.value = mesh.isHit ? 1 : 0;
}
plane.onBeforeRender(updateHitUniform);
sphere.onBeforeRender(updateHitUniform);
cube.onBeforeRender(updateHitUniform);

requestAnimationFrame(update);
function update() {
    requestAnimationFrame(update);
    orbit.update();

    renderer.render({ scene, camera });
}

const mouse = new Vec2();

// Create a raycast object
const raycast = new Raycast(gl);

// Define an array of the meshes we want to test our ray against
const meshes: HitableMesh[] = [plane, sphere, cube];

// By default, raycast.intersectBounds() tests against the bounding box.
// Set it to bounding sphere by adding a 'raycast' property set to sphere geometry
sphere.geometry.raycast = 'sphere';

document.addEventListener('mousemove', move, false);
document.addEventListener('touchmove', move, false);
function move(e) {
    mouse.set(
        2.0 * (e.x / renderer.width) - 1.0,
        2.0 * (1.0 - e.y / renderer.height) - 1.0
    );

    // Update the ray's origin and direction using the camera and mouse
    raycast.castMouse(camera, mouse);

    // Just for the feedback in this example - reset each mesh's hit to false
    meshes.forEach(mesh => mesh.isHit = false);

    // raycast.intersectBounds will test against the bounds of each mesh, and 
    // return an array of intersected meshes in order of closest to farthest
    const hits: HitableMesh[] = raycast.intersectBounds(meshes);

    // Update our feedback using this array
    hits.forEach(mesh => mesh.isHit = true);
}


document.getElementsByClassName('Info')[0].innerHTML = 'Projection and Raycasting';
document.title = 'OGL • Projection and Raycasting';