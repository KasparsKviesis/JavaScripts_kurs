//funkcijas definēšana ar izteiksmes palīdzību
//funcijas definēšana ar apgalvojuma palīdzību

function square_statement (number) {
    return number * number;
  }
  const x = square_statement(4);
  console.log(x);

  const square_expression = function (number) {
    return number * number;
  }
  const y = square_expression(4);
  console.log(y);

  //nākošais piemērs

  const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  }
  
  console.log(factorial(3));
  console.log(factorial(4));
  console.log(factorial(5))

  //ja n ir mazāks par 2, n nav mazāks par 2 tiks atgriezta vērtība (n-1) 
  //kamēr n būs mazāks par 2. Ja 3 tad iet aplis un beigās sareizinās ar 2. 
  //Ja 4 tad 4*3*2, ja 5 tad 5*4*3*2.
  //: nozīmē ka atdalīts un sākas otra darbība aiz kola

  //piemērs ar funkciju kuras arguments (viens no) arī ir funkcija (f)
  //
  function map(f, a) {
    const result = [];
   //i=0;
    for (const v of a) {
  // result[i] = f(v);
  // i++;
  result.push(f(v));
    }
    return result;
  }
  
  const square_for_array_each_element = function (x) {
    return x * x;
  }

  const cube_for_array_each_element = function (x) {
    return x * x * x;
  }
  
  const numbers = [0, 1, 2, 5, 10];

  const squares = map(square_for_array_each_element, numbers);
  console.log(squares);

  const cubes = map(cube_for_array_each_element, numbers);
  console.log(cubes);

  // savs funkcijas piemērs

  function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function ()
    {
        return 3.14 * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2 * 3.14 * this.radius;
    };
}
var c = new circle(5);
console.log("Laukums =", c.area().toFixed(2) + " m2");
document.getElementById("Laukums").innerHTML = text + c.area;

console.log("Perimetrs =", c.perimeter().toFixed(2) + " m");
document.getElementById("Perimetrs").innerHTML = perimeter;

//Mārītes piemērs

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
    }
document.getElementById("demo3").innerHTML = "The temperature is " + toCelsius(77) + " Celsius"