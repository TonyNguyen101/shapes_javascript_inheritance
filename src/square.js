var Shape = require("./shape");

function Square(sideLength, color) {
  Shape.call(this, 4, color);
  this.sideLength = sideLength;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.

Square.prototype = {
	area: function(){
		return this.sideLength * this.sideLength;
	},
	perimeter: function(){
		return this.sideLength * 4;
	},
	draw: function(){
		var picture = "";
		for (var i = 0; i < this.sideLength; i++){
			picture += "-";		
		}
		for (var j = 0; j < this.sideLength-1; j++){
			picture += "\n|";
			picture += " ";
			picture += "|";
		}
		picture += "\n";
		for (var k = 0; k < this.sideLength; k++){
			picture += "-";		
		}
		return picture;	
	}
};
module.exports = Square;
