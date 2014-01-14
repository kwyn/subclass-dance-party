var BobOmbDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = Dancer.prototype.step;
  this.count =0;
  this.step();

  this.$node.css('border', 'none').prepend('<img id="Bob-Omb" src="bob-omb.gif" height="100" width="100" />');

};

BobOmbDancer.prototype = Object.create(Dancer.prototype);

BobOmbDancer.prototype.constructor = BobOmbDancer;


BobOmbDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  /* toggle() is a jQuery method to show/hide the <span> tag.
   * See http://api.jquery.com/category/effects/ for this and
   * other effects you can use on a jQuery-wrapped html tag. */
  this.$node.animate({"top": "+=40"}, "slow");
  // if (this.$node.children()[0].x > 1900){
  //   this.$node.remove();
  // };
  this.count += 1;
  if(this.count > 8){
    this.$node.remove();
  }
};


var makeBobOmbDancer = function(top, left, timeBetweenSteps){
  return new BobOmbDancer(top, left, 190);
};

var makeBobOmbDancerBombs = function(){
  for (var i = 0; i < 100; i++){
    var dancer = makeBobOmbDancer(
            $("body").height() * Math.random(),
            $("body").width() * Math.random(),
            Math.random() * 1000
          );
    $('body').append(dancer.$node);
  }
  setTimeout(function(){
    document.body.style.backgroundImage="url('Explosion.gif')";
    $('body').css('background-size', 'cover');
    $('body').children('.dancer, .yoshi').remove();
  },1800);
};