var MarioDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = Dancer.prototype.step;
  
  this.$node.prepend('<img id="mario" src="Mario.gif" />');
  if (window.dancers[2].length === 0){
    this.$node.css('top', '494px').css('left', '490px');
  } else {
    var left = 600 + Math.random() * 800;
    this.$node.css('top', '638px').css('left', "" + left + "px")
  }

  this.step();
};

MarioDancer.prototype = Object.create(Dancer.prototype);

MarioDancer.prototype.constructor = MarioDancer;

MarioDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  this.$node
};


var makeMarioDancer = function(top, left, timeBetweenSteps){
  var Mario = new MarioDancer(top, left, timeBetweenSteps);
  window.dancers[2].push(Mario);
  return Mario;
};