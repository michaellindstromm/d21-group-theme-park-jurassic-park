'use strict';

let dataLoader = require('./data_loader');
let templates = require("./templates.js");

var Handlers = {
  loadAttractionsOnEnterKey: function() {
    $(document).keypress(function(event) {
      if (event.keyCode === 13 && $('#user-input').is(':focus') && $('#user-input').val() !== '') {
        let userStr = $('#user-input').val();
        let capitalizedWord = _.startCase(_.toLower(userStr));

        dataLoader.attractionByNameCall(capitalizedWord)
          .then(function(data){

            templates.loadAttractionsToDomOnSearch(data);
          });
      }
    });
  },
  loadAttractionsOnClickArea: function() {

    $(".grid-row").click(function(event){

      templates.loadAttractionsByArea(dataLoader.attractionsCallByAreaId, event.target.id);

    })
  }


};

Handlers.loadAttractionsOnEnterKey();
Handlers.loadAttractionsOnClickArea();
module.exports = Handlers;

