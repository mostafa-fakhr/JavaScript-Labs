
function add(num1, num2) {
    return num1 + num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function divide(num1, num2) {
    return num1 / num2;
  }
  
  function modulus(num1, num2) {
    return num1 % num2;
  }
  
  var num1 = parseInt(prompt("Enter your first number"));
  
  var isValidOperation= true;
  while(isValidOperation)
{
     var operation = prompt(
    "Enter an operation\n 1.sum\n 2.multiply\n 3.subtract\n 4.division\n 5.modulus"
  );
  var result=0;

  switch (operation) {
    case "sum":
    case "1":
      var num2 = parseInt(prompt("Enter your second number"));
      result = add(num1, num2);
      alert(`Result = ${result}`);
      isValidOperation=false;
      break;
    case "multiply":
    case "2": 
      var num2 = parseInt(prompt("Enter your second number"));   
      result = multiply(num1, num2);
      alert(`Result = ${result}`);
      isValidOperation=false;
      break;
    case "subtract":
    case "3":  
      var num2 = parseInt(prompt("Enter your second number"));  
      result = subtract(num1, num2);
      alert(`Result = ${result}`);
      isValidOperation=false;
      break;
    case "division":
    case "4":
      var num2 = parseInt(prompt("Enter your second number"));    
      result = divide(num1, num2);
      alert(`Result = ${result}`);
      isValidOperation=false;
      break;
    case "modulus":
    case "5":
      var num2 = parseInt(prompt("Enter your second number"));    
      result = modulus(num1, num2);
      alert(`Result = ${result}`);
      isValidOperation=false;

      break;
    default:
      alert("Please enter a valid operation");
      isValidOperation=true;
  }
}
    var isResult= confirm(`Do you want to make a new operation on your result : ${result}`)
  
    while(isResult==true)
{
    var isValidOperation= true;
    while(isValidOperation)
  {
    var newNum=0;
   
    var operation = prompt(
        "Enter an operation\n 1.sum\n 2.multiply\n 3.subtract\n 4.division\n 5.modulus"
      );

    switch (operation) {
        case "sum":
        case "1":
          var newNum= parseInt(prompt("Enter the new number "));
          result = add(result, newNum);
          alert(`Result = ${result}`);
          isValidOperation=false;

          break;
        case "multiply":
        case "2":
          var newNum= parseInt(prompt("Enter the new number "));    
          result = multiply(result, newNum);
          alert(`Result = ${result}`);
          isValidOperation=false;

          break;
        case "subtract":
        case "3": 
          var newNum= parseInt(prompt("Enter the new number "));   
          result = subtract(result, newNum);
          alert(`Result = ${result}`);
          isValidOperation=false;

          break;
        case "division":
        case "4": 
          var newNum= parseInt(prompt("Enter the new number "));   
          result = divide(result, newNum);
          alert(`Result = ${result}`);
          isValidOperation=false;

          break;
        case "modulus":
        case "5": 
          var newNum= parseInt(prompt("Enter the new number "));   
          result = modulus(result, newNum);
          alert(`Result = ${result}`);
          isValidOperation=false;

          break;
        default:
          alert("Please enter a valid operation");
          isValidOperation=true;

      }
    }
    var isResult= confirm(`Do you want to make a new operation on your result : ${result}`)

}