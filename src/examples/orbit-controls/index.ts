
import { Renderer, Camera, Transform, Texture, Program, Geometry, Mesh, Vec3 } from '../../';
import { Orbit } from '../../';

const vertex = /* glsl */ `
            precision highp float;
            precision highp int;

            attribute vec2 uv;
            attribute vec3 position;
            attribute vec3 normal;

            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
            uniform mat3 normalMatrix;

            varying vec2 vUv;
            varying vec3 vNormal;

            void main() {
                vUv = uv;
                vNormal = normalize(normalMatrix * normal);
                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

const fragment = /* glsl */ `
            precision highp float;
            precision highp int;

            uniform float uTime;
            uniform sampler2D tMap;

            varying vec2 vUv;
            varying vec3 vNormal;

            void main() {
                vec3 normal = normalize(vNormal);
                vec3 tex = texture2D(tMap, vUv).rgb;
                
                vec3 light = normalize(vec3(0.5, 1.0, -0.3));
                float shading = dot(normal, light) * 0.15;
                gl_FragColor.rgb = tex + shading;
                gl_FragColor.a = 1.0;
            }
        `;

const renderer = new Renderer({ dpr: 2 });
const gl = renderer.gl;
document.body.appendChild(gl.canvas);
gl.clearColor(1, 1, 1, 1);

const camera = new Camera(gl, { fov: 45 });
camera.position.set(-2, 1, 2);

// Create controls and pass parameters
const controls = new Orbit(camera, {
    target: new Vec3(0, 0.7, 0),
});

function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
}
window.addEventListener('resize', resize, false);
resize();

const scene = new Transform();

const texture = new Texture(gl);
const img = new Image();
img.onload = () => texture.image = img;
img.src = 'assets/macaw.jpg';

const program = new Program(gl, {
    vertex,
    fragment,
    uniforms: {
        tMap: { value: texture },
    },
    cullFace: null,
});

loadModel();
async function loadModel() {
    const data = await (await fetch(`assets/macaw.json`)).json();

    const geometry = new Geometry(gl, {
        position: { size: 3, data: new Float32Array(data.position) },
        uv: { size: 2, data: new Float32Array(data.uv) },
        normal: { size: 3, data: new Float32Array(data.normal) },
    });

    let mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);
}

requestAnimationFrame(update);
function update() {
    requestAnimationFrame(update);

    // Need to update controls every frame
    controls.update();
    renderer.render({ scene, camera });
}

document.getElementsByClassName('Info')[0].innerHTML = 'Orbit Controls. Model by Google Poly.';
document.title = 'OGL • Orbit Controls';