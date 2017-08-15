'use strict';

var Templates = {
  loadNavbar: function() {
    $('body').before(`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Jurassic Park</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <input id="user-input" class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

      </div>
    </nav>
    `);
  },
    // TODO: highlight border of grid instead of write names to DOM.
  loadAttractionsToDOM: function(data){
    $('.attractions-list').html('')
    _.forEach(data, function(item) {
      $('.attractions-list').append(`<a href="#">${item.name}</a><br>`)
    });
  }
};

module.exports = Templates;
