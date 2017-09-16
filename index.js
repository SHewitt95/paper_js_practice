function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
};

Circle.prototype = {
  constructor: Circle,

  draw: function() {
    var path = new Path.Circle({
      center: this.center || view.center,
      radius: this.radius || 50,
      strokeColor: 'black'
    })
    this.path = path;
    return this;
  }
}

var myCircle = new Circle([100,0], 200).draw();
var myCircle2 = new Circle().draw();

function onMouseMove(event) {
  myCircle.path.setPosition(event.event.x, event.event.y);
  myCircle2.path.setPosition(event.event.x + myCircle.radius, event.event.y + myCircle.radius);
}