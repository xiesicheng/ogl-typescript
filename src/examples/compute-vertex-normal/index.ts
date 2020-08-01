
import { Renderer, OGLRenderingContext, Geometry, Camera, Transform, Program, Mesh, Orbit, Torus } from '../../index';

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
            varying vec3 vNormal;
            void main() {
                vec3 normal = normalize(vNormal);
                float lighting = dot(normal, normalize(vec3(-0.3, 0.8, 0.6)));
                gl_FragColor.rgb = vec3(0.2, 0.8, 1.0) + lighting * 0.1;
                gl_FragColor.a = 1.0;
            }
        `;

let renderer: Renderer;
let camera: Camera;
let gl: OGLRenderingContext;
let scene: Transform;
let controls;

initOGL();
addTrimesh();
animate();

function initOGL() {
    renderer = new Renderer({ dpr: 2 });
    gl = renderer.gl;
    document.body.appendChild(gl.canvas);
    gl.clearColor(1, 1, 1, 1);
    camera = new Camera(gl);
    camera.perspective({
        fov: 30,
        aspect: gl.drawingBufferWidth / gl.drawingBufferHeight,
        near: 1,
        far: 10000
    });
    camera.position.set(0, 3, 20);
    camera.up.set(0, 1, 0);
    camera.lookAt([0, 0, 0]);
    controls = new Orbit(camera);
    scene = new Transform();
}


function addTrimesh() {
    const program = new Program(gl, {
        vertex,
        fragment,
        // Don't cull faces so that plane is double sided - default is gl.BACK
        cullFace: null,
    });

    let triGeo = new Torus(gl, {
        radius: 1,
        tube: 0.3,
        radialSegments: 16,
        tubularSegments: 16,
    });

    const trimesh = new Mesh(gl, { geometry: triGeo, program });
    trimesh.setParent(scene);
    trimesh.position.x = -2; // left

    // copy Torus geometry without normal
    const vertices = triGeo.attributes.position.data;
    const indices = triGeo.attributes.index.data;
    let geometry = new Geometry(gl, {
        position: { size: 3, data: vertices },
        index: { data: indices }
        // normal: { size: 3, data: normals }
    });

    // runtime compute normal attribute
    geometry.computeVertexNormals();

    const trimesh2 = new Mesh(gl, { geometry, program });
    trimesh2.setParent(scene);
    trimesh2.position.x = 2; // right

}

function animate(time?) {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render({ scene, camera });
};

function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
}
window.addEventListener('resize', resize, false);
resize();

document.title = 'OGL • Compute Vertex Normal';
