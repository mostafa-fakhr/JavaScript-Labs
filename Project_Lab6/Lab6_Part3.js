class Triple {
  static customName = "Tripler";
  static description = "I triple any number";
  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = "square the triple of any number you provide";
  static calculate(n) {
    return Triple.calculate(n) * Triple.calculate(n);
  }
}
console.log(Triple.description); // --> I triple any number
console.log(Triple.calculate()); // --> 3
console.log(Triple.calculate(6)); //--> 18
console.log(SquaredTriple.description); //--> squared the triple..etc
console.log(SquaredTriple.calculate(3)); //-->81
console.log(SquaredTriple.longDescription); //--> undefined
console.log(SquaredTriple.customName); //-->tripler
