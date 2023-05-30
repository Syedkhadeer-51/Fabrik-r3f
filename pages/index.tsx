import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import Image from 'next/image'
import Viewer from './components/Viewer'




export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Vark-react</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Viewer-section */}
      <Canvas>
        <Viewer />
      </Canvas>
    </div>
  )
}
