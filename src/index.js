// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import aframe from 'aframe';

import componentsInit from './components';
// import scene from './scene';
// import createExpandingPoint from './expandingPoint';
import App from './App';

componentsInit();

App.render('#root');


// const root = document.getElementById("root");

// root.appendChild(scene);

// const pointData = [];
// for (let i = 0; i < 100; i++) {
//   pointData.push([Math.random(), Math.random(), Math.random()]);
// }

// const multiplier = 20;
// const offset = [-multiplier / 2, 0, -multiplier / 2];
// pointData.map((point, i) => {
//   const pointEl = createExpandingPoint(point.map((x, i) => x * multiplier + offset[i]));
//   scene.appendChild(pointEl);
// });
