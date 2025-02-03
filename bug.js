function foo(a, b) {
  if (a === 0 || b === 0) { 
    return 0; //This line is incorrect. It should return 1
  }
  return a + b;
}