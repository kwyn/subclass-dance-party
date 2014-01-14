var EverybodyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = Dancer.prototype.step;
  
  this.$node.prepend('<img id="mario" src="Everybody.gif" />');
  this.$node.css('top', '638px').css('left', '0px');


  this.step();
};

EverybodyDancer.prototype = Object.create(Dancer.prototype);

EverybodyDancer.prototype.constructor = EverybodyDancer;

EverybodyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  this.$node
};


var makeEverybodyDancer = function(top, left, timeBetweenSteps){
  if (window.dancers[3].length === 0){
    var everyone = new EverybodyDancer(top, left, timeBetweenSteps);
    window.dancers[3].push(everyone);
    return everyone;
  }
};