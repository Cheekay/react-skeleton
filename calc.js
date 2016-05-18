var display = console.log;

var cal = function(){
  this.add = function(a,b) {
    display(a+b);
  }

  this.subtract = function(a,b) {
    display(a-b);
  }

  this.divide = function(a,b) {
    display(a/b);
  }

  this.multiply = function(a,b) {
    display(a*b);
  }

  return{
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply
  }

}();

module.exports = cal;
