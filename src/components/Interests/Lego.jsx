import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('/plane/lego.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0} groundColor="black" />
      <spotLight
        position={[50, 50, 50]}
        angle={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        color={'beige'}
      />
      <pointLight intensity={0} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.06 : 0.06}
        position={isMobile ? [-0.5, -1.5, 1.55] : [-0.5, -1.5, 1.55]}
        rotation={[1, 1.5, -1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [rotation, setRotation] = useState(false);

  useEffect(() => {
    var canvas = document.getElementById('IntLegoCanvas');
    if (canvas !== null) {
      canvas.addEventListener('mouseenter', function (event) {
        setRotation(true);
      });
      canvas.addEventListener('mouseleave', function (event) {
        setRotation(false);
      });
    }
  });

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      id="IntLegoCanvas"
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={rotation}
          autoRotateSpeed={5}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
