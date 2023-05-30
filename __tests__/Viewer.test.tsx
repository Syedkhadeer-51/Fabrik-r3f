import ReactThreeTestRenderer from '@react-three/test-renderer'
import Viewer from '../pages/components/Viewer'


test('mesh to have two children', async () => {
    const renderer = await ReactThreeTestRenderer.create(<Viewer/>)
    const mesh = renderer.scene.children[0].allChildren
    expect(mesh.length).toBe(2);
  })
  
