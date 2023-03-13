import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';


// init




let camera, scene, renderer;
const loader = new GLTFLoader();

export function init() {
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;
    camera.rotation.z = 1;


    scene = new THREE.Scene();
    const light = new THREE.AmbientLight( 0xffffff,1);
    scene.add(light)

    let dlight = new THREE.DirectionalLight(0xFFD700, 1);
    dlight.position.setScalar(10);
    scene.add(dlight);



    

    loader.load("./plane/reduce1.gltf", (gltf)=>{
        let model = gltf.scene;
        model.scale.set(0.00006,0.00006,0.00006);

        gsap.to(camera.position, {
            z: 1,
            duration: 1,
            ease: "back.out(1.7)"
        })
        gsap.to(camera.rotation, {
            z: 0,
            duration: 1
        })

        gsap.to(model.rotation, {
            x: -1,
            duration: 1,
            delay: 1
        })
        gsap.to(model.rotation, {
            z: Math.PI * 1.75,
            duration: 2,
            delay: 1
        })
        gsap.to(model.scale, {
            delay: 1,
            duration: 1,
            x: 0.00003,
            y: 0.00003,
            z: 0.00003
        })
        gsap.to(model.position, {
            delay: 1,
            duration: 1,
            x: .35,
            y: .3
        })

        scene.add(model)
    })

    renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animation );
    renderer.setClearColor( 0xffffff, 0 ); // second param is opacity, 0 => transparent
    document.body.appendChild( renderer.domElement );
}

// animation
function animation( time ) {

    // if (scene) {
    //     scene.rotation.x += 0.01;
    //     scene.rotation.z += 0.01;
    // }
	renderer.render( scene, camera );

}