'use strict';

var learnjs = {}; // Add a namespace to avoid name collisions

// Create the problem view by saving the view's markup
learnjs.problemView = function(problemNumber){
  var title = 'Problem #' + problemNumber + ' Coming soon!';
  return $('<div class="problem-view">').text(title);
};

// This is the router function
learnjs.showView = function(hash){

  // Store the reference views in an object
  var routes = {
    '#problem': learnjs.problemView
  };

  var hashParts = hash.split('-');

  // Create a function that accesses the correct view from the object
  var viewFn = routes[hashParts[0]];
  if(viewFn){
    $('.view-container').empty().append(viewFn(hashParts[1]));
  }
};

learnjs.appOnReady = function(){
  window.onhashchange = function(){ //Attach a listener on hash change
    learnjs.showView(window.location.hash);
  };
  learnjs.showView(window.location.hash);
}
