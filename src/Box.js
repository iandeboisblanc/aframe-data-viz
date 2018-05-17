import Aviya from 'aviya'

class Box extends Aviya{
  constructor(){
    super();
  };

  html(){
    return(`
      <a-box cursor-listener color='purple' position='0 3 2' />
    `)
  }
}

export default new Box();