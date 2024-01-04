let shape= prompt("Enter your shape: \n 1.circle\n 2.triangle\n 3.square\n 4.rectangle\n 5.Parallelogram\n 6.trapezium\n 7.ellipse");

switch (shape){
    case "1":
    case "circle":
        radius= parseFloat(prompt("Enter circle radius"));
        alert("area of circle =" + circle(radius));
        break;
    case "2":
    case "triangle":
        var base=parseFloat(prompt("Enter the triangle base"));
        var height=parseFloat(prompt("Enter the triangle height"));
        alert(`area of triangle = `+ triangle(base,height));
        break;
    case "3":
    case "square":
        var l=parseFloat(prompt("Enter the square length or width"));
        alert(`area of square = `+square(l));
        break;
    case "4":
    case "rectangle":
        var l=parseFloat(prompt("Enter the rectangle length"));
        var w=parseFloat(prompt("Enter the rectangle width"));
        alert(`area of rectangle = `+rectangle(l,w));
        break;
    case "5":
    case "paralellogram":
        var b=parseFloat(prompt("Enter the paralellogram base"));
        var h= parseFloat(prompt("Enter the paralellogram height"));
        alert(`area of paralellogram = `+parallelogram(b,h));
        break;
    case "6":
    case "trapezium":
        var a= parseFloat(prompt("Enter the length of the first side"));
        var b= parseFloat(prompt("Enter the length of the second side"));
        var h= parseFloat(prompt("Enter the height of the trapizium"));
        alert(`area of trapezium = `+trapezium(a,b,h));
        break;
    case "7":
    case "ellipse":
        var a= parseFloat(prompt("Enter the length of half the minor axis"));
        var b= parseFloat(prompt("Enter the length of half the major axis"));
        alert(`area of ellipse = `+ellipse(a,b));
        break;
}

function circle(radius){
    return 3.14*radius*radius
    }
    function triangle(base,height){
        return 0.5*base*height;  
    }
    function square(l){
        return l*l;
    }
    function rectangle(l,w){    
        return l*w;
    }
    function parallelogram(b,h){
        return b*h;
    }
    function trapezium(a,b,h){
        return 0.5*(a+b)*h;
    }
    function ellipse(a,b){
        return 3.14*a*b;
    }
    