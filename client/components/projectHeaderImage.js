var $ = require('jquery');
window.jQuery = window.$ = $;
require('bootstrap');

import headerFrog from '/public/images/carousel/red-eyed-frog.jpg';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('.project-header').append(headerFrog);
  }
};
module.exports = app;
