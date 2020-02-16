import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import template from 'rollup-plugin-generate-html-template';

const extensions = [
    '.ts'
];

export default [

    // Geometry
    buildExample('triangle-screen-shader'),
    buildExample('draw-modes'),
    buildExample('indexed-vs-non-indexed'),
    buildExample('load-json'),
    buildExample('wireframe'),
    buildExample('base-primitives'),
    buildExample('particles'),
    buildExample('instancing'),
    buildExample('polylines'),
    buildExample('load-gltf'),

    // Scenes
    buildExample('scene-graph'),
    buildExample('sort-transparency'),
    buildExample('frustum-culling'),

    // Interaction
    buildExample('orbit-controls'),
    buildExample('raycasting'),
    buildExample('mouse-flowmap'),

    //Shading
    buildExample('fog'),
    buildExample('textures'),
    buildExample('anisotropic'),

    buildExample('skydome'),
    buildExample('cube-map'),
    buildExample('normal-maps'),
    buildExample('flat-shading-matcap'),
    buildExample('wireframe-shader'),
    buildExample('msdf-text'),
    buildExample('pbr'),
    buildExample('compressed-textures'),

    // Frame Buffer
    buildExample('render-to-texture'),
    buildExample('post-fxaa'),
    buildExample('mrt'),
    buildExample('shadow-maps'),
    buildExample('post-fluid-distortion'),
    buildExample('gpgpu-particles'),

    // Animation
    buildExample('skinning'),

    // Performance
    buildExample('high-mesh-count', 'src/examples/high-mesh-count/template.html')
]


function buildExample(example, htmlTemplate = 'src/examples/template.html') {
    return {
        input: `./src/examples/${example}/index.ts`,
        output: {
            file: `./examples/${example}.js`,
            format: 'iife',
            // sourcemap: true
            name: 'window', extend: true, globals: {}
        },
        watch: {
            chokidar: {
                usePolling: true
            }
        },
        plugins: [

            template({
                template: htmlTemplate,
                target: `${example}.html`
            }),
            resolve({ extensions }),
            babel({ extensions, include: ['./src/**/*'] }),
        ]
    }
}
