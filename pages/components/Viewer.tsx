import React, { useRef, useState } from 'react';
import {useFrame } from "@react-three/fiber";
import { Mesh } from 'three'

const Viewer = () => {
 
  const mesh = useRef<Mesh>(null!)
  const [active,setActive] = useState(false)

  useFrame(() => (mesh.current.rotation.x += 0.01));
  return (
   <mesh scale={active ? 4 : 2} ref={mesh} onClick={() => setActive(!active)} >
    <boxGeometry/>
    <meshPhongMaterial color="royalblue"/>
   </mesh>
  )
}

export default Viewer