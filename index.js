/**
 * 
 * @param {Array<number>} center 
 * @param {number} sides 
 * @param {number} radius 
 */
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
    var shape = new Path.RegularPolygon({
      center: this.center || view.center,
      radius: this.radius || 50,
      sides: this.sides || 4,
      strokeColor: 'black',
      fillColor: 'white'
    })
    this.shape = shape;

    this.shape.onMouseDrag = function (event) {
      var shape = this;
      var x_pos = shape.position.x;
      var y_pos = shape.position.y;
      // TODO: Get shape to move relative to click position.
      // Currently, shape's center jumps to click position.
      // Instead, the center should move relative to the mouse.

      // var x_offset = Math.abs(event.event.x - x_pos);
      // var y_offset = event.event.y - y_pos;
      // var distance = Math.sqrt((x_offset*x_offset) + (y_offset*y_offset));

      // console.log('------------------------------------');
      // console.log('distance', distance);
      // console.log('x_pos', x_pos);
      // console.log('event.event.x', event.event.x);
      // console.log('x_offset', x_offset);      
      // console.log('y_pos', y_pos);
      // console.log('event.event.y', event.event.y);
      // console.log('y_offset', y_offset);

      shape.setPosition(event.event.x , event.event.y);
      shape.bounds.selected = true;
    }

    this.shape.onMouseUp = function (event) {
      var shape = this;
      shape.bounds.selected = !shape.bounds.selected;
    }

    this.shape.onMouseDown = function (event) {
      var shape = this;
      shape.bounds.selected = !shape.bounds.selected;
    }

    return this;
  },
}

var myShape = new Polygon(view.center, 3, 50);
myShape.draw();