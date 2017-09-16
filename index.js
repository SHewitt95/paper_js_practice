function Polygon(center, sides, radius) {
  this.center = center;
  this.radius = radius;
  this.sides = sides;
  this.states = {
    idle: {active: false, target: 'selected'},
    selected: {active: true, target: 'idle'}
  };
  this.state = this.states.idle;
};

Polygon.prototype = {
  constructor: Polygon,

  draw: function() {
    var path = new Path.RegularPolygon({
      center: this.center || view.center,
      radius: this.radius || 50,
      sides: this.sides || 4,
      strokeColor: 'black',
      fillColor: 'white'
    })
    this.path = path;

    this.path.onMouseDown = function (event) {
      console.log(event.toString());
    }

    return this;
  },

}

var myShape = new Polygon(view.center, 3, 100).draw();