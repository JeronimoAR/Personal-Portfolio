import "./style.css";

import * as THREE from "three";
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

//Background Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg"),
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

//Stars
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(300));

  star.position.set(x, y, z);
  scene.add(star);
}
Array(600).fill().forEach(addStar);

//Responsive
window.addEventListener("resize", function (e) {
  //console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight + ' high');
  renderer.setSize(document.body.clientWidth, document.body.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  camera.aspect = document.body.clientWidth / document.body.clientHeight;
  camera.updateProjectionMatrix();
});

//Camera movement
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  camera.position.z = t * -0.03;
  camera.position.y = t * -0.002;
}

document.body.onscroll = moveCamera;

//animation
function animate() {
  requestAnimationFrame(animate);
  //controls.update();
  renderer.render(scene, camera);
}
animate();

//Typed
var typed = new Typed(".multiple-text", {
  strings: ["Jeronimo", "A Fullstack Developer", "A Content Creator"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
  showCursor: false,
});
//tipeo
var tipeo = new Typed(".texto-multiple", {
  strings: ["Jeronimo", "Desarrollador Full Stack", "Creador de contenido"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
  showCursor: false,
});

//Active Buttons
const homeButton = document.getElementById("btn-home");
const aboutButton = document.getElementById("btn-about");
const skillsButton = document.getElementById("btn-skills");
const portfolioButton = document.getElementById("btn-portfolio");
const contactButton = document.getElementById("btn-contact");

const w = window;
w.addEventListener("load", (l) => {
  homeButton.classList.add("active");
});
w.addEventListener("scroll", (s) => {
  //console.log("Pantalla: " + w.scrollY);
  let homeButtonCords = document.getElementById("home").getBoundingClientRect();
  let aboutButtonCords = document
    .getElementById("about")
    .getBoundingClientRect();
  let skillsButtonCords = document
    .getElementById("skills")
    .getBoundingClientRect();
  let portfolioButtonCords = document
    .getElementById("projects")
    .getBoundingClientRect();
  let contactButtonCords = document
    .getElementById("contact")
    .getBoundingClientRect();
  //console.log("Cords portfolio bottom: " + portfolioButtonCords.bottom);
  if (homeButtonCords.top <= 0 && aboutButtonCords.top > 0) {
    homeButton.classList.add("active");
    aboutButton.classList.remove("active");
    skillsButton.classList.remove("active");
    portfolioButton.classList.remove("active");
    contactButton.classList.remove("active");
  } else if (aboutButtonCords.top <= 0 && skillsButtonCords.top > 0) {
    aboutButton.classList.add("active");
    homeButton.classList.remove("active");
    skillsButton.classList.remove("active");
    portfolioButton.classList.remove("active");
    contactButton.classList.remove("active");
  } else if (skillsButtonCords.top <= 0 && portfolioButtonCords.top > 0) {
    skillsButton.classList.add("active");
    aboutButton.classList.remove("active");
    homeButton.classList.remove("active");
    portfolioButton.classList.remove("active");
    contactButton.classList.remove("active");
  } else if (
    portfolioButtonCords.top <= 0 &&
    portfolioButtonCords.bottom >= 0
  ) {
    portfolioButton.classList.add("active");
    aboutButton.classList.remove("active");
    skillsButton.classList.remove("active");
    homeButton.classList.remove("active");
    contactButton.classList.remove("active");
  } else if (portfolioButtonCords.bottom < 0) {
    contactButton.classList.add("active");
    aboutButton.classList.remove("active");
    skillsButton.classList.remove("active");
    portfolioButton.classList.remove("active");
    homeButton.classList.remove("active");
  }
});

window.addEventListener("load", function () {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "none";
});

// Define translations for different languages
const translations = {
  en: {
    welcome: "Hello world",
    toggle: "Toggle Language",
    homeBtn: "Home",
    aboutBtn: "About",
    skillBtn: "Skills",
    projectsBtn: "Projects",
    contactBtn: "Contact",
    im: "I'm",
    scroll:
      "Scroll down to know more about me or use the top buttons for a better experience",
    downloadCV: "Download CV.",
    aboutMe: "About Me",
    aboutMeText:
      "Full-stack programmer with practical knowledge of programming languages and the ability to quickly grasp new technologies, along with the skill to work in a team environment.",
    aptitudes: "Aptitudes",
    asist: "Assistance to the Development Manager or Senior Developer",
    contribution: "Contribute to the company's development process",
    capacitacion: "Continuous training",
    investigation: "Research",
    monitorizacion: "Monitoring",
    diseñar: "Design and definition",
    solucionar: "troubleshooting",
    responsability: "Responsibility and patience",
    skills:"Skills",
    skillsText:"FullStack develpment with: ",
    contact:"Contact me",
  },
  es: {
    welcome: "Hola mundo",
    toggle: "Cambiar Idioma",
    homeBtn: "Inicio",
    aboutBtn: "Sobre Mi",
    skillBtn: "Skills",
    projectsBtn: "Proyectos",
    contactBtn: "Contacto",
    im: "Soy",
    scroll:
      "Dezlisa hacia abajo para saber mas o utiliza los botones de arriba para una mejor experiencia",
    downloadCV: "Descargar CV.",
    aboutMe: "Sobre mi",
    aboutMeText:
      "Programador FULL STACK, con conocimiento práctico en lenguajes de programación y capacidad de entender nuevas tecnologías rapidamente y la facultad de trabajar en un entorno de equipo. Aspirante a Game Developer",
    aptitudes: "Aptitudes",
    asist: "Asistencia al gerente de desarrollo o desarrollador senior",
    contribution: "Contribuir en el proceso de desarrollo de la empresa",
    capacitacion: "Capacitación constante",
    investigation: "Investigación",
    monitorizacion: "Monitorización",
    diseñar: "Diseñar y definir",
    solucionar: "Solucionar errores",
    responsability: "Responsabilidad y paciencia",
    skills:"Abilidades",
    skillsText:"Programacion full stack utilizando herramientas como:",
    contact:"Contactame",
  },
};

// Function to update the content with the selected language
function updateLanguage(language) {
  const elements = document.querySelectorAll("[data-translation]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translation");
    console.log(key);
    console.log(language);
    element.textContent = translations[language][key];
  });
}

// Initial language setting
let currentLanguage = "en"; // Default to English
updateLanguage(currentLanguage);

// Toggle language when the button is clicked
const languageToggle = document.getElementById("toggle");
const typeds = document.querySelector(".multiple-text");
const tipeos = document.querySelector(".texto-multiple");
tipeos.style.display = "none";

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "es" : "en"; // Toggle between English and Spanish
  updateLanguage(currentLanguage);
  if (currentLanguage == "en") {
    typeds.style.display = "block";
    tipeos.style.display = "none";
  } else {
    tipeos.style.display = "block";
    typeds.style.display = "none";
  }
});
