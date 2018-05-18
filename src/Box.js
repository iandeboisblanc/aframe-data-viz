import Aviya from 'aviya'

class Box extends Aviya{
  constructor(){
    super();

  };

  html(){
    return(`
      <a-sphere
        cursor-listener
        color='purple'
        position='0 3 2'>

      </a-sphere>
    `)
  }
}

export const createBoxEl = () => {
  const entity = document.createElement('a-entity');
  entity.innerHTML = new Box().html();
  return entity.children[0];
}

export default new Box();


// <a-animation
// attribute='geometry.radius'
// dur='500'
// direction='forwards'
// from='0'
// to='1'
// fill='both'
// delay='${Math.floor(Math.random() * 2000)}'>
// </a-animation>