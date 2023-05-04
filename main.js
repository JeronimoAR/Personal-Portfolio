import './style.css'

import * as THREE from 'three';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//Background Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(-15, 15, -15);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//Helpers
// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

//const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);
  
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));
  
  star.position.set(x, y, z);
  scene.add(star);
}

Array(600).fill().forEach(addStar);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  
  camera.position.z = t * -0.03;
  camera.position.y = t * -0.002;
}

document.body.onscroll = moveCamera

function animate() {
  requestAnimationFrame(animate);
  //controls.update();
  renderer.render(scene, camera);
}
animate()

//Typed
var typed = new Typed(".multiple-text", {
  strings: ["Jeronimo", "A Fullstack Developer", "A Content Creator"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true
})
//Active Buttons
const homeButton = document.getElementById("btn-home");
const aboutButton = document.getElementById("btn-about");
const skillsButton = document.getElementById("btn-skills");
const portfolioButton = document.getElementById("btn-portfolio");
const contactButton = document.getElementById("btn-contact");

const w = window;
w.addEventListener("load" , l => {
  homeButton.classList.add("active");
});
w.addEventListener("scroll", s => {
  console.log(w.scrollY);
  if (w.scrollY < 500) {
    homeButton.classList.add("active");
    aboutButton.classList.remove("active");
    skillsButton.classList.remove("active");
    portfolioButton.classList.remove("active");
    contactButton.classList.remove("active");
  } else if (w.scrollY >= 500 && w.scrollY < 1200) {
    aboutButton.classList.add("active");
    homeButton.classList.remove("active");
    skillsButton.classList.remove("active");
    portfolioButton.classList.remove("active");
    contactButton.classList.remove("active");
  } else if (w.scrollY >= 1200 && w.scrollY < 1700) {
    skillsButton.classList.add("active");
    aboutButton.classList.remove("active");
    homeButton.classList.remove("active");
    portfolioButton.classList.remove("active");
    contactButton.classList.remove("active");
  } else if (w.scrollY >= 1700 && w.scrollY < 2200) {
    portfolioButton.classList.add("active");
    aboutButton.classList.remove("active");
    skillsButton.classList.remove("active");
    homeButton.classList.remove("active");
    contactButton.classList.remove("active");
  } else if (w.scrollY >= 2000) {
    contactButton.classList.add("active");
    aboutButton.classList.remove("active");
    skillsButton.classList.remove("active");
    portfolioButton.classList.remove("active");
    homeButton.classList.remove("active");
  }
});