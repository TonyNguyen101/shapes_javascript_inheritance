var Square = require("../src/square");

var square;

describe("Square", function() {
  beforeEach(function() {
    square = new Square(2, "red");
  });

  describe("area", function() {
    it("should be 4 for a square", function() {
      expect(square.area()).toEqual(4);
      square.sideLength = 3;
      expect(square.area()).toEqual(9);
    });
  });

  describe("perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.perimeter()).toEqual(8);
      square.sideLength = 3;
      expect(square.perimeter()).toEqual(12);
    });
  });
  
  describe("draw", function() {
    it("should return a string for the top half of the square", function() {
      expect(square.draw()).toEqual("--\n| |\n--");
      square.sideLength = 3;
      expect(square.draw()).toEqual("---\n| |\n| |\n---");
    });
  });  

  describe("toString", function() {
    xit("shoud return a string that says how many sides the shape has and what color it is", function() {
      expect(shape.toString()).toEqual("[Shape sides:4, color:red ]");
    });
  }); 
});
