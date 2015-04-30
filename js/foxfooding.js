/* */

'use strict';


var TitleBar = {

  get view() {
    return document.getElementById('title');
  },

  init: function() {
    this.view.addEventListener('click', this);
    this.view.addEventListener('action', this);
  },


  handleEvent: function tb_handleEvent(evt) {
    switch (evt.type) {
    case 'click':
      console.log('click');
      break;
    case 'action':
      console.log('action');
      history.back(-1);
      break;
    }
  }
}


TitleBar.init();
