var BooDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = Dancer.prototype.step;

  this.step();

  this.$node.css('border', 'none').prepend('<img id="Boo" src="Boo-icon.png" />');
};

BooDancer.prototype = Object.create(Dancer.prototype);

BooDancer.prototype.constructor = BooDancer;

BooDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  // this.$node.toggleClass('shifty');
  this.$node.fadeToggle('slow');
};


var makeBooDancer = function(top, left, timeBetweenSteps){
  return new BooDancer(top, left, timeBetweenSteps);
};