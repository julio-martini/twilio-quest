function scan(freightItems) {
    let contrabandIndexes = [];
  
    /*
    Replace this comment with your code.
    
    Your code needs to:
    - Loop through every item in the freightItems array
    - if the item is equal to "contraband", add the current index of the item 
      to contrabandIndexes - hint: use the array "push()" method
  
    */
      let n = 0
   freightItems.forEach(element => { if (element =='contraband'){
      
       contrabandIndexes.push(n);
       n++;
   }
   else{n++}
       
   });
  
    return contrabandIndexes;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
  console.log('Contraband Indexes: ' + indexes); // should be [1, 4]