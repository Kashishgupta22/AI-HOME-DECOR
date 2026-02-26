let wall;
let scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f2f5);

let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//camera.position.set(8, 6, 10);

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth - 320, window.innerHeight);
document.getElementById("scene-container").appendChild(renderer.domElement);
camera.position.set(0, 4, 12);
camera.lookAt(0, 3, -5);

//Orbit Controls
//let controls = new THREE.OrbitControls(camera, renderer.domElement);

//Lighting
// let ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
// scene.add(ambientLight);

// let directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
// directionalLight.position.set(5, 10, 7);
// scene.add(directionalLight);

// // Lighting
let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);


// Floor
let floorGeometry = new THREE.PlaneGeometry(15, 15);
let floorMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
let floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Wall
 let textureLoader = new THREE.TextureLoader();
 let wallTexture = textureLoader.load('https://threejs.org/examples/textures/brick_diffuse.jpg');
 
let wallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture });
let wallGeometry = new THREE.BoxGeometry(15, 6, 0.3);
wall = new THREE.Mesh(wallGeometry, wallMaterial);
wall.position.set(0, 3, -7);
scene.add(wall);

// Left Wall
let leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
leftWall.rotation.y = Math.PI / 2;
leftWall.position.set(-7.5, 3, 0);
scene.add(leftWall);

// Right Wall
let rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
rightWall.rotation.y = Math.PI / 2;
rightWall.position.set(7.5, 3, 0);
scene.add(rightWall);

// Furniture Objects
let sofa = new THREE.Mesh(
  new THREE.BoxGeometry(4, 1.5, 2),
  new THREE.MeshStandardMaterial({ color: 0x555555 })
);
sofa.position.set(-3, 0.75, -4);
sofa.visible = false;
scene.add(sofa);

let table = new THREE.Mesh(
  new THREE.BoxGeometry(2, 0.5, 1.5),
  new THREE.MeshStandardMaterial({ color: 0x8b4513 })
);
table.position.set(2, 0.25, -3);
table.visible = false;
scene.add(table);

let lamp = new THREE.Mesh(
  new THREE.CylinderGeometry(0.2, 0.2, 3),
  new THREE.MeshStandardMaterial({ color: 0xffff99 })
);
lamp.position.set(5, 1.5, -4);
lamp.visible = false;
scene.add(lamp);



// Wall Color Change
function changeWallColor(color) {
  wall.material.color.set(color);
}

// AI Integration
function generateDecor() {
  const style = document.getElementById("styleInput").value.toLowerCase();
  const suggestionsDiv = document.getElementById("aiSuggestions");
  suggestionsDiv.innerHTML = "";

  let suggestions = [];

  if (style.includes("modern")) {
    suggestions = [
      "Grey Sofa",
      "Glass Coffee Table",
      "Minimal Floor Lamp",
      "Abstract Wall Art",
      "Neutral Rug"
    ];
  } else if (style.includes("luxury")) {
    suggestions = [
      "Velvet Sofa",
      "Marble Coffee Table",
      "Golden Lamp",
      "Large Mirror",
      "Premium Rug"
    ];
  } else {
    suggestions = [
      "Sofa",
      "Coffee Table",
      "Lamp",
      "Wall Decor",
      "Rug"
    ];
  }

  suggestions.forEach(item => {
    let div = document.createElement("div");
    div.className = "suggestion-item";
    div.innerText = item;
    div.onclick = () => applySuggestion(item);
    suggestionsDiv.appendChild(div);
  });
}

let rug = new THREE.Mesh(
  new THREE.PlaneGeometry(5, 3),
  new THREE.MeshStandardMaterial({ color: 0xffe4c4 })
);
rug.rotation.x = -Math.PI / 2;
rug.position.set(0, 0.01, -3);
rug.visible = false;
scene.add(rug);

// Apply Suggestions
function applySuggestion(item) {
  if (item.toLowerCase().includes("sofa")) sofa.visible = true;
  if (item.toLowerCase().includes("table")) table.visible = true;
  if (item.toLowerCase().includes("lamp")) lamp.visible = true;
  if (item.toLowerCase().includes("rug")) rug.visible = true;
}

// Animate
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);


 // renderer.shadowMap.enabled = true;
}
animate();