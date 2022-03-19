import * as THREE from 'three';
import img from '../../images/movingCurve.jpg'
const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragShader = `
  precision highp float;

  varying vec2 vUv;

  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_time;

  uniform sampler2D disp;
  uniform sampler2D tex1;
  uniform sampler2D tex2;

  float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,708.233)))
                 * 43758.5453123);
  }

  float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
  }

  void main() {
    vec2 uv = vUv;
    vec4 _currentImage;

    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec2 pos = vec2(st* u_time);

    float n = noise(pos);

    _currentImage = texture2D(tex1, vec2(
      uv.x * n,
      uv.y
    ));

    gl_FragColor = _currentImage;
  }
`;

class BasicCube {
  constructor(container) {
    this.container = container;
		this.dpr = window.devicePixelRatio || 1;
    this.camera = null;
    this.scene = null;
    this.renderer = null;
    this.cube = null;
    this.light = null;

    this.uniforms = {};
    this.material = {};

    this.init();
  }

  init() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(80, window.innerWidth*this.dpr / window.innerHeight*this.dpr, 0.1, 1000);
    this.camera.position.z = 400;
    this.camera.position.y = 150;

    this.textureLoader = new THREE.TextureLoader();

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container && this.container.appendChild(this.renderer.domElement);

    window.addEventListener('resize', this.onResize.bind(this));

    this.createUniforms();
    this.createObj();

    this.onResize();
    this.animate();
  }

  createUniforms() {
    this.uniforms = {
      u_time: { type: 'f', value: 1.0 },
      u_resolution: { type: 'v2', value: new THREE.Vector2() },
      u_mouse: { type: 'v2', value: new THREE.Vector2() },
      tex1: {
        type: 't',
        value: new THREE.TextureLoader().load(img),

      },
    };

    const uniform = this.uniforms;

    this.material = new THREE.ShaderMaterial({
      uniforms: uniform,
      vertexShader,
      fragmentShader: fragShader,
    });

    window.addEventListener('mousemove', (e) => {
      uniform.u_mouse.value.x = e.clientX;
      uniform.u_mouse.value.y = e.clientY;
    });
  }

  createObj() {
    const mat = this.material;
    const geometry = new THREE.PlaneGeometry(500, 500, 1, 1);

    this.cube = new THREE.Mesh(geometry, mat);
    this.cube.position.y = 6;
    this.cube.castShadow = true;

    this.scene.add(this.cube);
  }

  animate() {
    this.uniforms.u_time.value += 0.000002;

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.animate());
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.uniforms.u_resolution.value.x = this.renderer.domElement.width;
    this.uniforms.u_resolution.value.y = this.renderer.domElement.height;
  }
}



export default BasicCube