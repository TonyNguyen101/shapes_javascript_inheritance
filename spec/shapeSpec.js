var Shape = require("../src/shape");
console.log(Shape);

var shape;
shape = new Shape(1,"red");
console.log(shape.color);

describe("Shape", function() {
  beforeEach(function() {
    shape = new Shape(1, "red");
  });

  describe("area", function() {
    it("should should be 0 for this abstract shape", function() {
      expect(shape.area()).toEqual(0);
    });
  });

  describe("perimeter", function() {
    it("should should be 0 for this abstract shape", function() {
      expect(shape.perimeter()).toEqual(0);
    });
  });
  
  describe("draw", function() {
    it("shoud return a string that says how many sides the shape has", function() {
      expect(shape.draw()).toEqual("A shape with 1 sides");
    });
  });  

  describe("toString", function() {
    it("shoud return a string that says how many sides the shape has and what color it is", function() {
      expect(shape.toString()).toEqual("[Shape sides:1, color:red ]");
    });
  });    

  describe("getRGB", function() {
    it("Return the rgb value (as a string) for the color you've selected", function() {
      expect(shape.getRGB()).toEqual("rgb(255,0,0)");
      shape.color = "blue";
      expect(shape.getRGB()).toEqual("rgb(0,0,255)");
			shape.color = "green";
      expect(shape.getRGB()).toEqual("rgb(0,255,0)");
			shape.color = "orange";
      expect(shape.getRGB()).toEqual("rgb(255,128,0)");
      shape.color = "pink";
      expect(shape.getRGB()).toEqual("rgb(255,0,255)");
    });
  });    

  // Write more specs!!
});
