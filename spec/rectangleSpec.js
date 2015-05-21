var Rectangle = require("../src/rectangle");

var rectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle(4,6, "blue");
  });

  describe("area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
      rectangle.sideLength = 5;
      rectangle.sideWidth = 6;
      expect(rectangle.area()).toEqual(30);
    });
  });

  describe("perimeter", function() {
    it("should be 20 for a rectangle with side lengths 4,6", function() {
      expect(rectangle.perimeter()).toEqual(20);
      rectangle.sideLength = 5;
      rectangle.sideWidth = 6;
      expect(rectangle.perimeter()).toEqual(22);
    });
  });

  describe("draw", function() {
    it("should return a string for the top half of the square", function() {
      expect(rectangle.draw()).toEqual("------\n|   |\n|   |\n|   |\n|   |\n -----");
      rectangle.sideLength = 3;
      rectangle.sideWidth = 4;
      expect(rectangle.draw()).toEqual("---\n| |\n| |\n---");
    });
  });  

  // Write more specs!!
});
