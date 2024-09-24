let n : never ;

// cannot assign any values to never type

function forever(): never {
    while (true) {}
  }

  //Here the function return can be never because it will return the control to the caller.