const VALID_COLORS = ['red','blue','yellow']

class Ducktypium {
  constructor(color) {
    if (!VALID_COLORS.includes(color)){
      throw new TypeError('Color must be red, yellow or blue!');
    }
    this.color = color;
    this.calibrationSequence = [];
  }

  refract(pickColor) {
    if (!VALID_COLORS.includes(pickColor)){
      throw new TypeError('Color must be red, yellow or blue!');
    } else if (this.color =='red' && pickColor == 'blue'){
      return 'purple';
    } else if (this.color == 'red' && pickColor == 'yellow'){
      return 'orange'
    }else if(this.color == 'blue'&& pickColor == 'yellow'){
      return 'green'
    } else if (this.color =='blue' && pickColor == 'red'){
      return 'purple';
    } else if (this.color == 'yellow' && pickColor == 'red'){
      return 'orange'
    }else if(this.color == 'yellow'&& pickColor == 'blue'){
      return 'green'
    }else {
      return this.color;
    }
  }calibrate(arrayOfNumbers){
    let currentArray = arrayOfNumbers.sort();
    currentArray.forEach( item => {
      let multiply = item*3;
      this.calibrationSequence.push(multiply)
    })
  }
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]