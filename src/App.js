import Aviya from 'aviya'

import Box, { createBoxEl } from './Box'

class App extends Aviya{

  constructor(){
    super();
    this.addDependency(Box);
    this.loadData();
  };

  loadData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const pointData = [];
        for (let i = 0; i < 100; i++) {
          pointData.push([Math.random(), Math.random(), Math.random()]);
        }
        return resolve(pointData);
      }, 3000);
    }).then(this.handleReceivedData);
  }

  handleReceivedData(data) {
    const scene = document.getElementById('scene');
    const multiplier = 20;
    const offset = [-multiplier / 2, 0, -multiplier / 2];
    // data.map((point, i) => {
    //   // const pointEl = createExpandingPoint(point.map((x, i) => x * multiplier + offset[i]));
    //   const scene = document.getElementById('scene');
    //   const box = createBoxEl();
    //   box.setAttribute('position', point.map((x, i) => x * multiplier + offset[i]).join(' '))
    //   scene.appendChild(box);
    // });
  }

  html(){
    return(`
      <a-scene
        id='scene'
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
          id='plane'
          height="100" width="100" rotation="-90 0 0" />
        <Box/>
      </a-scene>
    `)
  }
}

export default new App();