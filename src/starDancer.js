var StarDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = Dancer.prototype.step;


  

  this.$node.prepend('<img id="star" src="Star.png" height="175" width="175" />').addClass('star');
  this.step();
};

StarDancer.prototype = Object.create(Dancer.prototype);

StarDancer.prototype.constructor = StarDancer;

StarDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  
  this.$node.animate();

};


var makeStarDancer = function(top, left, timeBetweenSteps){
  var star = new StarDancer(top, left, timeBetweenSteps);
  window.dancers[1].push(star);
  return star;
};