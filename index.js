function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
};

Circle.prototype = {
  constructor: Circle,

  draw: function() {
    var path = new Path.Circle({
      center: this.center,
      radius: this.radius,
      strokeColor: 'black'
    })
    this.path = path;
    return this;
  }
}

var myCircle = new Circle([100,0], 100).draw();

function onMouseMove(event) {
  myCircle.path.setPosition(event.event.x, event.event.y);
}