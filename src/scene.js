// Consider using Aviya

const scene = document.createElement('a-scene');

const camera = document.createElement('a-camera');
camera.setAttribute('look-controls', 'pointerLockEnabled: true');
camera.setAttribute('wasd-controls', true);

const cursor = document.createElement('a-cursor');
cursor.setAttribute('fuse', true);
cursor.setAttribute('fuseTimeout', 500);
cursor.setAttribute('position', '0 0 -1');
cursor.setAttribute('geometry', 'primitive: ring; radiusInner: 0.02; radiusOuter: 0.03');
cursor.setAttribute('material', 'color: black; shader: flat');
// cursor.setAttribute('raycaster', 'objects: .clickable'); // Not working

const fusingAnimation = document.createElement('a-animation');
fusingAnimation.setAttribute('begin', 'cursor-fusing');
fusingAnimation.setAttribute('easing', 'ease-in');
fusingAnimation.setAttribute('attribute', 'scale');
fusingAnimation.setAttribute('dur', 500);
fusingAnimation.setAttribute('fill', 'backwards');
fusingAnimation.setAttribute('from', '1 1 1');
fusingAnimation.setAttribute('to', '0.1 0.1 0.1');

const clickAnimation = document.createElement('a-animation');
clickAnimation.setAttribute('begin', 'click');
clickAnimation.setAttribute('easing', 'ease-in');
clickAnimation.setAttribute('attribute', 'scale');
clickAnimation.setAttribute('dur', 150);
clickAnimation.setAttribute('fill', 'forwards');
clickAnimation.setAttribute('from', '0.1 0.1 0.1');
clickAnimation.setAttribute('to', '1 1 1');

cursor.appendChild(fusingAnimation);
cursor.appendChild(clickAnimation);
camera.appendChild(cursor);

const ground = document.createElement('a-plane');
ground.setAttribute('color', 'green');
ground.setAttribute('height', 100);
ground.setAttribute('width', 100);
ground.setAttribute('rotation', '-90, 0, 0');

scene.appendChild(camera);
scene.appendChild(ground);

const box = document.createElement('a-box');
box.setAttribute('cursor-listener', true);
box.setAttribute('position', '0 2 -2');

scene.appendChild(box);

export default scene;
