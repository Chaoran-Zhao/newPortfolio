import React from 'react'
import * as THREE from 'three'
import { useEffect, useRef, useState, useContext } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'
import {images} from '../index'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import './Photo.css'
import { useNavigate } from "react-router-dom";
import { ColorModeContext, tokens } from "../../../theme";
import { Box, IconButton, useTheme, Button, } from "@mui/material";

const GOLDENRATIO = 1.61803398875

const Photo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  return (
    <>
    <div className='PhotoHeader'>
      <Button style={{border: '2px solid', borderColor: theme.palette.mode==='light'? colors.primary[500]: "#fcfcfc"}}>
        <ArrowBackIcon
          style={{color: theme.palette.mode==='light'? colors.primary[500]: "#fcfcfc"}}
          onClick={() => {
            navigate("/interests");
          }}
        />
      </Button>
      
    </div>
    <Canvas id="photoCanvas" dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
          <color attach="background" args={[`${theme.palette.mode==='dark'? colors.primary[500]: "#fcfcfc"}`]} />
          <fog attach="fog" args={['#191920', 0, 15]} />
          <group position={[0, -0.6, 0]}>
              <Frames images={images} />
              <mesh rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[50, 10]} />
                  <MeshReflectorMaterial
                      blur={[300, 100]}
                      resolution={2048}
                      mixBlur={1}
                      mixStrength={50}
                      roughness={1}
                      depthScale={1.2}
                      minDepthThreshold={0.4}
                      maxDepthThreshold={1.4}
                      color="#050505"
                      metalness={0.5} />
              </mesh>
          </group>
          <Environment preset="city" />
      </Canvas></>
  )
}

export default Photo



function Frames({ images, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt)
    easing.dampQ(state.camera.quaternion, q, 0.4, dt)
  })
  return (
    <group
      ref={ref}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props) => <Frame key={props.url} {...props} /> /* prettier-ignore */)}
    </group>
  )
}

function Frame({ url, c = new THREE.Color(), ...props }) {
  const image = useRef()
  const frame = useRef()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const name = getUuid(url)
  const isActive = params?.id === name
  useCursor(hovered)
  useFrame((state, dt) => {
    image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
    easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
    easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
  })
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, 0.6, 0.05]} 
        // change here for horizontal/vertical scale
        position={[0, GOLDENRATIO / 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        {/* <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}> */}
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        {/* <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} /> */}
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text maxWidth={0.1} anchorX="left" anchorY="top" position={[0.55, GOLDENRATIO, 0]} fontSize={0.025}> 
      {/* Change here for the text location */}
        {name.split('-').join(' ')}
      </Text>
    </group>
  )
}