import ReactThreeTestRenderer from '@react-three/test-renderer'
import Viewer from '../pages/components/Viewer'

// Checks for a mesh within scene
test('mesh to have two children', async () => {
    const renderer = await ReactThreeTestRenderer.create(<Viewer/>)
    const mesh = renderer.scene.children[0].allChildren
    expect(mesh.length).toBe(2);
  })
  
// Rendered cube should have blue color
  test('Cube to have color blue', async () => {
    const renderer = await ReactThreeTestRenderer.create(<Viewer/>)
    const searchByColor = renderer.scene.findAll((node) =>
      node.props.color === "royalblue"
    )
    expect(searchByColor.length).toBe(1);
  })

  // Click event to scale the mesh 
  test('Click event makes cube bigger', async () => {
    const renderer = await ReactThreeTestRenderer.create(<Viewer/>)
    const mesh = renderer.scene.children[0]
    expect(mesh.props.scale).toBe(2)
    await renderer.fireEvent(mesh,"click")
    expect(mesh.props.scale).toBe(4)
  })