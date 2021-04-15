// The following would produce an error
try {
    const badColor = new Ducktypium('pink');
  } catch(e) {
    console.log('Color must be red, yellow, or blue!');
  }
  
  // Create a new instance of the class
  const dt = new Ducktypium('red');
  
  console.log(dt.color); // prints 'red'
  
  console.log(dt.refract('blue')); // prints 'purple'
  console.log(dt.refract('red')); // prints 'red'
  
  dt.calibrate([3, 5, 1]);
  
  console.log(dt.calibrationSequence); // prints [3, 9, 15]