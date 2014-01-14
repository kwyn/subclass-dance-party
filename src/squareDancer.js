var SquareDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = Dancer.prototype.step;

  this.step();

  this.$node.addClass('square');

};

SquareDancer.prototype = Object.create(Dancer.prototype);

SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  this.$node.toggle();
};


var makeSquareDancer = function(top, left, timeBetweenSteps){
  return new SquareDancer(top, left, timeBetweenSteps);
};