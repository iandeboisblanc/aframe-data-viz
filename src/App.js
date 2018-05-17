import Aviya from 'aviya'

import Box from './Box'

class App extends Aviya{
  constructor(){
    super();
    this.addDependency(Box);
  };

  html(){
    return(`
      <a-scene
        background="color: blue">
        <a-camera
          look-controls="pointerLockEnabled: true"
          wasd-controls>
          <a-entity
            cursor="fuse: true; fuseTimeout: 500"
            ${ /* raycaster="objects: .clickable" // Not working?? */ '' }
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: black; shader: flat">
            <a-animation
              begin="click" easing="ease-in" attribute="scale" dur="150"
              fill="forwards" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
            <a-animation
              begin="cursor-fusing" easing="ease-in" attribute="scale" dur="500"
              fill="backwards" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
          </a-entity>
        </a-camera>
        <a-plane
          height="100" width="100" rotation="-90 0 0" />
        <Box/>
      </a-scene>
    `)
  }
}

export default new App();