var theta = 0;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var geometry = new THREE.SphereGeometry(1.5,64 );

var texture = new THREE.TextureLoader().load('Proton.png')
var texture1 = new THREE.TextureLoader().load('Neutron.png')
var texture2 = new THREE.TextureLoader().load('Electron.png')

var material = new THREE.MeshBasicMaterial({map:texture}); // proton
var material1 = new THREE.MeshBasicMaterial({map:texture1}); //Neutron
var material2 = new THREE.MeshBasicMaterial({map:texture2}); //Electron
var geometry2 = new THREE.SphereGeometry( 0.2,32);

class Proton {
  constructor(){
    this.particle = new THREE.Mesh( geometry,material );
  }
}
class Neutron {
  constructor(){
    this.particle = new THREE.Mesh( geometry, material1)

  }
}
class Electron {
  constructor(){
    this.particle = new THREE.Mesh( geometry2, material2);
  }
}
class Helium {
  constructor(){
    this.proton_1 = new Proton
    this.proton_2 = new Proton
    this.neutron_1 = new Neutron
    this.neutron_2 = new Neutron
    this.element = new THREE.Group()
    this.nucleus = new THREE.Group()
    this.nucleus.add(this.proton_1.particle)
    this.nucleus.add(this.proton_2.particle)
    this.nucleus.add(this.neutron_1.particle)
    this.nucleus.add(this.neutron_2.particle)
    this.element.add(this.nucleus)
    this.electron_1 = new Electron
    this.electron_2 = new Electron
    this.element.add(this.electron_1.particle)
    this.element.add(this.electron_2.particle)
    this.proton_1.particle.position.x = -1.6
    this.proton_2.particle.position.x = 1.6
    this.neutron_1.particle.position.y = -1.6
    this.neutron_2.particle.position.y = 1.6

  }
}
/*
var cube = new THREE.Mesh( geometry,material );
var cube1 = new THREE.Mesh( geometry,material );
var cube2 = new THREE.Mesh( geometry,material );
var cube3 = new THREE.Mesh( geometry,material );

var cube4 = new THREE.Mesh(geometry2,material2);
var cube5 = new THREE.Mesh(geometry2,material2);*/

/*var geometry3 = new THREE.TorusGeometry(8,0.2,100);
var material4 = new THREE.MeshBasicMaterial();
var Orbit_1 = new THREE.Mesh(geometry3,material4)
var Orbit_2 = new THREE.Mesh(geometry3,material4)*/

/*var Nucleus = new THREE.Group();
cube.rotation.y = 0*Math.PI/180
cube.rotation.x = 0*Math.PI/180
cube.rotation.z = 0*Math.PI/180
cube.position.y = -1
cube1.position.x = -2.3
cube2.position.x = 2.3
cube3.position.y = 1*/
var Atom_1 = new Helium()
var Atom_2 = new Helium()
var Atom_3 = new Helium()
scene.add(Atom_1.element)
scene.add(Atom_2.element)
scene.add(Atom_3.element)


camera.position.z = 30;

function animate() {
  theta +=0.01
	requestAnimationFrame( animate );
  //
  Atom_1.element.position.x = 10*Math.sin(theta)
  Atom_1.element.position.y = -10*Math.sin(theta)
  Atom_1.element.position.z = 5*Math.cos(theta)
  Atom_1.electron_1.particle.position.x = 4*Math.cos(theta);
  Atom_1.electron_1.particle.position.y = 4*Math.sin(theta);
  Atom_1.electron_1.particle.position.z = 6*Math.cos(theta);
  //
  Atom_1.electron_2.particle.position.x = -4*Math.sin(theta);
  Atom_1.electron_2.particle.position.y = -4*Math.cos(theta);
  Atom_1.electron_2.particle.position.z = 6*Math.sin(theta);
//
Atom_1.nucleus.rotation.x =  4*Math.sin(theta);
 Atom_1.nucleus.rotation.y =  4*Math.sin(theta);
 Atom_1.nucleus.rotation.z =  4*Math.cos(theta);
 //
 Atom_2.element.position.z = -4*Math.cos(theta)
Atom_2.element.position.x = 16*Math.sin(theta)
Atom_2.element.position.y = Math.sin(theta)
//
  Atom_2.electron_1.particle.position.x = -4*Math.cos(theta);
  Atom_2.electron_1.particle.position.y = 4*Math.sin(theta);
  Atom_2.electron_1.particle.position.z = 4*Math.cos(theta);
  //
  Atom_2.electron_2.particle.position.x = 4*Math.sin(theta);
  Atom_2.electron_2.particle.position.y = -4*Math.cos(theta);
  Atom_2.electron_2.particle.position.z = 4*Math.sin(theta);


/*  Orbit_2.rotation.x = -1*Math.sin(theta*18/Math.PI);
  Orbit_2.rotation.y = -1*Math.cos(theta*18/Math.PI);
  Orbit_2.rotation.z = Math.sin(theta*18/Math.PI);*/

 Atom_2.nucleus.rotation.x =  -4*Math.sin(theta);
  Atom_2.nucleus.rotation.y =  4*Math.sin(theta);
  Atom_2.nucleus.rotation.z =  4*Math.cos(theta);

  Atom_3.element.position.x = 30*Math.cos(theta);
  Atom_3.element.position.y = 12*Math.sin(theta);

  Atom_3.electron_1.particle.position.x = 4*Math.cos(theta);
  Atom_3.electron_1.particle.position.y = 4*Math.sin(theta);
  Atom_3.electron_1.particle.position.z = -6*Math.cos(theta);
  //
  Atom_3.electron_2.particle.position.x = -4*Math.sin(theta);
  Atom_3.electron_2.particle.position.y = -4*Math.cos(theta);
  Atom_3.electron_2.particle.position.z = -6*Math.sin(theta);
//
Atom_3.nucleus.rotation.x =  4*Math.sin(theta);
 Atom_3.nucleus.rotation.y =  4*Math.sin(theta);
 Atom_3.nucleus.rotation.z =  -4*Math.cos(theta);
 //
 Atom_1.element.position.z = 10*Math.cos(theta)
Atom_3.element.position.x = 16

	renderer.render( scene, camera );
}
animate();
