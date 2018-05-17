// Add component for listening to cursor actions

export default (coordinates) => {
  const expandingPoint = document.createElement('a-entity');
  expandingPoint.setAttribute('material', 'transparent: true; opacity: 0');
  expandingPoint.setAttribute('geometry', 'primitive: sphere; radius: 0.15');
  // expandingPoint.setAttribute('className', 'clickable');
  expandingPoint.setAttribute('position', coordinates.join(' '));
  expandingPoint.setAttribute('expand-on-hover', true);


  const mainSphere = document.createElement('a-sphere');
  // mainSphere.setAttribute('className', 'clickable');
  mainSphere.setAttribute('geometry', 'radius: 0.1');
  mainSphere.setAttribute('position', '0 0 0');
  mainSphere.setAttribute('material', 'transparent: false; opacity: 1.0; color: black');

  const outline = document.createElement('a-sphere');
  // outline.setAttribute('className', 'clickable');
  outline.setAttribute('geometry', 'radius: 0.15');
  outline.setAttribute('position', '0 0 0');
  outline.setAttribute('material', 'transparent: false; opacity: 1.0; color: grey; shader: flat; side: back');

  expandingPoint.appendChild(mainSphere);
  expandingPoint.appendChild(outline);

  return expandingPoint;
};
