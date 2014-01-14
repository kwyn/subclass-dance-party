var yoshiDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = Dancer.prototype.step;

  this.$node.css('top', '580px').css('left', '0px');
  
  this.$node.removeClass().addClass('yoshi').prepend('<img id="yoshi" src="testgif.gif" />');
  this.step();
};

yoshiDancer.prototype = Object.create(Dancer.prototype);

yoshiDancer.prototype.constructor = yoshiDancer;

yoshiDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  this.$node.animate({"left": "+=40"}, "fast");
  if (this.$node.children()[0].x > 1900){
    this.$node.remove();
  };
};


var makeyoshiDancer = function(top, left, timeBetweenSteps){
  return new yoshiDancer(top, left, timeBetweenSteps);
};