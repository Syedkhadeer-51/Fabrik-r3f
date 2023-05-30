import React, { useRef } from 'react'

const Viewer = () => {
  const mesh  = React.useRef();
  return (
   <mesh>
    <boxGeometry/>
    <meshPhongMaterial/>
   </mesh>
  )
}

export default Viewer