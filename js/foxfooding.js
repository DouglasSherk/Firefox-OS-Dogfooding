/* */

'use strict';


var TitleBar = {

  get view() {
    return document.getElementById('title');
  },

  init: function() {
    this.view.addEventListener('click', this);
  },


  handleEvent: function tb_handleEvent(evt) {
    console.log("evt.target", evt.target);

    switch (evt.type) {
    case 'click':
      console.log('click');
      if(evt.target.getAttribute('action') === 'back') {
        history.back(-1);
      }
      break;
    }
  }
}


TitleBar.init();
