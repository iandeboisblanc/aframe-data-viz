import aframe from 'aframe';

// import createExpandingPoint from './expandingPoint';

export default () => {
  aframe.registerComponent('cursor-listener', {
    init: function () {
      var lastIndex = -1;
      var COLORS = ['red', 'green', 'blue'];
      this.el.addEventListener('click', function (e) {
        lastIndex = (lastIndex + 1) % COLORS.length;
        this.setAttribute('material', 'color', COLORS[lastIndex]);
        console.log('I was clicked at: ', e.detail.intersection.point);
      });
    }
  });

  aframe.registerComponent('expand-on-hover', {
    init: function () {
      this.children = this.el.children;
      console.log(this.children)
      this.el.addEventListener('mouseenter', function (e) {
        console.log('????', this)
        this.setAttribute('geometry', 'radius', 1);
        this.setAttribute('material', 'transparent: true; opacity: 0');
        const node = e.target;
        const childData = [];
        for (let i = 0; i < 10; i++) {
          childData.push([Math.random(), Math.random(), Math.random()]);
        }
        childData.map((d, i) => {
          const multiplier = 2;
          const offset = [-multiplier / 2, -multiplier / 2, -multiplier / 2];
          const dataPoint = document.createElement('a-sphere');
          dataPoint.setAttribute('color', 'yellow');
          dataPoint.setAttribute('radius', '0.03');
          dataPoint.setAttribute('position', d.map((x, i) => x * multiplier + offset[i]).join(' '));
          node.appendChild(dataPoint);
        });
      });

      this.el.addEventListener('mouseleave', (e) => {
        this.el.setAttribute('geometry', 'radius', 0.1);
        this.el.setAttribute('material', 'transparent: false; opacity: 1.0');
        const node = e.target;
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
        console.log('about to append children:', this.children)
        for (let i = 0; i < this.children.length; i++) {
          console.log('child!')
          this.el.appendChild(this.children[i])
        }
      });
    }
  });

  // // This is a test to see if we can invoke functions via components:
  // aframe.registerComponent('handle-mouseenter', {
  //   schema: {
  //     handler: {type: 'string'}
  //   },
  //   init: function () {
  //     this.el.addEventListener('mouseenter', (evt) => {
  //       eval(this.data.handler)();
  //     });
  //   }
  // });
}
